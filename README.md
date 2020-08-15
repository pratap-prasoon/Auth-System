# Nodejs Authentication
 A complete Authentication system which can be used as a starter code for creating any new application developed using ExpressJS framework, PassportJS, bcryptJS and other dependencies

#Task:
- Sign up with email
- Sign in 
- Sign out
- Forgot password
- Reset password after sign in
- The password stored in the db is encrypted.
- Google login/signup (Social authentication).

#Folder Structure:
This follows MVC (Model, View, Controller) Architecture.
- Assets: It contains all static file CSS.
- Config: It contains connection to Database, Authentication.
- Controller: It redirect the webpage according to user actions.
- Models: It contains Database Schema.
- Routes: It contains all routes.
- Views: It contins all file which render UI to browser.
 

#Steps to install the project:
- Clone the repository
- Once cloned, go into the cloned folder and type "npm install".
- Setup the project using npm init.
- Connect to mongodb.Install the mongo db from the below site https://www.mongodb.com/download-center#community
- Give user credentials in config > passport-google-oauth2-strategy
- Then type "npm start" command to start the server.
- Go to https://localhost/8000.

 
 #Sign-In
 
![Image](https://pratap-prasoon.github.io/Auth-System/assets/images/sign-in.png)

#Sign-Up

![Image](https://pratap-prasoon.github.io/Auth-System/assets/images/sign-up.png)

