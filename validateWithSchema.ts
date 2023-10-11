import { ZodSchema } from 'zod'
import { toFormikErrors } from './toFormikErrors'

export const validateWithSchema = <Values>(schema: ZodSchema<Values>) => async (values: Values) => {
  const result = await schema.spa(values)
  if (!result.success) {
    return toFormikErrors(result.error)
  }
}
