document.getElementById('add-user-btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    
    if (!username) {
        alert("Please enter a username.");
        return;
    }

    try {
        const response = await fetch('/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });
        const result = await response.json();

        if (result.success) {
            // Display the new user in the list
            const userList = document.getElementById('user-list');
            userList.innerHTML += `<li>${result.username}</li>`;
            document.getElementById('username').value = ''; // Clear the input
            document.getElementById('message').textContent = `User "${result.username}" added successfully!`;
        } else {
            document.getElementById('message').textContent = 'Failed to add user.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Error adding user.';
    }
});
