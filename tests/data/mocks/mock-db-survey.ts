import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'
import { AddSurvey } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'
import { LoadSurveyByIdRepository, LoadSurveysRepository, AddSurveyRepository, CheckSurveyByIdRepository, LoadAnswersBySurveyRepository } from '@/data/protocols/db'
import faker from 'faker'

export class AddSurveyRepositorySpy implements AddSurveyRepository {
  addSurveyParams: AddSurvey.Params

  async add (data: AddSurvey.Params): Promise<void> {
    this.addSurveyParams = data
  }
}

export class CheckSurveyByIdRepositorySpy implements CheckSurveyByIdRepository {
  result = true
  id: string

  async checkById (id: string): Promise<CheckSurveyByIdRepository.Result> {
    this.id = id
    return this.result
  }
}

export class LoadSurveyByIdRepositorySpy implements LoadSurveyByIdRepository {
  result = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<LoadSurveyByIdRepository.Result> {
    this.id = id
    return this.result
  }
}

export class LoadAnswersBySurveyRepositorySpy implements LoadAnswersBySurveyRepository {
  result = [faker.random.word(), faker.random.word()]
  id: string

  async loadAnswers (id: string): Promise<LoadAnswersBySurveyRepository.Result> {
    this.id = id
    return this.result
  }
}

export class LoadSurveysRepositorySpy implements LoadSurveysRepository {
  result = mockSurveyModels()
  accountId: string

  async loadAll (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return this.result
  }
}
