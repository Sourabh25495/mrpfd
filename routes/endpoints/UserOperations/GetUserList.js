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
    // Do something if you want with the group
    groupedArray.push(myChunk);
  }
  
  return groupedArray;
}

const getUserListChunk = (req, res) => {
  const existUsers = getUserData();
  const {page, limit} = req.query;
  
  const group = chunkArray(existUsers, limit);
  
  if(group.length < page) {
    res.status(200).json({
      status: 'Success',
      message: 'No records for this page.'
    })
  } else {
    res.send(group[page - 1]);
  }
  
}

const getUserListBySort = (req, res) => {
  const existUsers = getUserData();
  const {sortBy, sortDirection} = req.query;
  
  console.log("sort", sortBy, sortDirection)
  if (sortDirection === 'ascending') {
    res.send(existUsers.sort((a, b) => {
      console.log(a[sortBy]);
      a[sortBy] - b[sortBy]
    }));
  }
  
  
}

module.exports = {
  getAllUsers,
  getUserListChunk,
  getUserListBySort
}