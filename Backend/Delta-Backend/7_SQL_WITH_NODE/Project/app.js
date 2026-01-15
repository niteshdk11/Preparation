import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import path from 'path';
import { fileURLToPath } from 'url';
import connection from './config/database.js';
import {createRandomUser , addUsers, clearTable} from './initdb.js'
import methodOverride from 'method-override';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'));
app.set(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.get('/', (req, res) => {
    try {
        connection.query('SELECT *  FROM users ', (error, users, fields) => {
            if (error) throw error;
            res.render("index.ejs" , {users})
        })
       } catch (error) {
         console.log(error);
           }
})

app.get('/adduser', (req, res) => {
    res.render("addusers.ejs")
})

app.post('/adduser', (req, res) => {
    const newUser = {
        user_id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
        avatar: req.body.avatar,
        password: req.body.password,
        birthdate: req.body.birthdate,
        registered_at: new Date() // Current date as registered date
      };
      connection.query('INSERT INTO users SET ?', newUser, (error, results, fields) => {
        if (error) throw error;
        res.redirect('/');
      });
})


app.get('/edituser/:id', (req, res) => {
let id = req.params.id;
     connection.query(`SELECT * FROM users WHERE user_id = "${id}"` , (error, results, fields) => {
        if (error) throw error;
        let user = results[0]
        res.render("edituser.ejs" , {user})
    })
console.log(id)
})

app.patch('/edituser/:id', (req, res) => {
    const id = req.params.id;
    const { username, email, birthdate, password, avatar } = req.body;

    // Constructing the query and parameters
    const updateQuery = `
        UPDATE users SET 
            username = ?, 
            email = ?, 
            birthdate = ?, 
            avatar = ? 
            ${password ? ', password = ?' : ''} 
        WHERE user_id = ?
    `;
    const params = [username, email, birthdate, avatar];
    if (password) params.push(password); 
    params.push(id); 

    connection.query(updateQuery, params, (error) => {
        if (error) {
            console.error("Error updating user:", error);
            return res.status(500).json({ error: 'Failed to update user' });
        }

        res.redirect('/'); 
    });
});



app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`DELETE FROM users WHERE user_id = "${id}"`, (error) => {
        if (error) {
            console.error("Error deleting user:", error);
            return res.status(500).json({ error: 'Failed to delete user' });
        }
        res.redirect('/');
    });
    })








app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
});






