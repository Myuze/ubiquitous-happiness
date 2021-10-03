const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameCategory extends Model {}

GameCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    game_category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game_category',
  }
);

module.exports = GameCategory;
