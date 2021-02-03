import { makeDbLoadAccountByToken, makeLogControllerDecorator } from '@/main/factories'
import { Middleware } from '@/presentation/protocols'
import { AuthMiddleware } from '@/presentation/middlewares'

export const makeAuthMiddleware = (role?: string): Middleware => {
  const controller = new AuthMiddleware(makeDbLoadAccountByToken(), role)
  return makeLogControllerDecorator(controller)
}
