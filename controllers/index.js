const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const forumRoutes = require('./api/forum-routes');
const userRoutes = require('./user-routes');

router.use('/api', apiRoutes);
router.use('/forum', forumRoutes);
router.use('/home', homeRoutes);
router.use('/user', userRoutes);

module.exports = router;
