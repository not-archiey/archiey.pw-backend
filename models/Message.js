const sequelize = require('../database')
const { Model, DataTypes } = require('sequelize')

class Message extends Model {}
Message.init({
  name: DataTypes.STRING,
  message: DataTypes.TEXT
}, { sequelize, modelName: 'message' })

module.exports = Message