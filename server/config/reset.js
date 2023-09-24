import { pool } from '../config/database.js'
import '../config/dotenv.js'
import movieData from '../data/movies.js'

//Loads movies into the database

const createMoviesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS movies;

    CREATE TABLE IF NOT EXISTS movies (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      genre VARCHAR(255) NOT NULL,
      releaseYear VARCHAR(255) NOT NULL,
      posterImage VARCHAR(2000) NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 movies table created successfully')
  } catch (err) {
    console.error('⚠️ error creating movies table', err)
  }
}





const seedMoviesTable = async () => {
  await createMoviesTable()

  movieData.forEach((movie) => {
    const insertQuery = {
      text: 'INSERT INTO movies (title, genre, releaseYear, posterImage) VALUES ($1, $2, $3, $4)'
    }

    const values = [
        movie.title,
        movie.genre,
        movie.releaseYear,
        movie.posterImage,
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting movie', err)
        return
      }
      console.log(`✅ ${movie.title} added successfully`)
    })
  })
}

seedMoviesTable()
