require('dotenv')

const { Sequelize } = require('sequelize')

let sequelize;
if(process.env.MEMORYMODE == "TRUE"){
    sequelize = new Sequelize('sqlite::memory:')
}else{
    sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
        {
            host: process.env.DATABASE_HOST,
            dialect : process.env.DATABASE_TYPE
        }
    )
}

sequelize.authenticate().then(()=>{
    console.log('Database Connection has been established successfully.');
}).catch ((error) => {
    console.error('Unable to connect to the database:', error);
})

module.exports = sequelize