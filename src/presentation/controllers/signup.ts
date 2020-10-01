import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissginParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password','passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissginParamError(field))
      }
    }
  }
}
