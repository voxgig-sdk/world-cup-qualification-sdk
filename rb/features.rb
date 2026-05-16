# WorldCupQualification SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WorldCupQualificationFeatures
  def self.make_feature(name)
    case name
    when "base"
      WorldCupQualificationBaseFeature.new
    when "test"
      WorldCupQualificationTestFeature.new
    else
      WorldCupQualificationBaseFeature.new
    end
  end
end
