var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
var fileUpload = require('express-fileupload');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
app.use(fileUpload());

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
db.serialize(function () {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, password TEXT, email TEXT, phone TEXT)");
  db.run("CREATE TABLE photos (id INTEGER PRIMARY KEY, filename TEXT, location TEXT, owner INTEGER)");
  db.run("INSERT INTO users (name, password, email, phone) VALUES (?, ?, ?, ?)", "Mike Vezzani", "foobar", "mjvezzani@gmail.com", "209-201-9660");
});

var port = 4000;


router.get('/users', function(req, res) {
  db.all("SELECT * FROM users", function(err, rows){
    res.json({ users: rows });
  });
});

router.post('/users/', function(req, res) {
  db.run("INSERT INTO users (name, password) VALUES (?, ?)", req.body.name, req.body.password);
  res.json({ message: "Successfully registered " + req.body.name + "!"});
});

router.post('/users/:id', function(req, res) {
  db.run("UPDATE users SET name = (?), email = (?), phone = (?) WHERE id = (?)", req.body.name, req.body.email, req.body.phone, req.params.id);
  console.log(req.body.name + " updated!");
  res.json({ message: "Successfully updated " + req.body.name + "!"});
});

router.get('/photos', function(req, res) {
  db.all("SELECT * FROM photos", function(err, rows){
    res.json({ photos: rows });
  });
});

router.post('/photos', function(req, res) {
  if (!req.files)
      return res.status(400).send('No files were uploaded.');
   
  let photo = req.files.photo;
  let owner = req.body.owner;
  let filepath = req.body.location;

  photo.mv(`../vue_app/static/${photo.name}`, function(err) {
//  This is what I originally tried in order to prevent execution from
//  continuing, which was causing the browser to try and access a file
//  that hadn't finished being moved, thus resulting in a broken image
//  in the browser. However, execution seemed to continue to the
//  db.run statement and when the Vue.js code rendered the view, the
//  image would still be broken. I was only able to fix this issue at
//  the frontend code level.
//    if (err) {
//      return res.status(500).send(err);
//    } else {
//      const intervalId = setInterval(() => {
//        if(fs.accessSync(`../vue_app/static/${photo.name}`, fs.constants.F_OK) == undefined) {
//          clearInterval(intervalId);
//        }
//      }, 2000);
//    }


    if (err)
      return res.status(500).send(err);
 
    db.run("INSERT INTO photos (filename, location, owner) VALUES (?, ?, ?)", photo.name, filepath, owner);
    res.json({photo:
      {
        name: photo.name,
        owner: owner,
        filepath: filepath
      }
    });
  });
});

app.use('/api', router);

app.listen(port);
console.log("Server started on " + port);

module.exports = app;
