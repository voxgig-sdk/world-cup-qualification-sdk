# WorldCupQualification SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WorldCupQualificationUtility.registrar = ->(u) {
  u.clean = WorldCupQualificationUtilities::Clean
  u.done = WorldCupQualificationUtilities::Done
  u.make_error = WorldCupQualificationUtilities::MakeError
  u.feature_add = WorldCupQualificationUtilities::FeatureAdd
  u.feature_hook = WorldCupQualificationUtilities::FeatureHook
  u.feature_init = WorldCupQualificationUtilities::FeatureInit
  u.fetcher = WorldCupQualificationUtilities::Fetcher
  u.make_fetch_def = WorldCupQualificationUtilities::MakeFetchDef
  u.make_context = WorldCupQualificationUtilities::MakeContext
  u.make_options = WorldCupQualificationUtilities::MakeOptions
  u.make_request = WorldCupQualificationUtilities::MakeRequest
  u.make_response = WorldCupQualificationUtilities::MakeResponse
  u.make_result = WorldCupQualificationUtilities::MakeResult
  u.make_point = WorldCupQualificationUtilities::MakePoint
  u.make_spec = WorldCupQualificationUtilities::MakeSpec
  u.make_url = WorldCupQualificationUtilities::MakeUrl
  u.param = WorldCupQualificationUtilities::Param
  u.prepare_auth = WorldCupQualificationUtilities::PrepareAuth
  u.prepare_body = WorldCupQualificationUtilities::PrepareBody
  u.prepare_headers = WorldCupQualificationUtilities::PrepareHeaders
  u.prepare_method = WorldCupQualificationUtilities::PrepareMethod
  u.prepare_params = WorldCupQualificationUtilities::PrepareParams
  u.prepare_path = WorldCupQualificationUtilities::PreparePath
  u.prepare_query = WorldCupQualificationUtilities::PrepareQuery
  u.result_basic = WorldCupQualificationUtilities::ResultBasic
  u.result_body = WorldCupQualificationUtilities::ResultBody
  u.result_headers = WorldCupQualificationUtilities::ResultHeaders
  u.transform_request = WorldCupQualificationUtilities::TransformRequest
  u.transform_response = WorldCupQualificationUtilities::TransformResponse
}
