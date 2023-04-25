const express = require('express');
const moment = require('moment');
const app = express();
const fs = require('fs/promises')

app.use(async (req, res, next) => {
    const { method, url } = req
    const date = moment().format('dd-mm-yyyy_hh:mm:ss')
    await fs.appendFile('server.log', `\n${method} ${url} ${date}`)
    next()
})
app.get('/', (request, response) => {
    response.send('<h2>Home Home<h2>')
})

app.use((req, res, next) => {
    res.status(404).json({ message: 'not found'})
    next()
})

app.listen(3000, () => console.log("cors running"))