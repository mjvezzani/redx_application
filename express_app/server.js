var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));
app.use(cors());

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
db.serialize(function () {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, password TEXT)");
  db.run("INSERT INTO users (name, password) VALUES (?, ?)", "Mike Vezzani", "foobar");
  db.run("INSERT INTO users (name, password) VALUES (?, ?)", "John Smith", "bazshiz");
  db.run("INSERT INTO users (name, password) VALUES (?, ?)", "Barry Manilow", "ziglow");
});

var port = 4000;


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/users', function(req, res) {
  db.all("SELECT * FROM users", function(err, rows){
    res.json({ users: rows });
  });
});

router.post('/users/:id', function(req, res) {
  db.run("UPDATE users SET name = (?) WHERE id = (?)", req.body.name, req.params.id);
  console.log(req.body.name + " updated!");
  res.json({ message: "Success!" });
});

router.get('/photos', function(req, res) {
  db.all("SELECT * FROM photos", function(err, rows){
    res.json({ photos: rows });
  });
});

router.post('/photos', upload.single('photo'), function(req, res, next) {
  console.log(req.files);
  next();
});

app.use('/api', router);

app.listen(port);
console.log("Server started on " + port);
