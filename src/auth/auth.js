import localStrategy from 'passport-local';
import passport from 'passport';
import _ from 'lodash';
import users from '../data/users.json';

export const configure = (app) => {
    app.use(passport.initialize());
    passport.use(
        'login',
        new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        (username, password, done) => {
            try {
                const user = users.find((item) => item.username === username);
                if (!user) {
                    return done(null, false, { message : 'User does not exist.'});
                }

                if (user.password !== password) {
                    return done(null, false, { message : 'Incorrect username or password'});
                }

                return done(null, username, { message : 'Logged in Successfully'});
            } catch (err) {
                done(err);
            }
        },
        ),
    )
    };