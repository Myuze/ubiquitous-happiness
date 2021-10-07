const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).render('coming-soon');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
