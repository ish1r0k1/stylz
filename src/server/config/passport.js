/* Initializing passport.js */
import passport from 'passport';
import local from './passport/local';
import { passport as dbPassport } from '../db';

export default () => {
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  
/*
  if (dbPassport) {
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.serializeUser((user, done) => {
      done(null, user);
    });
  }
*/

  // use the following strategies
  local(passport);
};
