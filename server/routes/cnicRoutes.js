const models = require("../models");
const cnicModel = models.Cnic;
const express = require("express");
const emailJob = require('../jobs/email');


const router = express.Router();

router.get("/get", (req, res) => {
  try {
    cnicModel.findAll({
      where: {
        id_number: 35202
      },
      include:{
        model:models.Users
      }
    }).then((result) => {
      res.json(result);
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
     var cnic = await cnicModel.create({
      user_id: req.body.user_id,
      id_number: req.body.id_number,
    });
    res.status(200).json(cnic);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/emailSend', emailJob.scheduleEmail)


module.exports = router;
