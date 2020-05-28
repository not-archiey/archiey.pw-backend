const sequelize = require('../database')
const Message = require('../models/Message')

module.exports.get = async (req, res) => {
    await sequelize.sync()
    const allMessages = await Message.findAll()
    res.status(200).json(allMessages)
}

module.exports.post = async (req,res) => {
    if(req.body.name == null || req.body.message == null){
        return res.status(422).json({"message" : "Seems like you got something wrong there bud"})
    }

    //TODO: seems like you can use a middleware here bud
    await sequelize.sync()
    const jane = await Message.create({
        name : req.body.name,
        message : req.body.message
    });
    console.log(jane.toJSON())

    res.status(200).json({"status" : "OK"})
}