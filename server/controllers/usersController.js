const models = require('../models');
const userModel = models.Users;

const getUsers = (req, res) => {
    userModel.findAll({
        include:{
            model:models.Cnic,
        }
    }).then((result)=>{
        res.json(result);
    });
}

const createUser = async (req, res) => {
    try {
        var user = await userModel.create({
            name: req.body.name
        })
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        var userId = await userModel.findOne({ where: {
            id: req.params.id
        }})
        if(userId) userModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("User deleted successfully")
        
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUser
}