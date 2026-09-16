# WorldCupQualification SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WorldCupQualificationFeatures
  def self.make_feature(name)
    case name
    when "base"
      WorldCupQualificationBaseFeature.new
    when "ratelimit"
      WorldCupQualificationRatelimitFeature.new
    when "retry"
      WorldCupQualificationRetryFeature.new
    when "test"
      WorldCupQualificationTestFeature.new
    when "timeout"
      WorldCupQualificationTimeoutFeature.new
    else
      WorldCupQualificationBaseFeature.new
    end
  end
end
