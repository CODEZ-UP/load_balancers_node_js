const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/welcome', (req, res) => {
  console.log('----Headers-----', req.headers)
  res.send(`Welcome from PORT ${PORT}\n\n`)
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})