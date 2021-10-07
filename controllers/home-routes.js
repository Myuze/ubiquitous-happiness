const router = require('express').Router();
const { Game, User } = require('../models');

// Get games to display on Home 
router.get('/', async (req, res) => {
  console.log('req dot session below')
  console.log(req.session)
  const dbUserData = await User.findOne({
    where: {
      username: req.session.username
    }
  })
  console.log('------------------db user data below---------------')
  console.log(dbUserData)
  const gameData = await Game.findAll()
  .catch((err) => { 
    res
      .status(500)
      .json(err)
      .render('404');
  });
  const games = gameData.map((game) => game.get({ plain: true }));
  
  res
    .status(200)
    .render('home', { games });
});


module.exports = router;
