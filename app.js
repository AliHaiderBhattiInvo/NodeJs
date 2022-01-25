const express = require('express');
const bodyParser = require('body-parser');
const courseRoutes = require('./server/routes/coursesRoutes');
const usersRoutes = require('./server/routes/usersRoutes');
const cnicRoutes = require('./server/routes/cnicRoutes')

// Set up the express app
const app = express();


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/course',courseRoutes);
app.use('/api/user', usersRoutes)
app.use('/api/cnic', cnicRoutes)

const port = process.env.PORT || 3000
app.listen(port,()=>{
console.log("Server is running on: " + port);
})

