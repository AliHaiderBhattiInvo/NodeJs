const models = require("../models");
const studentsModel = models.Students;
const coursesModel = models.Courses;
const studentCourses = models.StudentsCourses;
const express = require("express");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    var student = await studentsModel.create({
      name: req.body.name,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/studentcourse", async (req, res) => {
  try {
    // var students = await studentsModel.findAll({
    //   include: {
    //     model: models.Courses,
    //   },
    // });
    // res.status(200).json({ students });
    var course = await coursesModel.findOne({
      where: {
        id: 1,
      },
    });
    const students = await course.getStudents();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/addCourse", async (req, res) => {
  try {
    var course = await coursesModel.findOne({
      where: { id: req.body.course_id },
    });
    var student = await studentsModel.findOne({
      where: {
        id: req.body.student_id,
      },
    });
    await student.addCourse(course);
    res.status(200).send("Course assigned successfully to the student");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/studentDelete/:id", async (req, res) => {
  try {
    // let sid = await studentsModel.findOne({ where: { id: req.params.id } });
    // if (sid) {
    await studentsModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    await studentCourses.destroy({
      where: {
        student_id: req.params.id,
      },
    });
    res.send("deleted successfully");
    // }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/studentUpdate/:id", async (req, res) => {
  try {
    let stu = {};
    stu.name = req.body.name;
    await studentsModel.update(stu, {
      where: {
        id: req.params.id,
      },
    });
    res.send("Student updated successfully!");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/studentGet/:id", async (req, res) => {
    try {
        var student =  await studentsModel.findAll({
            where: {
                id: req.params.id
            },
            include: {
                model: models.Courses
            }
        })
        res.send(student)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;
