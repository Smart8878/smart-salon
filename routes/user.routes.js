const UserRouter = require('express').Router();
const UserController = require('../controllers/user.controller');

UserRouter.get('/:id?', UserController.getUser);
UserRouter.post('/', UserController.createUser);
UserRouter.patch('/', UserController.updateUser);

module.exports = UserRouter;
