// Register Page
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).render('register');
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
