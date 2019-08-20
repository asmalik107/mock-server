import passport from 'passport';
import localStrategy from 'passport-local';
import { Strategy as JWTstrategy, ExtractJWT } from 'passport-jwt';
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
        })
    )

    // const opts = {
    //     jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    //     secretOrKey: 'jwt-secret'
    //   };

    // passport.use(
    //     'jwt',
    //     new JWTstrategy(opts, (jwt_payload, done) => {
    //       try {
    //           console.log(opts, jwt_payload )
    //         // User.findOne({
    //         //   where: {
    //         //     username: jwt_payload.id,
    //         //   },
    //         // }).then(user => {
    //         //   if (user) {
    //         //     console.log('user found in db in passport');
    //         //     // note the return removed with passport JWT - add this return for passport local
    //         //     done(null, user);
    //         //   } else {
    //         //     console.log('user not found in db');
    //         //     done(null, false);
    //         //   }
    //         // });
    //       } catch (err) {
    //         done(err);
    //       }
    //     }),
    //   );
};