
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WorldCupQualificationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WorldCupQualificationSDK.test()
    equal(null !== testsdk, true)
  })

})
