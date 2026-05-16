# WorldCupQualification SDK utility: make_context
require_relative '../core/context'
module WorldCupQualificationUtilities
  MakeContext = ->(ctxmap, basectx) {
    WorldCupQualificationContext.new(ctxmap, basectx)
  }
end
