const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserCategory extends Model {}

UserCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    game_category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game_category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_category',
  }
);

module.exports = UserCategory;
