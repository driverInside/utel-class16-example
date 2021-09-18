const express = require('express')
const app = express()
const messageRoutes = require('./messages')
const PORT = 5000

app.use(express.json())
app.use('/message', messageRoutes)

app.get('/', (req, res) => {
  res.send({
    message: 'hi ucamp'
  })
})

app.listen(5000, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`)
})
// app.listen(5000, function () {
//   console.log(`El servidor está corriendo en el puerto: ${PORT}`)
// })
