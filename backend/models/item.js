const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  tableName: 'items',
  timestamps: false,
});

module.exports = Item;