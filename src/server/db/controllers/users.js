import User from '../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { tokenSecret } from '../../config/secrets';

/**
 * POST /login
 */
export function login(req, res, next) {
  // Do username and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.status(404).json({ message: info.message });
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, { session: false }, (loginErr) => {
      const { username, password } = user;
      const jsonWebToken = jwt.sign({ username, password }, tokenSecret);

      if (loginErr) return res.status(401).json({ message: loginErr });
      return res.status(200).json(Object.assign({},
        { username, jsonWebToken },
        { message: 'You have been successfully logged in.' }
      ));
    });
  })(req, res, next);
}

/**
 * GET /login
 */
export function getUserData(req, res, next) {
  const jsonWebToken = req.headers.authorization.split(' ')[1];

  jwt.verify(jsonWebToken, tokenSecret, (err, decode) => {
    if (err) return res.status(401).json({ message: err });

    User.findOne({ username: decode.username }, (findErr, user) => {
      if (user) {
        return res.status(200).json(Object.assign({},
          { username: user.username },
          { message: 'You have been successfully logged in.' }
        ));
      } else {
        return res.status(401).json({});
      }
    })
  });
}

// /**
//  * POST /logout
//  */
// export function logout(req, res) {
//   // Do email and password validation for the server
//   req.logout();
//   res.redirect('/');
// }

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {
  const { /*email,*/ username, password } = req.body;

  const user = new User({
    // email: email,
    username: username,
    password: password
  });

  User.findOne({
    $or: [/*{ email },*/ { username }]
  }, (findErr, existingUser) => {
    if (existingUser) {
      return res.status(409).json({ message: 'Account with this username already exists!' });
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);

      return req.logIn(user, { session: false }, (loginErr) => {
        const { /*email,*/ username, password } = user;

        const jsonWebToken = jwt.sign({ username, password }, tokenSecret)

        if (loginErr) return res.status(401).json({ message: loginErr });
        return res.status(200).json(Object.assign({},
          { username },
          { message: 'You have been successfully logged in.' }
        ));
      });
    });
  });
}

export default {
  login,
  signUp,
  getUserData
};
