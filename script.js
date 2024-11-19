const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayUsers(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-card');
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>📧 Email: ${user.email}</p>
            <p>📞 Phone: ${user.phone}</p>
            <p>🏢 Company: ${user.company.name}</p>
            <p>📍 Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(userItem);
    });
}

fetchData();