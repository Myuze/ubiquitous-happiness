const router = require('express').Router();
const { User, Post } = require('../models');

//login view

//registration view

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