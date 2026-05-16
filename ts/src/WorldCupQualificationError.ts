
import { Context } from './Context'


class WorldCupQualificationError extends Error {

  isWorldCupQualificationError = true

  sdk = 'WorldCupQualification'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WorldCupQualificationError
}

