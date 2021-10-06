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
      }

      if(!user){
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
      }

      if(!user){
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
    const  user  = req.session
    if (user) {
      try{
        console.log('user used')
        const userProfile = await User.findOne({
          attributes: {exclude: 'password'},
          where: {
            id: req.params.id,
          },

        })

        const serialized = userProfile.get({ plain: true })
        res
          .status(200)
          .render('profile', serialized)
      } 
      
      catch (err) {
        console.error(err)
      }
    } else {
      res
        .status(200)
        .render('profile', {message: 'you are not logged in'})
    }
  })

  router.get('leaderboard', async (req, res) => {
    
  })

module.exports = router;
