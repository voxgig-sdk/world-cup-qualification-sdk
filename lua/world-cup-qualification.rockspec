package = "voxgig-sdk-world-cup-qualification"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/world-cup-qualification-sdk.git"
}
description = {
  summary = "WorldCupQualification SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["world-cup-qualification_sdk"] = "world-cup-qualification_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
