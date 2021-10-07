const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

//login view
router.get('/login', async (req, res) => {
  const { user } = req.session;
  
  try {
      if (user) {
         res
          .status(200)
          .render('login', { mesasage: 'you are already logged in', user }); 
      } else {
          res
          .status(400)
          .render('login');
      }
  } catch (err) {
    console.log(err);
      res.status(500).json(err);
  }
});

//registration view
router.get('/register', async (req, res) => {
  const { user } = req.session;
  
  try {
      if (user) {
         res
          .status(200)
          .render('register', { mesasage: 'you are already registered', user }); 
      } else {
          res
          .status(200)
          .render('register');
      }
  } catch (err) {
    console.log(err);
      res.status(500).json(err);
  }
});

//new-post view get request to render new-post.handlebars
router.get('/newPost', withAuth, async (req, res) => {
<<<<<<< HEAD
    const { user } = req.session;
    
    try {
        if (user) {
           res
            .status(200)
            .render('forum-post', { user }); 
        }

        else {
            res
            .status(200)
            .render('forum-post', { message: 'Please login or register to make a new post.'});
        }
    } catch (err) {
      console.log(err);
        res.status(500).json(err);
    }
  });

  router.get('/profile/:id', withAuth, async (req, res) => {
    console.log(req.body)
    console.log(req.session)
      try{
        console.log('user used')
        const userProfile = await User.findOne({
          attributes: {exclude: 'password'},
          where: {
            id: req.params.id,
          },

        })

        const serialized = userProfile.get({ plain: true })
        console.log(serialized)
        res
          .status(200)
          .render('profile', serialized)
      } 
      
      catch (err) {
        console.error(err)
      }
  })

  router.get('leaderboard', async (req, res) => {
    
  })
=======
  try {
    res.status(200).render('add-post');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//post route for making a new post inserting into db
router.post('/newPost', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      entry: req.body.entry
  });
  
  res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
  }
});
>>>>>>> 06f2c3f63e79053dc73c7bf698bc9bef34b7dfb4

module.exports = router;
