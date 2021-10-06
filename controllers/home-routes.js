const fetch = require('node-fetch');
const router = require('express').Router();
const {
  Game
} = require('../models');


// Get games to display on Home 
router.get('/', async (req, res) => {
  const gameData = await Game.findAll()
    .catch((err) => {
      res
        .status(500)
        .json(err)
        .render('404');
    });

  const games = gameData.map((game) => game.get({
    plain: true
  }));

  const streamData = fetch("twitch-URL")
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response);
      const allStreams = [];
      let someStreams = [];
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        someStreams.push(element);
        if (someStreams.length >= 2) {
          allStreams.push(someStreams);
          someStreams = [];
        }
      }
      const streams = allStreams.map((stream) => stream.get({
        plain: true
      }));
      res
        .status(200)
        .render('home', {
          games,
          streams
        });
    })
});

module.exports = router;