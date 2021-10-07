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
          .status(400)
          .render('register');
      }
  } catch (err) {
    console.log(err);
      res.status(500).json(err);
  }
});

//new-post view get request to render new-post.handlebars
router.get('/newPost', withAuth, async (req, res) => {
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
  
  res.status(200).json(dbPostData)
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
