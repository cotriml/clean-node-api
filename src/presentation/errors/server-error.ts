export class ServerError extends Error {
  constructor (stack: string = 'Error') {
    super('Internal Server Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
