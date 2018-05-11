## Vue.js photo uploading application

This project provides the front end experience for a simple photo upload
application. It makes calls to an Express REST api backend to retrieve
data and display it in various components.

It provides 3 routes: `/`, `/profile`, and `/photos`. At the root, you will
simply see your profile details. At `/profile` you can edit and update
your profile details. At `/photos` you can see your photo collection and
upload more photos.

Photos that are uploaded end up getting placed in the `static` directory.

The project leverages Vuex to manage global state for the user.

Presently the unit test coverage for this project is weak at best. Learning
best practices for unit testing javascript framework components is a
skill upon which I am trying to improve.
