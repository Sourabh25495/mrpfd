const {getUserData} = require('../../../src/utils');

const getAllUsers = (req, res) => {
  //get the existing userdata
  const existUsers = getUserData();
  res.send(existUsers);
}

const chunkArray = (inputArray, chunk_size) => {
  let index = 0;
  const arrayLength = inputArray.length;
  let groupedArray = [];
  
  for (index = 0; index < Number(arrayLength); index = +index + +chunk_size) {
    myChunk = inputArray.slice(index, +index + +chunk_size);
    groupedArray.push(myChunk);
  }
  
  return groupedArray;
}

const getUserListChunk = (req, res) => {
  const existUsers = getUserData();
  const {page, limit} = req.query;
  if (!Number.isInteger(page) && !Number.isInteger(limit)) {
    return res.status(400).send({error: true, msg: 'Bad Request! Invalid Input!'});
  } else {
    const group = chunkArray(existUsers, limit);
    
    if (group.length < page) {
      res.status(200).json({
        status: 'Success',
        message: 'No records for this page.'
      })
    } else {
      res.send(group[page - 1]);
    }
  }
  
}

const getAscendingSortOrder = (prop) => {
  return function(a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  }
}

const getDescendingSortOrder = (prop) => {
  return function(a, b) {
    if (a[prop] < b[prop]) {
      return 1;
    } else if (a[prop] > b[prop]) {
      return -1;
    }
    return 0;
  }
}

const getUserListBySort = (req, res) => {
  const existUsers = getUserData();
  const {sortBy, sortDirection} = req.query;
  
  if (sortDirection === 'descending') {
    const sorted = existUsers.sort(getDescendingSortOrder(sortBy));
    res.send(sorted);
  } else {
    const sorted = existUsers.sort(getAscendingSortOrder(sortBy));
    res.send(sorted);
  }
}

module.exports = {
  getAllUsers,
  getUserListChunk,
  getUserListBySort
}