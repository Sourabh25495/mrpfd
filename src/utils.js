const fs = require('fs');
const path = require('path');

const getUserData = () => {
  const fileData = fs.readFileSync(path.join(__dirname, '../data/users.json'));
  return JSON.parse(fileData);
}

const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(path.join(__dirname, '../data/users.json'), stringifyData);
}

module.exports = {
  getUserData,
  saveUserData
}