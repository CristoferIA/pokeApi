const { DataTypes } = require('sequelize');
const { db } = require('../database/db');

const Pokemon = db.define('pokemon', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('enabled', 'disabled'),
    allowNull: false,
    defaultValue: 'enabled',
  },
});

module.exports = Pokemon;
