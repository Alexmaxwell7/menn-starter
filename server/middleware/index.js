let counter = 0

export class Middleware {
  static reqType(req, res, next) {
    counter++
    // eslint-disable-next-line no-console
    console.log('hits', counter)
    next()
  }
}
