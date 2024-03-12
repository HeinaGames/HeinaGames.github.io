const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const gamesSection = document.getElementById('games-section');

searchBar.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    if (query === '') {
        searchResults.style.display = 'none'; // Hide search results if query is empty
        return;
    }
    const filteredGames = games.filter(game => game.toLowerCase().includes(query));
    displaySearchResults(filteredGames);
});

const games = [
    'doodle jump',
    'snake',
    // Add more games as needed
];

function displaySearchResults(filteredGames) {
    searchResults.innerHTML = ''; // Clear previous results

    if (filteredGames.length === 0) {
        searchResults.style.display = 'none'; // Hide search results if no matches
        return;
    }

    searchResults.style.display = 'block'; // Show search results if there are matches

    filteredGames.forEach(game => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('search-result');
        resultElement.textContent = game;
        resultElement.addEventListener('click', () => {
            window.location.href = `games/${game.replace(/ /g, '-').toLowerCase()}.html`; // Navigate to game page
        });
        searchResults.appendChild(resultElement);
    });
}

// Hide search results when clicking outside the search bar and results
document.addEventListener('click', (event) => {
    if (!event.target.matches('.search-bar') && !event.target.matches('.search-result')) {
        searchResults.style.display = 'none';
    }
});
