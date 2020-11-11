const {getUserData, saveUserData} = require('../../../src/utils');

const deleteUserByEmail = (req, res) => {
  const existUsers = getUserData();
  
  const email = req.params.email;
  
  const filterUser = existUsers.filter(user => user.email !== email);
  
  if (existUsers.length === filterUser.length) {
    return res.status(409).send({error: true, msg: 'This user does not exist'})
  }
  
  saveUserData(filterUser)
  res.send({success: true, msg: 'User removed successfully'})
}

module.exports = {
  deleteUserByEmail,
}