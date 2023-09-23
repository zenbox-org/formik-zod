import { ZodError } from 'zod'

/**
 * Returns only the first error for each field
 */
export function toFormikErrors<T>(e: ZodError<T>) {
  const entries = Object.entries<string[] | undefined>(e.flatten().fieldErrors)
  const entriesMapped = entries.map(([key, value]): [string, string | undefined] => [key, value && value[0]]) // .concat([GLOBAL_ERROR, globalErrorString])
  return Object.fromEntries(entriesMapped)
}
