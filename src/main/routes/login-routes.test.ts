import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountColletction: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountColletction = await MongoHelper.getCollection('accounts')
    await accountColletction.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Lucas',
          email: 'lucascotrim3@hotmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountColletction.insertOne({
        email: 'lucascotrim3@hotmail.com',
        password: password

      })

      await request(app)
        .post('/api/login')
        .send({
          email: 'lucascotrim3@hotmail.com',
          password: '123'
        })
        .expect(200)
    })
  })
})
