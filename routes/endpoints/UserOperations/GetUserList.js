const {getUserData} = require('../../../src/utils');

const getAllUsers = (req, res) => {
  //get the existing userdata
  const existUsers = getUserData();
  res.send(existUsers);
}

module.exports = {
  getAllUsers,
}