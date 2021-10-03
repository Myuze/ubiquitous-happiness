const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_image_URL: {
      type: DataTypes.STRING
    },
    game_video_URL: {
      type: DataTypes.STRING
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
    modelName: 'game',
  }
);

module.exports = Game;
