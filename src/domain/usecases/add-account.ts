import { AccountModel } from '@/domain/models/account'

export interface AddAccount {
  add: (account: AddAccount.Params) => Promise<AddAccount.Result>
}

export namespace AddAccount {
  export type Params = Omit<Result, 'id'>

  export type Result = AccountModel
}
