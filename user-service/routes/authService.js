const express = require('express')
const router = express.Router()
const { createUsers, userLogin, viewUsers, deleteUsers } = require('../controllers/authService')

router.route('/register')
      .post(createUsers)
router.route('/login')
      .post(userLogin)
router.route('/profile')
      .get(viewUsers)
      .delete(deleteUsers) 
      
module.exports = router