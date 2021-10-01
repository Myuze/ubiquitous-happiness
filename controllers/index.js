const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const forumRoutes = require('./api/forum-routes');

router.use('/', globalController);
router.use('/api', apiRoutes);
router.use('/forum', forumRoutes);

module.exports = router;
