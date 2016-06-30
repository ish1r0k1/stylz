/**
 * Routes for express app
 */
import express, { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { controllers, passport as passportConfig } from '../db';
import { tokenSecret } from '../config/secrets';

const usersController = controllers && controllers.users;
const projectsController = controllers && controllers.projects;

export default (app) => {
  const apiRoutes = Router()

  // user routes
  if (usersController) {
    apiRoutes.post('/login', usersController.login);
    apiRoutes.get('/login', usersController.getUserData);
    apiRoutes.post('/signup', usersController.signUp);
  }

  // authentification Filter
  apiRoutes.use((req, res, next) => {
    const jsonWebToken = req.headers.authorization.split(' ')[1];

    jwt.verify(jsonWebToken, tokenSecret, (err, decode) => {
      if (err) return res.status(401).json({ message: err });

      req.decoded = decode;
      next();
    });
  });

  if (projectsController) {
    apiRoutes.get('/projects', projectsController.getProjects);
    apiRoutes.get('/projects/:id', projectsController.getProject);
    apiRoutes.post('/projects', projectsController.saveProject);
    apiRoutes.put('/projects/:id', projectsController.updateProject);
    apiRoutes.delete('/projects/:id', projectsController.deleteProject);
  }

  app.use('/api', apiRoutes);
};
