const passport = require('passport');
const passportJwt = require('passport-jwt');

const { ExtractJwt, Strategy } = passportJwt;

const strategyOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
};

const strategyCallback = (payload, done) => {
  // Erro na busca
  done({ err: {} });

  // Não encontrou usuário;
  done(null, false, { message: 'User not found. Invalid credentials' });

  // Encontrou usuário
  done(null, { id: 1 });
};

module.exports = () => {
  const strategy = new Strategy(strategyOptions, strategyCallback);
  passport.use(strategy);

  return {
    initialize: passport.initialize(),
    authenticate: passport.authenticate('jwt', { session: false }),
  };
};
