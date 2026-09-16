# WorldCupQualification SDK feature factory

from worldcupqualification_sdk.feature.base_feature import WorldCupQualificationBaseFeature
from worldcupqualification_sdk.feature.ratelimit_feature import WorldCupQualificationRatelimitFeature
from worldcupqualification_sdk.feature.retry_feature import WorldCupQualificationRetryFeature
from worldcupqualification_sdk.feature.test_feature import WorldCupQualificationTestFeature
from worldcupqualification_sdk.feature.timeout_feature import WorldCupQualificationTimeoutFeature


_FEATURES = {
    "base": lambda: WorldCupQualificationBaseFeature(),
    "ratelimit": lambda: WorldCupQualificationRatelimitFeature(),
    "retry": lambda: WorldCupQualificationRetryFeature(),
    "test": lambda: WorldCupQualificationTestFeature(),
    "timeout": lambda: WorldCupQualificationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
