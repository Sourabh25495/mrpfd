const {getUserData, saveUserData} = require('../../../src/utils');

const updateUser = (req, res) => {
  const existUsers = getUserData();
  
  const userData = req.body;
  
  const doesUserExist = existUsers.find(currentUser =>
    currentUser.email === userData.email
  );
  
  if (!doesUserExist) {
    res.status(409).send({error: true, msg: 'User not exist'});
  } else {
    if (!userData.email || !userData.name || !userData.dateOfBirth || !userData.phoneNumber) {
      return res.status(400).send({error: true, msg: 'Bad Request! User data missing!'});
    } else {
      const updateUser = existUsers.filter( user => user.email !== userData.email );
      updateUser.push(userData);
      saveUserData(updateUser);
      res.send({success: true, msg: 'User data Updated successfully'});
    }
  }
  
}

module.exports = {
  updateUser,
}