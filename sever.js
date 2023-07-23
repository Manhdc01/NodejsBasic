const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! vs ManhDC')
})

app.get('/about', (req, res) => {
    res.send('I"m ManhDC')
  })

app.listen(port, ()  => { //callback function
  console.log(`Example app listening on port ${port}`)
})