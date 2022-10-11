const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/wanda', (req, res) => {
  res.send("Hello wanda");
})

app.get('/thor', (req, res) => {
  res.send('Hello Thor!')
})

app.get('/thanos', (req, res) => {
  res.send('Hello Thanos!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
