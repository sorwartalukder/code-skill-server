const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`code skill sever data ${port}`)
})