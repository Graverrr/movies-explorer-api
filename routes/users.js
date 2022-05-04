const router = require('express').Router();
const {
  getUser,
  updateUserInfo,
} = require('../controllers/user');
const {
  validateUser,
} = require('../middlewares/validations');

router.get('/users/me', getUser);
router.patch('/users/me', validateUser, updateUserInfo);

module.exports = router;
