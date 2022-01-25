var courses = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'}
]

const getCourse = (req, res) => {
    console.log(req)
    const course =  courses.find((item) => {
        return item.id == req.params.id
    })
    if(!course) res.send('404', 'The course with the given ID was not exist')
    else return res.send(course)
}

module.exports = {
    getCourse
}