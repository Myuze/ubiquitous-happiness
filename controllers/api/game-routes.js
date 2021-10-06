const router = require('express').Router();
const { Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dbGameData = await Game.findAll();
    
    res.status(200).json( dbGameData );
  } catch (err) {
    res.status(500).json({ message: 'Server Error'});
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const dbGameData = await Game.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!dbGameData) {
      res.json({ message: 'No Game found with this id!'});
    }

    res.status(200).json(dbGameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const dbGameData = await Game.create(req.body);

    console.log(dbGameData);

    res.status(200).json(dbGameData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbGameData = await Game.destroy({
      where: {
        id: req.params.id,
      },
    });

    if(!dbGameData) {
      res.status(404).json({ message: 'No Game found with this id!' });
      return;
    }

    res.status(200).json(dbGameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
