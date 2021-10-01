const router = require('express').Router();
const { User, Post } = require("../models")

router.get('/', async (req, res) => {
    const user = req.session
    const postData = await Post.findAll().catch((err) => {
        res.json(err)
    })

    const posts = postData.map((post).get({ plain: true }));
    console.log(posts)

    res.render('home', { posts, user });
});

module.exports = router
