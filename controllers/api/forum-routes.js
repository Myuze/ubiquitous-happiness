const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbForumData = await Post.findAll();

    const forums = dbForumData.map((forum) => forum.get({ plain: true }));
    
    req.session.save(() => {
      req.session.loggedIn = true;

      // res.status(200).json({dbForumData});
      res.status(200).render('forum', {forums});
    });

  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

module.exports = router;
