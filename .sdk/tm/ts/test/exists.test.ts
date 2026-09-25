
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WorldCupQualificationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WorldCupQualificationSDK.test()
    equal(testsdk instanceof WorldCupQualificationSDK, true,
      'WorldCupQualificationSDK.test() must return a client synchronously')
  })

})
