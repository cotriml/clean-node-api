import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'

let surveyColletction: Collection

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
  })
})
