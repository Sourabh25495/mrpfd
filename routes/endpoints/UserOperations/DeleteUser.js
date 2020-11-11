const fs = require('fs');
const path = require('path');

const getUserData = () => {
  const fileData = fs.readFileSync(path.join(__dirname, '../../../data/users.json'));
  return JSON.parse(fileData);
}

const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(path.join(__dirname, '../../../data/users.json'), stringifyData)
}

const deleteUserByEmail = (req, res) => {
  const existUsers = getUserData();
  
  const email = req.params.email;
  
  const filterUser = existUsers.filter(user => user.email !== email);
  
  if (existUsers.length === filterUser.length) {
    return res.status(409).send({error: true, msg: 'username does not exist'})
  }
  saveUserData(filterUser)
  res.send({success: true, msg: 'User removed successfully'})
}

module.exports = {
  deleteUserByEmail,
}