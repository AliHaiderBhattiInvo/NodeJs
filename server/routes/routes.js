const express = require('express');
const Joi = require('joi');
var coursesController = require('../controllers/controllers');

const app = express();
app.use(express.json())
var courses = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'}
]
 
app.get('/', (req, res) => {
    res.send('Hello World 123')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', coursesController.getCourse)

app.post('/api/courses', (req, res) => {
    // const schema = Joi.object({
    //     name: Joi.string().min(3).required(),
    // })
    // const result = schema.validate(req.body)
    const result = validate(req.body)
    // console.log('result agya', result.error.details[0].message)
    if(result.error) {
        res.status('400').send(result.error.details[0].message)
    } else { 
        const course = {
            id: courses.length + 1,
            name: req.body.name 
        }
        courses.push(course)
        res.status('200').send(course)
    }
    
})

app.put('/api/courses/:id', (req, res) => {
    const course =  courses.find((item) => {
        return item.id == req.params.id
    })
    const result = validate(req.body)
    // if(!course) res.send('404', 'The course with the given ID was not exist')
    // const schema = Joi.object({
    //     name: Joi.string().min(3).required(),
    // })
    // const result = schema.validate(req.body)
    if(result.error) res.status('400').send(result.error.details[0].message)
    course.name = req.body.name
    res.send(course)

})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find((item) => {
        return item.id == req.params.id
    })
    if(!course) res.status('404').send(`The course having ${req.params.id} doesn't exist`)
    else {
        courses = courses.filter((item) => {
            return item.id != req.params.id
        })
        res.send(`Course having ID ${req.params.id} deleted successfully`)
    }
})

function validate(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })
    return schema.validate(course)
}
app.get('/api/posts/:year/:month/:day', (req, res) => {
    res.send((req.params))
    // res.send(req.query)
    // res.send(req.query)
})
