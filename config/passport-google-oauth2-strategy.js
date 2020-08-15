const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;

// to generate a random password
const crypto=require('crypto');


const User=require('../models/user');
passport.use(new googleStrategy({
       clientID:'86404891711-onke3ta6stc3aurk9otj1f12ordgq4l6.apps.googleusercontent.com',
       clientSecret: 'jFh6hkLPjaJnndLY16MmXlAY',
       callbackURL: 'http://localhost:8000/users/auth/google/callback'
    },

    function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in google strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err, user){
                    if (err){console.log('error in creating user google strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }

));


module.exports = passport;