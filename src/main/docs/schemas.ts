import {
  accountSchema,
  errorSchema,
  loginParamsSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema,
  signUpParamsSchema,
  addSurveyParamsSchema,
  saveSurveyParamsSchema,
  surveyResultSchema
} from './schemas/'
import { surveyResultAnswerSchema } from './schemas/survey-result-answer-schema'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  error: errorSchema,
  surveys: surveysSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  signUpParams: signUpParamsSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  surveyResult: surveyResultSchema,
  surveyResultAnswer: surveyResultAnswerSchema
}
