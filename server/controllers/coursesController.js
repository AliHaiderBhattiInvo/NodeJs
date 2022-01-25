let coursesModel = require("../models").Courses;

const createCourse = async (req, res) => {
  var course = await coursesModel.create({
    name: req.body.name,
    description: req.body.description,
  });
  res.status(200).json({ "New course ban gya": course });
};

const getCourses = async (req, res) => {
  var courses = await coursesModel.findAll();
  console.log("courses", courses);
  res.status(200).json({ courses });
};

const getSingleCourse = async (req, res) => {
  var course = await coursesModel.findOne({ where: { id: req.params.id } });
  if (course) res.status(200).json({ course });
  else
    res
      .status(400)
      .send(`The course having an ID ${req.params.id} doesn't exist`);
};

const updateCourse = async (req, res) => {
  let cid = await coursesModel.findOne({ where: { id: req.params.id } });
  if (cid) {
    let course = {};
    course.name = req.body.name;
    course.description = req.body.description;
    console.log("updated course", course);
    coursesModel.update(course, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("Course updated successfully");
  } else
    res
      .status(404)
      .send(`The course having an ID ${req.params.id} doesn't exist`);
};

const deleteCourse = async (req, res) => {
  let cid = await coursesModel.findOne({ where: { id: req.params.id } });
  if (cid) {
    coursesModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("Project deleted successfully");
  } else
    res
      .status(404)
      .send(`The course having an ID ${req.params.id} doesn't exist`);
};

module.exports = {
  createCourse,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse
};
