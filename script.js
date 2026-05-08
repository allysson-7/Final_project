// Random facts array
const facts = [
    "Octopuses have three hearts!",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "The shortest war in history lasted only 38-45 minutes.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "A shrimp's heart is in its head.",
    "The unicorn is the national animal of Scotland.",
    "A day on Venus is longer than its year.",
    "There are more possible games of chess than atoms in the observable universe.",
    "The human brain uses about 20% of the body's total energy."
];

// Colors for randomization
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3'];

// Function to get random element from array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to randomize background color
function randomizeBackground() {
    const randomColor1 = getRandomElement(colors);
    const randomColor2 = getRandomElement(colors);
    document.body.style.background = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
}

// Function to randomize title
function randomizeTitle() {
    const titles = ["Random Fun!", "Surprise Landing!", "Fun Zone!", "Adventure Awaits!", "Magic Happens!"];
    document.getElementById('title').textContent = "Welcome to " + getRandomElement(titles);
}

// Function to randomize content
function randomizeContent() {
    document.getElementById('randomContent').innerHTML = `<p>${getRandomElement(facts)}</p>`;
}

// Function to randomize features
function randomizeFeatures() {
    const features = document.querySelectorAll('.feature p');
    features.forEach(feature => {
        feature.textContent = getRandomElement(facts);
    });
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Event listener for randomize button
document.getElementById('randomizeBtn').addEventListener('click', function() {
    randomizeBackground();
    randomizeTitle();
    randomizeContent();
    randomizeFeatures();
});

// Initial randomization on load
window.addEventListener('load', function() {
    createParticles();
    randomizeBackground();
    randomizeContent();
    randomizeFeatures();
});