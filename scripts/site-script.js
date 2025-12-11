// DOM selections
const message = document.querySelector('#message');
const input = document.querySelector('#favchap');
const form = document.querySelector('#favForm');

// Form submission
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() !== "") {
        message.innerHTML = `🎉 Thank you! Your favorite recipe/chapter is <strong>${input.value}</strong>!`;
        localStorage.setItem('favChapter', input.value);
    } else {
        message.innerHTML = "Please enter a recipe or chapter.";
    }
});

// Load saved value
window.addEventListener('load', () => {
    const saved = localStorage.getItem('favChapter');
    if (saved) {
        message.innerHTML = `Your saved favorite recipe/chapter is <strong>${saved}</strong>.`;
    }
});

// Example array & array method
const scores = [99, 88, 93, 70, 84, 69];
const outreach = scores.filter(score => score < 70);
function showOutreach() { console.log(`Scores below 70: ${outreach.join(', ')}`); }
showOutreach();
