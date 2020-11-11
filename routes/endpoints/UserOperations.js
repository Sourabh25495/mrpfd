const express = require('express');
const bodyParser = require('body-parser');
const { getAllUsers } = require('./UserOperations/GetUserList');
const { deleteUserByEmail } = require('./UserOperations/DeleteUser')
const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.use(router)

router.get('/get-user-list', (req, res) => {
  getAllUsers(req, res);
});

router.use('/delete-user/:email', (req, res) => {
  deleteUserByEmail(req, res)
})

module.exports = router;
