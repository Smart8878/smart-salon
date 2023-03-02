const UserRouter = require('express').Router();
const UserController = require('../controllers/user.controller');

UserRouter.get('/:id?', UserController.getUser);
UserRouter.post('/register', UserController.createUser);
UserRouter.patch('/', UserController.updateUser);
UserRouter.post('/login', UserController.userLogin);


module.exports = UserRouter;
