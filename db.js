const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

conn.connect((err) => {
  if (err) {
    console.log('there is an error', err);
  } else {
    console.log('you connected successfully');
    createDatabaseAndTableIfNotExists();
  }
});

function createDatabaseAndTableIfNotExists() {
  conn.query('CREATE DATABASE IF NOT EXISTS mytask', (err) => {
    if (err) {
      console.error('Error creating database:', err);
    } else {
      conn.query('USE mytask', (err) => {
        if (err) {
          console.error('Error selecting database:', err);
        } else {
          const createTableQuery = `
            CREATE TABLE IF NOT EXISTS tasks (
              id INT AUTO_INCREMENT PRIMARY KEY,
              task VARCHAR(255) NOT NULL
            )
          `;

          conn.query(createTableQuery, (err) => {
            if (err) {
              console.error('Error creating table:', err);
            } else {
              console.log('Table created or already exists');
            }
          });
        }
      });
    }
  });
}

module.exports = conn;
