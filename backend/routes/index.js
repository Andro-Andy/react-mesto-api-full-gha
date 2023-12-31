const router = require('express').Router();
const signinRouter = require('./signin');
const signupRouter = require('./signup');
const cardsRouter = require('./cards');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.use('/', signinRouter);
router.use('/', signupRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/cards', cardsRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Cтраница не найдена'));
});

module.exports = router;
