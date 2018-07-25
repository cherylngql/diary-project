const router = require('express').Router()
const {User} = require('./db')
module.exports = router

// auth routes go below!
router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email, password: req.body.password}});
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      const err = new Error('Incorrect email or password!');
      err.status = 401;
      next(err);
    }
  } catch (err){
    next(err);
  }
})

router.get('/me', async (req, res, next) => {
  try {
    if (req.session.userId) {
      const user = await User.findById(req.session.userId);
      if (user) {
        res.json(user);
      } else {
        const err = new Error('Not a registered user!');
        err.status = 404;
        next(err);
      }
    } else {
      const err = new Error('No current user id!');
      err.status = 404;
      next(err);
    }

  } catch (err) {
    next(err)
  }
})

router.delete('/logout', async (req, res, next) => {
  try {
    req.session.destroy();
    res.status(204).end();
  } catch (err){
    next(err);
  }
})