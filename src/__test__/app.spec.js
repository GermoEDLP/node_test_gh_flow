const request = require('supertest');
const app = require('../app');

describe('Get / Endpoint', ()=>{
    it('should return a statusCode == 200', async()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    })
    
    it('should return a "Hola Mundo" message', async()=>{
        const res = await request(app).get('/');
        expect(res.body.msg.indexOf('Hola')).not.toBe(-1);
    })
})


// TEST DE get /user
describe('Get /user', ()=>{
    it('should return a statusCode == 200', async()=>{
        const res = await request(app).get('/user');
        expect(res.statusCode).toEqual(200);
    })
});
