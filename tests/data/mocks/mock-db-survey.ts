import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'
import { AddSurvey } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'
import { LoadSurveyByIdRepository, LoadSurveysRepository, AddSurveyRepository } from '@/data/protocols/db'

export class AddSurveyRepositorySpy implements AddSurveyRepository {
  addSurveyParams: AddSurvey.Params

  async add (data: AddSurvey.Params): Promise<void> {
    this.addSurveyParams = data
    return Promise.resolve()
  }
}

export class LoadSurveyByIdRepositorySpy implements LoadSurveyByIdRepository {
  surveyModel = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<SurveyModel> {
    this.id = id
    return Promise.resolve(this.surveyModel)
  }
}

export class LoadSurveysRepositorySpy implements LoadSurveysRepository {
  surveyModels = mockSurveyModels()
  accountId: string

  async loadAll (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return Promise.resolve(this.surveyModels)
  }
}
