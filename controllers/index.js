const router = require('express').Router();

const apiRoutes = require('./api');
const globalController = require('./globalController');
const viewControllers = require("./viewControllers")

router.use('/', globalController);
router.use('/api', apiRoutes);
router.use('/view', viewControllers);

module.exports = router;
