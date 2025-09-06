const express = require('express');
const app= express();
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.get('/',calculatorController.calculate);
module.exports = router;

