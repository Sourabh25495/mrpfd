const express = require('express');
const router = express.Router();
const {getAllUsers} = require('./UserOperations/GetUserList');
const {addNewUser} = require('./UserOperations/AddNewUser');
const {updateUser} = require('./UserOperations/UpdateUser')
const {deleteUserByEmail} = require('./UserOperations/DeleteUser');

router.get('/get-user-list', (req, res) => {
  getAllUsers(req, res);
});

router.use('/delete-user/:email', (req, res) => {
  deleteUserByEmail(req, res);
})

router.post('/add-new-user', (req, res) => {
  addNewUser(req, res);
})

router.put('/update-user', (req, res) => {
  updateUser(req, res);
})
module.exports = router;
