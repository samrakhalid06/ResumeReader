import app from './app'

function runServer() {
  app.listen(3000)
  console.log('Server listening on port 3000')
}

runServer();
