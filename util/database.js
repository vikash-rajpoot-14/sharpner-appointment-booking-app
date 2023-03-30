const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookingapp', 'root', 'Minato@123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;