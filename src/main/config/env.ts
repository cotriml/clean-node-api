export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://lucas:pIqbs5rrJikKVMe0@clean-node-api.0kyhr.gcp.mongodb.net/clean-node-api?retryWrites=true&w=majority',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'ASd=123d'
}
