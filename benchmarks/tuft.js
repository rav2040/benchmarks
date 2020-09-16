'use strict'

const { tuft } = require('tuft')

tuft()
  .set('GET /', () => {
    return {
      json: { hello: 'world' }
    }
  })
  .createServer({ port: 3000 })
  .start()
