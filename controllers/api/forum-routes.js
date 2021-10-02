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

router.get('/:id', async (req, res) => {
  const dbForumData = await Post.findByPk(req.params.id);

  const forum = dbForumData.get({ plain: true })

  res.render('forum-post', forum);
});

module.exports = router;
