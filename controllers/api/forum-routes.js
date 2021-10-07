const router = require('express').Router();
const { User , Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
//all forum routes in the api have been updated  as of 10/2/2021 @ 12:51pm

//gets all forum posts
router.get('/', async (req, res) => {
  console.log(req.session);
    const { user } = req.session;

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

  } else {
      const forumData = await Post.findAll(
      ).catch((err) => { 
        res.json(err);
      });
        const forumPosts = forumData.map((fPost) => fPost.get({ plain: true }));
      res.render('forum', { forumPosts });
    }
});

router.post('/', withAuth, (req, res) => {
  const { user } = req.session;

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
  } else {
    res
    .status(400)
    .render('login', { message: 'please login to make a new post'});
  }
});


// gets one forum post by id
router.get('/:id', async (req, res) => {
    const { user } = req.session;

    if (!user) {
      const  forumPost = await Post.findOne({
          where: {
              id: req.params.id,
          },
          include: {
            model: Comment,
            include: {
              model: User,
              attributes: [ 'id', 'username']
            }
          }
          
      }).catch((err) => { 
        res.json(err);
      });
  
      const serialized = forumPost.get({ plain: true });
      res.render('forum-post', serialized);
    }   
    
    else {
      const  forumPost = await Post.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: Comment,
          include: {
            model: User,
            attributes: [ 'id', 'username']
          }
        }
    }).catch((err) => { 
      return res.json(err);
    });

    res.render('forum-post', { forumPost } );
    }
});

// post comments to forum
router.post('/:id', async (req, res) => {
  const user = req.session;
  
  try {
    if (!user.loggedIn){
      res
        .status(400)
        .redirect('/login', {message: 'please login to make a new post'});
    }
<<<<<<< HEAD

    else {
      const dbPostData = await Post.create({
        title: req.body.title,
        entry: req.body.content,
        user_id: req.session.user_id
=======
    else {
      const commentData = await Comment.create({
        comment_entry: req.body.comment_entry,
        forum_id: req.body.forum_id
>>>>>>> 06f2c3f63e79053dc73c7bf698bc9bef34b7dfb4
    });
      res
        .status(200)
        .json(commentData);
    }
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
