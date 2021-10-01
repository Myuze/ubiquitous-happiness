const router = require('express').Router();
<<<<<<< HEAD
const { User , Post } = require('../../models');

//gets all forum posts
router.get("/", async (req, res) => {
    const forumData = await Post.findAll({
      include: {
        model: 'User',
        attributes: [ 'id', 'username' ]
      }
    }).catch((err) => { 
      res.json(err);
    });
      const forumPosts = forumData.map((fPost) => fPost.get({ plain: true }));
    res.render("display", { forumPosts });
  });

// gets one forum post by id
router.get("/:id", async (req, res) => {
    const { user } = req.session;
    const  forumPost = await Post.findOne({
        where: {
            id: req.params.id
        }
    }).catch((err) => { 
      res.json(err);
    });

    res.render("display", { user, forumPost } );
  });

  module.exports = router
=======
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll();
    
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).render('forum', { dbUserData });
    });

  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

module.exports = router;
>>>>>>> dde5ae0195c07015e51679b2a1fa2a56fe2f6da9
