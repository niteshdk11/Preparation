const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files (like CSS, JS)

// MongoDB connection using environment variable
const mongoURL = process.env.MONGO_URL || 'mongodb://mongo-db:27017/mydatabase'; // Default to local MongoDB if not set
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Define the User model
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true },
}));

// Route to render the main page
app.get('/', async (req, res) => {
    const users = await User.find(); // Get all users from MongoDB
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Management</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <h1>User Management</h1>
                <div class="user-list">
                    <h2>Users Created:</h2>
                    <ul id="user-list">
                        ${users.map(user => `<li>${user.username}</li>`).join('')}
                    </ul>
                </div>
                <div class="add-user-form">
                    <input type="text" id="username" placeholder="Enter Username" />
                    <button id="add-user-btn">Add User</button>
                </div>
                <div id="message" class="message"></div>
            </div>
            <script src="/script.js"></script>
        </body>
        </html>
    `);
});

// Route to add a user
app.post('/add-user', async (req, res) => {
    const { username } = req.body;
    const user = new User({ username });
    await user.save();
    res.send({ success: true, username });
});

// Start the server with environment variable
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
