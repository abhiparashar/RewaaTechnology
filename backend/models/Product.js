const Sequelize = require('sequelize') 

const sequelize = require('../config/db') 

const Product = sequelize.define('products', { 

	id:{ 
		type:Sequelize.INTEGER,
		autoIncrement:true, 
		allowNull:false, 
		primaryKey:true
	},

	name: { type: Sequelize.STRING, allowNull:false }, 

    price: { type:Sequelize.INTEGER, allowNull:false }, 
    
    description: { type:Sequelize.STRING, allowNull:false }, 

	quantity: { type: Sequelize.INTEGER, 
			defaultValue: 0 }, 

}) 

module.exports = Product
