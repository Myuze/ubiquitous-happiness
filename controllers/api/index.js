const router = require('express').Router();

const userRoutes = require('./user-routes');
const forumRoutes = require('./forum-routes');

router.use('/users', userRoutes);
<<<<<<< HEAD
router.use('/forum', forumRoutes)
=======
router.use('/forum', forumRoutes);
>>>>>>> dde5ae0195c07015e51679b2a1fa2a56fe2f6da9

module.exports = router;
