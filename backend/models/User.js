const Sequelize = require('sequelize') 
const sequelize = require('../config/db') 

const User = sequelize.define('users', { 

	id:{ 
		type:Sequelize.INTEGER, 
		autoIncrement:true, 
		allowNull:false, 
		primaryKey:true
	}, 

	username: { type: Sequelize.STRING, allowNull:false }, 

	email: { type: Sequelize.STRING, allowNull:false }, 

	password: { type: Sequelize.STRING, 
			allowNull:false }

}) 

module.exports = User
