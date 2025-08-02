const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userRegControllers');
const { validateUser } = require('../middleswares/userValidation');

// POST /api/users/register
router.post('/register', validateUser, registerUser);

module.exports = router;
