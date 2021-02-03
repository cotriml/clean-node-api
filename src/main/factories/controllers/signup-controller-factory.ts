import { makeSignupValidation, makeDbAuthentication, makeDbAddAccount, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { SignUpController } from '@/presentation/controllers'

export const makeSignupController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignupValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
