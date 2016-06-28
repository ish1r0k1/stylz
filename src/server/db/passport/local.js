import User from '../models/user';

export default (username, password, done) => {
  User.findOne({ username }, (findErr, user) => {
    if (!user) return done(null, false, { message: `There is no record of the username ${username}.` });
    return user.comparePassword(password, (passErr, isMatch) => {
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { message: 'Your username or password combination is not correct.' });
    });
  });
};
