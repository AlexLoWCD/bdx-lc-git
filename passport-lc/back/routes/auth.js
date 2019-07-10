import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

import connexion from './conf';

const router = express.Router();

passport.use('local', new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  session: false,
}, (login, password, done) => {
  try {
    connexion.query('select login, password from users where login = ?', [login], (err, results) => {
      if (err) {
        return done(err, false);
      } else if (results.length === 0) {
        return done(null, false);
      } else if (bcrypt.compareSync(password, results[0].password)) {
        const user = {
          login: results[0].login,
        };
        return done(null, user);
      }
      return done(null, false);
    });
  } catch (e) {
    console.error(e);
  }
}));

// Jason Web Token
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'lc_passport',
}, (jwtPayload, cb) => cb(null, jwtPayload)));

router.post('/signup', (req, res) => {
  const user = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  connexion.query('INSERT INTO users SET ?', user, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

router.post('/signin', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    if (!user) {
      return res.sendStatus(401);
    }
    const token = jwt.sign(user, 'lc_passport');
    return res.json({
      name: user.login,
      token,
    });
  })(req, res);
});

module.exports = router;
