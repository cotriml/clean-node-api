import { LoadSurveyByIdRepository, } from '@/data/protocols'
import { LoadSurveyById } from '@/domain/usecases'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) { }

  async loadById (id: string): Promise<LoadSurveyById.Result> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey
  }
}
