const appRoot = require('app-root-path');

const app = require(`${appRoot}/index`);

const request = require('supertest-as-promised');
const httpStatus = require('http-status');

const chai = require('chai'); // eslint-disable-line import/newline-after-import

const jwt = require('jsonwebtoken');

const expect = chai.expect;
const config = require(`${appRoot}/config/config`);


chai.config.includeStack = true;

describe('## Auth APIs', () => {
    const password = 'password';
    const validUser = {
        email: 'email@email.com',
        password
    };
    const invalidUser = {
        email: 'invalidUser@email.com',
        password
    };


    it('should return Authentication error', (done) => {
        request(app)
          .post('/api/auth/login')
          .send(invalidUser)
          .expect(httpStatus.FORBIDDEN)
          .then((res) => {
            expect(res.body.Error.Name).to.equal('AuthenticationFailed');
            done();
          })
          .catch(done);
      });


      it('should get valid JWT token', (done) => {
        request(app)
          .post('/api/auth/login')
          .send(validUser)
          .expect(httpStatus.OK)
          .then((res) => {
            expect(res.body.Data.User).to.have.property('token');
            jwt.verify(res.body.Data.User.token, config.jwtSecret, (err, decoded) => {
              expect(err).to.not.be.ok; // eslint-disable-line no-unused-expressions
              expect(decoded.username).to.equal(validUser.username);
              done();
            });
          })
          .catch(done);
      });
});
