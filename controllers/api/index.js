const router = require('express').Router();

const userRoutes = require('./user-routes');
const forumRoutes = require('./forum-routes');
const gameRoutes = require('./game-routes');

router.use('/users', userRoutes);
router.use('/forum', forumRoutes);
router.use('/games', gameRoutes);

module.exports = router;
