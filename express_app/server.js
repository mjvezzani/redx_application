var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var type = upload.single('file');

db.serialize(function () {
  db.run("CREATE TABLE users (name TEXT)");
  db.run("INSERT INTO users (name) VALUES (?)", "Mike Vezzani");
  db.run("INSERT INTO users (name) VALUES (?)", "John Smith");
  db.run("INSERT INTO users (name) VALUES (?)", "Barry Manilow");
  db.run("CREATE TABLE photos (name TEXT, content BLOB)");
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));

var port = 8080;

var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/users/:id', function(req, res) {
  db.get("SELECT * FROM users WHERE id=?", id);
});

router.get('/users', function(req, res) {
  db.all("SELECT * FROM users", function(err, rows){
    res.json({ users: rows });
  });
});

router.post('/users', function(req, res) {
  db.run("INSERT INTO users (name) VALUES (?)", req.body.name);
  console.log(req.body.name + " added to users");
  res.json({ message: "Success!" });
});

router.get('/photos', function(req, res) {
  db.all("SELECT * FROM photos", function(err, rows){
    res.json({ photos: rows });
  });
});

router.post('/photos', type, function(req, res, next) {
  console.log("Saving in DB");
  db.run("INSERT INTO photos (name, content) values (?, ?)", [req.file.name, req.file.buffer]);
  console.log(req.file.name + " added to photos!");
  res.json({message: "Success!"});
});

app.use('/api', router);

app.listen(port);
console.log("Server started on " + port);
