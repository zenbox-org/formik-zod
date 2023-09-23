import { ZodTypeDef } from 'zod/lib/types'
import { ParseParams, ZodError, ZodType } from 'zod'
import { createValidationError } from './createValidationError'

export function toFormikValidationSchema<Output = unknown, Def extends ZodTypeDef = ZodTypeDef, Input = Output>(
  schema: ZodType<Output, Def, Input>,
  params?: Partial<ParseParams>,
): { validate: (obj: Input) => Promise<Output> } {
  return {
    async validate(obj: Input) {
      try {
        return schema.parseAsync(obj, params)
      } catch (err: unknown) {
        throw createValidationError(err as ZodError<Input>)
      }
    },
  }
}
