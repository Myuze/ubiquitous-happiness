const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll();
    
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).render('home', { dbUserData });
    });
  } catch (err) {
    console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;
