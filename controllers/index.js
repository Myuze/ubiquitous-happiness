const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const forumRoutes = require('./api/forum-routes');
const registerRoutes = require('./register-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/forum', forumRoutes);
router.use('/register', registerRoutes);

module.exports = router;
