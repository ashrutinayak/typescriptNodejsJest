import user  from "../src/db/models/index";
import { createServer, startServer } from '../src/server'  
const request = require('supertest');
let server: any;
beforeAll(async () => {
    server = await createServer()
    .then(startServer)
    .catch((error: Error) => {
      console.log(error)
    })
});

describe('Test Suite for REST end points for user', () => {
    jest.setTimeout(30000);

    test('GET Rest API Test for user list', async () => {
        user.findAll = jest.fn().mockReturnValue({
            "id": "3",
            "name": "admin",
            "email": "admin@gmail.com",
            "password": "admin123",
            "type": 1,
            "status": 1,
            "updatedAt": "2022-05-17T10:52:02.084Z",
            "createdAt": "2022-05-17T10:52:02.084Z"
        });
        const getResponse = await request(server).get('/v1/user/');
        expect(getResponse.statusCode).toBe(200); 
    });
    test('POST Rest API Test for user create', async () => {
        user.create = jest.fn().mockReturnValue({
            "id": "3",
            "name": "admin",
            "email": "admin@gmail.com",
            "password": "admin123",
            "type": 1,
            "status": 1,
            "updatedAt": "2022-05-17T10:52:02.084Z",
            "createdAt": "2022-05-17T10:52:02.084Z"
        });
        const getResponse = await request(server).post('/v1/user/create').send({
            "name": "abc",
            "email": "abc@gmail.com",
            "password": "admin123",
            "type": 2
        });
        expect(getResponse.statusCode).toBe(200);
    });
    test('POST Rest API Test for error during user create', async () => {
        user.create = jest.fn().mockReturnValue({
            "id": "3",
            "name": "admin",
            "email": "admin@gmail.com",
            "password": "admin123",
            "type": 1,
            "status": 1,
            "updatedAt": "2022-05-17T10:52:02.084Z",
            "createdAt": "2022-05-17T10:52:02.084Z"
        });
        const getResponse = await request(server).post('/v1/user/create').send({
            "name": "",
            "email": "abc@gmail.com",
            "password": "admin123",
            "type": 2
        });
        expect(getResponse.statusCode).toBe(400);
    });
    let userUpdateData = {
        "name": "abcd",
        "email":"a@gmail.com",
        "type": 2
    }
    const updateUserData = {
        "email":"a@gmail.com",
        "type": 2
    }
    test('PUT Rest API Test for user update', async () => {
        user.update = jest.fn().mockReturnValue({
            "message": "User Updated.",
            "user": [
                1
            ]
        });
        const getResponse = await request(server).put('/v1/user/update/5').send(userUpdateData);
        // console.log(getResponse.body)
        expect(getResponse.statusCode).toBe(200); 
    });
    it('PUT Rest API Test for error user update', async () => {
        user.update = jest.fn().mockReturnValue({
            "statusCode": 400,
            "message": "name is not allowed to be empty"
        });
        const getResponse = await request(server).put('/v1/user/update/3').send(updateUserData);
        // console.log(getResponse.body)
        expect(getResponse.statusCode).toBe(400); 
    });
        
    test('DELETE Rest API Test for user delete', async () => {
         user.destroy = jest.fn().mockReturnValue({
            "message": "User Deleted.",
            "user": 1
        });
        const deleteResponse = await request(server).delete('/v1/user/delete/2');
        expect(deleteResponse.statusCode).toBe(200);
    });   

});