document.addEventListener("DOMContentLoaded", () => {
    const userGrid = document.getElementById('user-grid');
    const loader = document.getElementById('loader');
    const pagination = document.getElementById('pagination');
    const searchBar = document.getElementById('search-bar');
    const resultsPerPage = 12; // Number of users per page
    let currentPage = 1;
    let usersData = [];

    // Function to display loading spinner
    function showLoader() {
        loader.style.display = 'block';
        userGrid.style.display = 'none';
        pagination.style.display = 'none';
    }

    // Function to hide loading spinner
    function hideLoader() {
        loader.style.display = 'none';
        userGrid.style.display = 'grid';
        pagination.style.display = 'flex';
    }

    // Fetch users from randomuser.me API
    function fetchUsers() {
        showLoader(); // Show loader before fetching data
        fetch(`https://randomuser.me/api/?results=36`)  // Mendapatkan 36 pengguna secara acak
            .then(response => response.json())
            .then(data => {
                usersData = data.results;
                displayUsers(usersData, currentPage);
                setupPagination(usersData);
                hideLoader(); // Hide loader after data is fetched
            })
            .catch(error => {
                console.log('Error:', error);
                hideLoader(); // Hide loader in case of error
            });
    }

    // Function to display users in the grid
    function displayUsers(users, page) {
        userGrid.innerHTML = '';  // Mengosongkan grid sebelum diisi
        const start = (page - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        const paginatedUsers = users.slice(start, end);

        paginatedUsers.forEach(user => {
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

    // Function to setup pagination
    function setupPagination(users) {
        const totalPages = Math.ceil(users.length / resultsPerPage);
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('disabled');
            }

            pageButton.addEventListener('click', () => {
                if (i !== currentPage) {
                    currentPage = i;
                    displayUsers(users, currentPage);
                    setupPagination(users); // Update pagination state
                }
            });

            pagination.appendChild(pageButton);
        }
    }

    // Fetch users when page is loaded
    fetchUsers();
});