import express from 'express'
import { connect } from './db';
import passportConfig from './config/passport';
import expressConfig from './config/express'
import routesConfig from './config/routes';
const app = express()

/*
 * Database-specific setup
 */
connect();

/*
 * passport configuration
 */
passportConfig();

/*
 * Bootstrap application settings
 */
expressConfig(app);

/*
 * Routings setup
 * Note: Some of these routes have passport and database model dependencies
 */
routesConfig(app);

/*
 * This is where the magic happens. We take the locals data we have already
 * fetched and seed our stores with data.
 * App is a function that requires store data and url
 * to initialize and return the React-rendered html string
 */
app.get('*', (req, res) => {
  res.render('index', {
    title: 'stylz'
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'));
