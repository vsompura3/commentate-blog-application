const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })

const port = process.env.PORT || 5500
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ 'Mern Stack Blog': 'Initial Setup' })
})

app.listen(port, () => {
  console.log('Connected')
})
