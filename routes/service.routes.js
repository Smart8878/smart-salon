const ServiceRouter = require('express').Router();
const ServiceController = require('../controllers/service.controller');

ServiceRouter.get('/:id?', ServiceController.getService);
ServiceRouter.post('/', ServiceController.createService);
ServiceRouter.patch('/', ServiceController.updateService);

module.exports = ServiceRouter;
