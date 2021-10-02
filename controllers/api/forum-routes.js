const router = require('express').Router();
const { User , Post } = require('../../models');
const withAuth = require('../../utils/auth')

//gets all forum posts
router.get('/', async (req, res) => {
  console.log(req.session)
    const { user } = req.session

    if (user){
    const forumData = await Post.findAll({
      include: {
        model: 'User',
        attributes: [ 'id', 'username' ]
      }
    })

    .catch((err) => { 
      res
        .status(500)
        .json(err);
    });

      const forumPosts = forumData.map((fPost) => fPost.get({ plain: true }));
    res
    .status(200)
    .render('forum', { forumPosts });
  }
    else if(!user){
      const forumData = await Post.findAll(
      ).catch((err) => { 
        res.json(err);
      });
        const forumPosts = forumData.map((fPost) => fPost.get({ plain: true }));
      console.log(forumPosts)
      res.render('forum', { forumPosts });
    }
});

// gets one forum post by id
router.get('/:id', async (req, res) => {
    const { user } = req.session;

    if (user){
      const  forumPost = await Post.findOne({
        where: {
            id: req.params.id,
            include: {
              model: 'User',
              attributes: [ 'id', 'username' ]
            }
        }
    }).catch((err) => { 
      res.json(err);
    });

    res.render('forum-post', { forumPost } );
    }

    else if (!user){
    const  forumPost = await Post.findOne({
        where: {
            id: req.params.id
        }
    }).catch((err) => { 
      res.json(err);
    });

    res.render('forum-post', { forumPost } );
  }});

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
  const { user } = req.session

  if (user){

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
}
  else if (!user){
    res
    .status(400)
    .render('login', { message: 'please login to make a new post'})
  }
});

module.exports = router;
