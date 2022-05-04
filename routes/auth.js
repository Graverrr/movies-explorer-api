const router = require('express').Router();
const { login, createUser } = require('../controllers/user');
const { validateSignin, validateSignup } = require('../middlewares/validations');

router.post('/signin', validateSignin, login);
router.post('/signup', validateSignup, createUser);

module.exports = router;
