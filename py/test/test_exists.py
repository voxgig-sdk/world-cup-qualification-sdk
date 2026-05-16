# ProjectName SDK exists test

import pytest
from worldcupqualification_sdk import WorldCupQualificationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WorldCupQualificationSDK.test(None, None)
        assert testsdk is not None
