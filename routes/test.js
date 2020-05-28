const faker = require('faker')

module.exports = (req,res) => {
    res.send(`Also, the API says hello to ${faker.name.firstName()}!`)
}
