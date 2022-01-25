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

module.exports = router

