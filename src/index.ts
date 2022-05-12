import { createServer, startServer } from './server'

/**
 * app initialization
 */
createServer()
  .then(startServer)
  .catch((error: Error) => {
    console.log(error)
  })
