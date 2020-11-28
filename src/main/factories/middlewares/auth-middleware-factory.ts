import { makeDbLoadAccountByToken } from '../usecases/account/load-account-by-token/db-load-account-by-token-factory'
import { AuthMiddleware } from '@/presentation/middlewares/auth-middleware'
import { Middleware } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../decorators/log-controller-decorator-factory'

export const makeAuthMiddleware = (role?: string): Middleware => {
  const controller = new AuthMiddleware(makeDbLoadAccountByToken(), role)
  return makeLogControllerDecorator(controller)
}
