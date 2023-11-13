import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/app2", (req, res) => {
  const helloMessage = `Hello from the #2 app and ${os.hostname()}`
  console.log(helloMessage)
  res.send(helloMessage)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})