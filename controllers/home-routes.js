const router = require('express').Router();
const { Game } = require('../models');

// Get games to display on Home 
router.get('/', async (req, res) => {
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
