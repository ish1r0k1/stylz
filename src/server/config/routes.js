/**
 * Routes for express app
 */
import passport from 'passport';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/api/login', usersController.login);
    app.get('/api/login', usersController.getUserData);
    app.post('/api/signup', usersController.signUp);
  }
};
