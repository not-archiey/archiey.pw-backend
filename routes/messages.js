const sequelize = require('../database')
const Message = require('../models/Message')

module.exports.get = async (req, res) => {
    await sequelize.sync()
    const limit = req.query.count || -1

    const allMessages = await Message.findAll({limit, order: [['updatedAt', 'DESC']]})
    res.status(200).json(allMessages)
}

module.exports.post = async (req,res) => {
    if(req.body.name == null || req.body.message == null){
        return res.status(422).json({"message" : "Seems like you got something wrong there bud"})
    }

    //TODO: seems like you can use a middleware here bud
    await sequelize.sync()
    const message = await Message.create({
        name : req.body.name,
        message : req.body.message
    });
    console.log(message.toJSON())

    res.status(200).json({"status" : "OK"})
}