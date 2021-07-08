const {Router} = require('express');
const { getInfo } = require('./constrollers/user.controller');

const router = Router();


router.get('/', getInfo)
router.get('/user', (req, res) => {
    res.json({
        msg: 'German'
    })
})


module.exports = router;
