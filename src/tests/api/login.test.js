const request = require('supertest');
const handler = require('../pages/api/login');

describe('POST /api/login', () => {
  it('returns 200 OK if the username and password are correct', async () => {
    const response = await request(handler)
      .post('/api/login')
      .send({ username: 'username', password: 'password' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.message).toBe('Login successful');
  });

  it('returns 401 Unauthorized if the username and password are incorrect', async () => {
    const response = await request(handler)
      .post('/api/login')
      .send({ username: 'wrong', password: 'wrong' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401);
    expect(response.body.message).toBe('Incorrect username or password');
  });
});
