document.addEventListener("DOMContentLoaded", () => {
    const userGrid = document.getElementById('user-grid');
    const searchBar = document.getElementById('search-bar');

    // Fetch users from randomuser.me API
    fetch('https://randomuser.me/api/?results=12')  // Mendapatkan 12 pengguna secara acak
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            displayUsers(users);
        })
        .catch(error => console.log('Error:', error));

    // Function to display users in the grid
    function displayUsers(users) {
        userGrid.innerHTML = '';  // Mengosongkan grid sebelum diisi
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.state}</p>
            `;
            userGrid.appendChild(userCard);
        });
    }

    // Search functionality (optional)
    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const userCards = document.querySelectorAll('.user-card');
        userCards.forEach(card => {
            const userName = card.querySelector('h2').textContent.toLowerCase();
            if (userName.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});