import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { sign } from 'jsonwebtoken'
import env from '../config/env'

let surveyColletction: Collection
let accountColletction: Collection

describe('Survey Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyColletction = await MongoHelper.getCollection('surveys')
    await surveyColletction.deleteMany({})

    accountColletction = await MongoHelper.getCollection('accounts')
    await accountColletction.deleteMany({})
  })

  describe('POST /surveys', () => {
    test('Should return 403 on AddSurvey without accessToken', async () => {
      await request(app)
        .post('/api/surveys')
        .send({
          question: 'Question',
          answers: [{
            answer: 'Answer 1',
            image: 'http://image-name.com '
          },
          {
            answer: 'Answer 2'
          }]
        })
        .expect(403)
    })

    test('Should return 204 on AddSurvey with valid token', async () => {
      const res = await accountColletction.insertOne({
        name: 'Lucas Cotrim',
        email: 'lucascotrim3@hotmail.com',
        password: '123',
        role: 'admin'
      })
      const id = res.ops[0]._id
      const accessToken = sign({ id }, env.jwtSecret)

      await accountColletction.updateOne({
        _id: id
      }, {
        $set: {
          accessToken
        }
      })

      await request(app)
        .post('/api/surveys')
        .set('x-access-token', accessToken)
        .send({
          question: 'Question',
          answers: [{
            answer: 'Answer 1',
            image: 'http://image-name.com '
          },
          {
            answer: 'Answer 2'
          }]
        })
        .expect(204)
    })
  })

  describe('GET /surveys', () => {
    test('Should return 403 on LoadSurveys without accessToken', async () => {
      await request(app)
        .get('/api/surveys')
        .expect(403)
    })
  })
})
