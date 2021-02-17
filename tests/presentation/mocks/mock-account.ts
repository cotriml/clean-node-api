import {
  AddAccount,
  LoadAccountByToken,
  Authentication
} from '@/domain/usecases'
import faker from 'faker'

export class AddAccountSpy implements AddAccount {
  result = true
  addAccountParams: AddAccount.Params
  async add (account: AddAccount.Params): Promise<AddAccount.Result> {
    this.addAccountParams = account
    return this.result
  }
}

export class AuthenticationSpy implements Authentication {
  result = {
    accessToken: faker.random.uuid(),
    name: faker.name.findName()
  }

  authenticationParams: Authentication.Params

  async auth (authenticationParams: Authentication.Params): Promise<Authentication.Result> {
    this.authenticationParams = authenticationParams
    return this.result
  }
}

export class LoadAccountByTokenSpy implements LoadAccountByToken {
  result = { id: faker.random.uuid() }
  accessToken: string
  role: string

  async load (accessToken: string, role?: string): Promise<LoadAccountByToken.Result> {
    this.accessToken = accessToken
    this.role = role
    return Promise.resolve(this.result)
  }
}
