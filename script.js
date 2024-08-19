const button = document.getElementById('celebrateButton');
const confettiContainer = document.getElementById('confetti');
const factCard = document.getElementById('factCard');

// Array of bicycle facts
const facts = [
    "The first bicycle was invented in 1817 by Karl von Drais.",
    "Over 100 million bicycles are manufactured each year.",
    "The fastest speed on a bicycle is 183.932 mph, achieved by Denise Mueller-Korenek in 2018.",
    "The longest tandem bicycle seated 35 people and was over 20 meters long.",
    "The Tour de France is the world's most prestigious bicycle race, covering about 2,200 miles.",
    "The Netherlands is home to more bicycles than people!",
    "Bicycles save over 238 million gallons of gasoline every year.",
    "The word 'bicycle' was first used in 1869.",
    "China is the largest producer of bicycles, manufacturing over 60% of the world's bicycles.",
    "In Copenhagen, Denmark, 62% of residents commute by bicycle daily.",
    "Bicycles can be up to 50 times more energy-efficient than cars.",
    "The world's most expensive bicycle, the 'Butterfly Trek Madone,' was auctioned for $500,000.",
    "Biking for 20 minutes a day can reduce the risk of heart disease by 50%.",
    "Mountain biking became an official Olympic sport in 1996.",
    "In the UK, there are more than 23,000 miles of cycle paths.",
    "Bicycles were used extensively in the First World War to transport soldiers and equipment.",
    "The first bicycle race was held on May 31, 1868, in Paris, France.",
    "Approximately 1 billion bicycles are being used worldwide today."
];

// Function to display a random fact
function displayRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factCard.textContent = `❤️ Fun Fact: ${randomFact}`;
}

// Function to create confetti
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.textContent = ['🎉','🎊'][Math.floor(Math.random() * 4)];
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confettiPiece.style.animationDelay = `${Math.random()}s`;
        confettiContainer.appendChild(confettiPiece);
    }

    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Display a random fact on page load
window.onload = () => {
    displayRandomFact();
};

// Add confetti when the celebrate button is clicked
button.addEventListener('click', createConfetti);
