const express = require('express');

//create a route handler
const router = express.Router();
console.log('Router loaded');

const controller = require('../controllers/controller');

router.get('/',controller.home);

router.get('/add-task',controller.add);

router.get('/delete-task',controller.delete);

router.get('/update-task',controller.update);
