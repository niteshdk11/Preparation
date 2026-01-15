import {faker} from '@faker-js/faker';
import connection from './config/database.js';



 export function createRandomUser() {
    return [
       faker.string.uuid(),
       faker.internet.username(), 
       faker.internet.email(),
       faker.image.avatar(),
       faker.internet.password(),
       faker.date.birthdate(),
       faker.date.past(),
    ];
  }

  let data = [] ;
  for (let i = 0; i < 10; i++) {
    data.push(createRandomUser());
  }

 export function addUsers(){
    connection.query('INSERT INTO users VALUES ?',[data], (error, results, fields) => {
        if (error) {
          console.log(error);
        }
        console.log('Data: some data added successfully into user tables   ');
        connection.end();
      })
}


let query = `CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    avatar TEXT,
    password VARCHAR(255) NOT NULL,
    birthdate DATE,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`
connection.query(query, (error, results, fields) => {
    if (error) {
        console.log(error);
    }
    console.log('Table : created successfully');
})

export function clearTable(){
    connection.query('TRUNCATE TABLE users ', (error, results, fields) => {
        if (error) {
          console.log(error);
        }
        console.log('Data: Users Table cleared successfully  ');
        connection.end();
      })
}
