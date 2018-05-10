let express = require('express');
let request = require('supertest');
let expect = require('chai').expect;
let app = require('./server');

describe('Api', () => {
  describe('Users', () => {
    it('gets users in the database', (done) => {
      request(app)
        .get('/api/users')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          username = res.body.users[0].name;
          expect(username).to.equal('Mike Vezzani');
          done();
        });
    });

    it('updates a single user', (done) => {
      request(app)
        .post('/api/users/1')
        .set('Content-Type', 'application/json')
        .send({name: 'Ziggi Vezzani',
          email: 'ziggi@gmail.com',
          phone: '2092019660'})
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          response = res.body.message;
          expect(response).to.equal('Successfully updated Ziggi Vezzani!');
          done();
        });
    });

    it('registers a single user', (done) => {
      request(app)
        .post('/api/users/')
        .set('Content-Type', 'application/json')
        .send({name: 'Ziggi Pop', password: 'guitar'})
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          response = res.body.message;
          expect(response).to.equal('Successfully registered Ziggi Pop!');
          done();
        });
    });

  });

  describe('Photos', () => {
    it('uploads an image', (done) => {
      request(app)
        .post('/api/photos')
        .field('Content-Type', 'multipart/form-data')
        .field('owner', 1)
        .field('location', './test_data/photo.png')
        .attach('photo', './test_data/photo.png')
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          response = res.body;
          expected = {photo:
            {
              name: 'photo.png',
              owner: '1',
              filepath: "./test_data/photo.png",
            }
          };
          expect(response).to.eql(expected);
          done();
        });
    });

    it('retrieves images', (done) => {
      request(app)
        .post('/api/photos')
        .field('Content-Type', 'multipart/form-data')
        .field('owner', 1)
        .field('location', './test_data/photo.png')
        .attach('photo', './test_data/photo.png')

      request(app)
        .get('/api/photos')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          result = res.body.photos;
          expected = { "photos": [
            { id: 1,
              filename: "photo.png",
              location: "./test_data/photo.png",
              owner: 1
            }
          ]};
          expect(result).to.eql(expected.photos);
          done();
        });
    });
  });
});
