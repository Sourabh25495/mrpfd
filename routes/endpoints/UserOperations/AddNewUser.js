const {getUserData, saveUserData} = require('../../../src/utils');

const validate = (existUsers, userData) => {
  if (Array.isArray(existUsers) && userData && userData.email) {
    const isExistingUser = existUsers.filter(currentUser => currentUser.email === userData.email)
    return isExistingUser.length
  }
}

const addNewUser = (req, res) => {
  const existUsers = getUserData();
  
  const userData = req.body;
  
  if (!validate(existUsers, userData)) {
    if (!userData.email || !userData.name || !userData.dateOfBirth || !userData.phoneNumber) {
      return res.status(400).send({error: true, msg: 'Bad Request! User data missing!'});
    }
    
    existUsers.push(userData)
    
    saveUserData(existUsers);
    res.send({success: true, msg: 'User data added successfully'});
  } else {
    res.send({success: true, msg: 'user already exists'});
  }
}

module.exports = {
  addNewUser,
}