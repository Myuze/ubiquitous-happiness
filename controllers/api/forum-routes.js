const router = require('express').Router();
const { User , Post } = require('../../models');
const withAuth = require('../../utils/auth')

//gets all forum posts
<<<<<<< HEAD
router.get("/", async (req, res) => {
  const { user } = req.session

  if (!user) {
    const forumData = await Post.findAll()
    const forumPosts = forumData.map((fpost) => fpost.get ({ plain: true }))

    res.render('forum', { forumPosts })
  }

  if(user){
=======
router.get('/', async (req, res) => {
>>>>>>> b21c7ae296845e0a3183bbfcba256021636c7474
    const forumData = await Post.findAll({
      include: {
        model: 'User',
        attributes: [ 'id', 'username' ]
      }
    }).catch((err) => { 
      res.json(err);
    });
      const forumPosts = forumData.map((fPost) => fPost.get({ plain: true }));
<<<<<<< HEAD
    res.render('forum', { forumPosts, user });
  }});
=======
    res.render('forum', { forumPosts });
  });
>>>>>>> b21c7ae296845e0a3183bbfcba256021636c7474

// gets one forum post by id
router.get('/:id', async (req, res) => {
    const { user } = req.session;
    const  forumPost = await Post.findOne({
        where: {
            id: req.params.id
        }
    }).catch((err) => { 
      res.json(err);
    });

<<<<<<< HEAD
    res.render('forum', { user, forumPost } );
=======
    res.render('forum-post', { user, forumPost } );
>>>>>>> b21c7ae296845e0a3183bbfcba256021636c7474
  });

  module.exports = router

//post route for making a new post inserting into db
router.post('/', async (req, res) => {
  const user = req.session
  try {
    if (!user){
      res
        .status(400)
        .redirect('/login', {message: 'please login to make a new post'})
    }

    if (user){
      const dbPostData = await Post.create({
        title: req.body.title,
        entry: req.body.content,
        user_id: req.session.user_id
    })
      res
        .status(200)
        .json(dbPostData)
    }
  } catch (err) {
    console.log(err)
  }
})


router.post('/', withAuth, (req, res) => {
  Post.create({
          title: req.body.title,
          content: req.body.content,
          user_id: req.session.user_id
      })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});
module.exports = router;
