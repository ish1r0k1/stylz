export const db = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/Stylz';

export default {
  db
};
