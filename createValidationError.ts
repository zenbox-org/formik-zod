import { ZodError } from 'zod'
import { ValidationError } from './ValidationError'

export function createValidationError<T>(e: ZodError<T>) {
  const error = new ValidationError(e.message)
  error.inner = e.errors.map((err) => ({
    message: err.message,
    path: err.path.join('.'),
  }))
  return error
}
