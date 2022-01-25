const models = require("../models");
const cnicModel = models.Cnic;
const express = require("express");

const router = express.Router();

router.get("/get", (req, res) => {
  try {
    cnicModel.findAll().then((result) => {
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

module.exports = router;
