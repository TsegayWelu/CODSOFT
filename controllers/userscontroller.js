const conn = require('../db');
class usercontroller {
  register(req, res) {
    const sql = 'INSERT INTO tasks (task) VALUES (?)';
    const values = [req.body.task];
    conn.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error inserting task into the database');
      }
      console.log('task registered  successfully to database');
      //res.status(200).send('Data inserted successfully');
    });
    res.send("your task inserted succesfully");
    
  }
  list(req, res) {
    conn.query('SELECT * FROM tasks ', (err, results) => {
      if (err) {
        console.error(err);
        return;
      }

      // The results variable will contain an array of objects, where each object represents a row in the user table
      res.send(results);
    });
  } 

  update(req, res) {
    
    const newtask = req.body.newtask;
    const currenttask = req.body.currenttask;
    const sql = `UPDATE tasks SET task = '${newtask}' WHERE task = '${currenttask}'`;
    conn.query(sql, function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating task');
      } else {
        console.log('task updated successfully');
        res.send({ msg: 'task updated successfully', result });
      }
    });
  }
  delete(req, res) {
    const task = req.body;  // Assuming taskId is passed in the request body
    const sql = 'DELETE FROM tasks WHERE id = ?';
    console.log(task);
  console.log(task);
    conn.query(sql, [task.id], function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting task');
      } else {
        console.log('Task deleted successfully');
        res.send({ msg: 'Task deleted successfully', result });
      }
    });
  }


}

module.exports = {
  usercontroller,
};