export class ValidationError extends Error {
  public name = 'ValidationError'

  public inner: Array<{ path: string; message: string }> = []

  public constructor(message: string) {
    super(message)
  }
}
