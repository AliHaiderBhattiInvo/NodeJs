const models = require('../models');
const userModel = models.Users;
const express = require('express');

const router =  express.Router();

router.get('/get', (req, res) => {
    userModel.findOne({
        where: {
            id: '1'
        },
        include:{
            model:models.Cnic,
        }
    }).then((result)=>{
        res.json(result);
    });
})

router.post('/create', async (req, res) => {
    try {
        var user = await userModel.create({
            name: req.body.name
        })
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router

