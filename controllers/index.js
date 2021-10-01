const router = require('express').Router();

const apiRoutes = require('./api');
<<<<<<< HEAD
const globalController = require('./globalController');
const viewControllers = require("./viewControllers")
=======
const homeRoutes = require('./home-routes');
const forumRoutes = require('./api/forum-routes');
>>>>>>> dde5ae0195c07015e51679b2a1fa2a56fe2f6da9

router.use('/', globalController);
router.use('/api', apiRoutes);
<<<<<<< HEAD
router.use('/view', viewControllers);
=======
router.use('/forum', forumRoutes);
>>>>>>> dde5ae0195c07015e51679b2a1fa2a56fe2f6da9

module.exports = router;
