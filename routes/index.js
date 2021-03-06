const router = require('express').Router();
const authRouter = require('./auth');
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.use(authRouter);
router.use(auth);
router.use(userRouter);
router.use(movieRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Запрашиваемая страница не найдена'));
});

module.exports = router;
