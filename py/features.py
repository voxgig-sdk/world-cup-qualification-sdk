# WorldCupQualification SDK feature factory

from feature.base_feature import WorldCupQualificationBaseFeature
from feature.test_feature import WorldCupQualificationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WorldCupQualificationBaseFeature(),
        "test": lambda: WorldCupQualificationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
