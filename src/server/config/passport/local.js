import { Strategy as LocalStrategy } from 'passport-local';
import { passport as dbPassport } from '../../db';

export default passport => {
  if (!dbPassport || !dbPassport.local || ! typeof dbPassport.local === 'function') {
    return;
  }

  passport.use(new LocalStrategy(dbPassport.local));
};
