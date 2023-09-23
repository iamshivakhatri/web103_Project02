const renderBackground = () => {
    const backgroundSection = document.getElementById('background-section');
    const img = new Image();
    img.src = '/cinema.jpg'; // Adjust the file path to match the location of your image
    img.alt = 'Cinema Background'; // Add alt text for accessibility
    backgroundSection.style.backgroundImage = `url("${img.src}")`;

    img.onload = () => {
        backgroundSection.style.backgroundImage = `url("${img.src}")`;
    };
};

renderBackground();
