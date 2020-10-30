import { MissginParamError } from '../../presentation/errors'
import { RequiredFieldValidation } from './required-field-validation'

const makesut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('Required Field Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makesut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissginParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makesut()
    const error = sut.validate({ field: 'any' })
    expect(error).toBeFalsy()
  })
})
