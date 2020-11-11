const express = require('express');
const router = express.Router()

const userCurdOperations = require('./endpoints/UserOperations')

router.use('/endpoint', userCurdOperations);

router.use('/*', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'Endpoint not found'
  })
})

module.exports = router;