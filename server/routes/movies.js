import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import movieData from "../data/movies.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const router = express.Router()
console.log("This is __dirname",__dirname);

router.get('/', (req, res) => {
    res.status(200).json(movieData)
  })
router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/movie.html'))
    

  })
export default router;
