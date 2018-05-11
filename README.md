## Photo Upload App

This application consists of an Express REST api backend that utilizes an sqlite3
in memory database and a Vue.js frontend. The application allows a user to register
or log in if they have already registered. After login, a user is able to update
their profile information and upload photos.

## Getting Started

- Navigate into the `express_app` directory
- Run `npm install`
- Run `node server`

You should now have a server that is running on port 4000. If not, you will need
to make the necessary changes to get it running on port 4000 so that the Vue.js
application will be able to access the REST api.

- Navigate to the `vue_app` directory
- Run `npm install`
- Run `npm run start`

The Vue.js application should be up and running on port 8080 or 8081. Either is
fine. Navigate your browser to `localhost:8080` (or 8081, depending on the port
that was exposed) and you should see a form that allows you to login. The default
user that is set up when the Express app is started is `username: Mike Vezzani /
 password: foobar`. You can also feel free to register a new user as well.

Please see the `express_app` and `vue_app` directories to read their respective
READMEs.
