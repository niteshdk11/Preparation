import mysql from 'mysql2';
import {faker} from '@faker-js/faker';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'test' 
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});


//  function to run sql command 
function runsql(sqlcommand){
    connection.query(sqlcommand, (error, results, fields) => {
        if (error) throw error;
        console.log('Data: ', results);
        connection.end();
    })
}


    
//  funciton that will crate some demo data  
function createRandomUser() {
    return [
       faker.string.uuid(),
       faker.internet.username(), 
       faker.internet.email(),
       faker.internet.password(),
    ];
  }


// ? normal inseting data into tables 
// let query = `INSERT INTO users (id, username, email, password) VALUES (1223,"nitesh23","nitesh@123","123456")`;

// connection.query(query, (error, results, fields) => {
//     if (error) throw error;
//     console.log('Data: ', results);
//     connection.end();
// })

//  OR , coustom fucntion 
// runsql(query)

//   runsql("SELECT *  FROM users")

//  ? using faker to insert data
// let query = `INSERT INTO users (id, username, email, password) VALUES ('${faker.string.uuid()}', '${faker.internet.username()}', '${faker.internet.email()}', '${faker.internet.password()}')`;

// runsql(query)
//   runsql("TRUNCATE TABLE users ")

// ?  using placeholders 

// ?  single data
// let query = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)`;
// let placeeholder = [1212, 'nitesh23', 'nitesh@123', '123456'];
// connection.query(query,placeeholder ,  (error, results, fields) => {
//         if (error) throw error;
//         console.log('Data: ', results);
//         connection.end();
//     })

// ? Multiple values 

//  VALID 
// let query = `INSERT INTO users (id, username, email, password) VALUES ?`;
// let placeeholder = [[1212, 'nitesh23', 'nitesh@123', '123456']];
// connection.query(query,[placeeholder] ,  (error, results, fields) => {
//         if (error) throw error;
//         console.log('Data: ', results);
//         connection.end();
//     })

// ? VALID 
// let query = `INSERT INTO users (id, username, email, password) VALUES ?`;
// let placeeholder = [[[1212, 'nitesh23', 'nitesh@123', '123456']]];
// connection.query(query,placeeholder ,  (error, results, fields) => {
//         if (error) throw error;
//         console.log('Data: ', results);
//         connection.end();
//     })


// ? in more  than one
let query = `INSERT INTO users (id, username, email, password) VALUES ?`;
let placeeholderarr = [
    [1212, 'nitesh23', 'nitesh@123', '123456'],
[12342, 'nitesh2ssfd3', 'ndsfsitesh@123', '123456jkshdsfjkh']
];
// connection.query(query,[placeeholderarr] ,  (error, results, fields) => {
//         if (error) throw error;
//         console.log('Data: ', results);
//         connection.end();
//     })

// ? OR USE coustom function :

//  function to run sql command with placeholders
function runSQL(sqlcommand , placeholders){
    connection.query(sqlcommand,[placeholders] ,  (error, results, fields) => {
        if (error) throw error;
        console.log('Data: ', results);
        connection.end();
    })
    }

    let data = [] ;

    for (let i = 0; i < 200; i++) {
        data.push(createRandomUser());
    }
    // console.log(data);
    
    runSQL(query,data)
    
 
    




//   runsql("TRUNCATE TABLE users ")
//   runsql("SELECT *  FROM users ")





