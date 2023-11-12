const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());

// Import your controller
const { usercontroller } = require('../controllers/userscontroller');


// Create an instance of the controller
const userControllerInstance = new usercontroller();

// Define your routes
router.post('/add', userControllerInstance.register);
router.get('/listtask',userControllerInstance.list);
router.put('/update',userControllerInstance.update);
router.delete('/delete',userControllerInstance.delete);


// Export the router module
module.exports = router;