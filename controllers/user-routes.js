const router = require('express').Router();
const { User, Post } = require('../models');

//login view
router.get('/login', async (req, res) => {
  const { user } = req.session
  
  try {
      if (user) {
         res
          .status(200)
          .render('login', { mesasage: 'you are already logged in', user }) 
      }

      if(!user){
          res
          .status(400)
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
        // if (user) {
          //  res
          //   .status(200)
          //   .render('add-post') 
        // }

        // else if(!user){
            res
            .status(200)
            .render('add-post', { message: 'Please login or register to make a new post.'})
        // }
    } catch (err) {
      console.log(err);
        res.status(500).json(err);
    }
  });

router.post('/newPost', async (req, res) => {
  const user = req.session
  try {
    // if (user){
    //   res
    //     .status(400)
    //     .redirect('/login', {message: 'please login to make a new post'})
    // }
    // if (!user){
      const dbPostData = await Post.create({
        title: req.body.title,
        entry: req.body.entry
    })
      res
        .status(200)
        .json(dbPostData)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
