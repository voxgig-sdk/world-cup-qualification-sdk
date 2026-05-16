-- WorldCupQualification SDK error

local WorldCupQualificationError = {}
WorldCupQualificationError.__index = WorldCupQualificationError


function WorldCupQualificationError.new(code, msg, ctx)
  local self = setmetatable({}, WorldCupQualificationError)
  self.is_sdk_error = true
  self.sdk = "WorldCupQualification"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WorldCupQualificationError:error()
  return self.msg
end


function WorldCupQualificationError:__tostring()
  return self.msg
end


return WorldCupQualificationError
