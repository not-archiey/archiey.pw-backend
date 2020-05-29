require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 8000

const testRoute = require('./routes/test')
const messagesRoute = require('./routes/messages')

app.use(express.json())
app.use(cors({
    origin: 'https://archiey.pw'
}))

app.get('/api/test', testRoute)
app.get('/api/messages', messagesRoute.get)
app.post('/api/messages', messagesRoute.post)

app.listen(port, () => console.log(`Listening on ${port}`))