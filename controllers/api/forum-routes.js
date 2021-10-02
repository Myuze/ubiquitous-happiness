const router = require('express').Router();
const { User , Post } = require('../../models');
const withAuth = require('../../utils/auth')

//gets all forum posts
router.get("/", async (req, res) => {
  const { user } = req.session

  if (!user) {
    const forumData = await Post.findAll()
    const forumPosts = forumData.map((fpost) => fpost.get ({ plain: true }))

    res.render('forum', { forumPosts })
  }

  if(user){
    const forumData = await Post.findAll({
      include: {
        model: 'User',
        attributes: [ 'id', 'username' ]
      }
    }).catch((err) => { 
      res.json(err);
    });
      const forumPosts = forumData.map((fPost) => fPost.get({ plain: true }));
    res.render('forum', { forumPosts, user });
  }});

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

    res.render('forum', { user, forumPost } );
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
