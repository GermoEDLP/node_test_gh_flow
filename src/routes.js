const {Router} = require('express');
const { getInfo } = require('./constrollers/user.controller');

const router = Router();


router.get('/', getInfo)

module.exports = router;
