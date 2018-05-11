## RESTful API express app for photo upload project

This project constitutes the RESTful api backend of the photo upload
application. Within, there are 5 routes: `GET /users`, `POST /users`,
`POST /users/:id`, `GET /photos`, and `POST /photos`. All of these
routes are scoped to `/api` to make it clear that calls to these endpoints
are for api calls.

A couple callouts. First, userdata is stored in an sqlite3 in memory database.
For the purposes of this project it seemed appropriate to take this approach
in order to deliver an MPV first iteration. However, if this app were to
become anything more serious, it would be necessary to make sure it was
switched to a filesystem level database so that data would be persisted
between server restarts.

Second. Right now the user passwords are stored in plain text, _which is
definitely a bad thing_. Production applications would never do this for the
serious risk it exposes to end users' personal data. However, in this
application it seemed appropriate for the purpose of making progress quickly.

There are unit tests present, which can be run using the
`./node_modules/mocha/bin/mocha servertest.js` command in the terminal.
Presently these tests only cover happy path scenarios, but if this were
to ever become a more serious api application, those unit tests would
need to be fleshed out in greater detail so that further changes to the api
code can be checked to ensure they aren't breaking existing functionality.
