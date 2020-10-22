import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

export default {
  mongoUrl: process.env.MONGO_URL || `mongodb+srv://${MongoHelper.remoteDbConfig.username}:${MongoHelper.remoteDbConfig.password}@clean-node-api.0kyhr.gcp.mongodb.net/${MongoHelper.remoteDbConfig.dbName}?retryWrites=true&w=majority`,
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'ASd=123d'
}
