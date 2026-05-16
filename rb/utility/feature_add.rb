# WorldCupQualification SDK utility: feature_add
module WorldCupQualificationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
