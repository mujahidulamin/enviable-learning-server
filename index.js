const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./data/courses.json')
const courseDetails = require('./data/courseDetails.json')

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.get('/courses' , (req, res) => {
    res.send(courses)
})

app.get('/courseDetails/:id' , (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    const selectedDetails = courseDetails.find(detail => detail.id == id)
    res.send(selectedDetails)
})



app.listen(port, () => {
    console.log('server is running', port)
})

