const router = require('express').Router();
const { User, Post } = require('../models');

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
          .status(200)
          .render('login')
      }
  } catch (err) {
    console.log(err);
      res.status(500).json(err);
  }
});
//registration view
router.get('/register', async (req, res) => {
  const { user } = req.session
  
  try {
      if (user) {
         res
          .status(200)
          .render('register', { mesasage: 'you are already registered', user }) 
      }

      if(!user){
          res
          .status(400)
          .render('register')
      }
  } catch (err) {
    console.log(err);
      res.status(500).json(err);
  }
});

//new-post view get request to render new-post.handlebars
router.get('/newPost', async (req, res) => {
    const { user } = req.session
    
    try {
        if (user) {
           res
            .status(200)
            .render('new-post', { user }) 
        }

        if(!user){
            res
            .status(400)
            .render('new-post', { message: 'Please login or register to make a new post.'})
        }
    } catch (err) {
      console.log(err);
        res.status(500).json(err);
    }
  });


module.exports = router
