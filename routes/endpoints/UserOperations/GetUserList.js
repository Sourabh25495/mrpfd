const fs = require('fs');
const path = require('path');

const getUserData = () => {
  const fileData = fs.readFileSync(path.join(__dirname, '../../../data/users.json'));
  return JSON.parse(fileData);
}

const getAllUsers = (req, res) => {
  //get the existing userdata
  const existUsers = getUserData();
  res.send(existUsers);
}

module.exports = {
  getAllUsers,
}