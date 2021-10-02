const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Data extends Model {}

Data.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    viewers: {
      type: DataTypes.INTEGER
    },
    votes: {
      type: DataTypes.INTEGER
    },
    videos: {
        type: DataTypes.INTEGER
    },
    data_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'data',
  }
);

module.exports = Data;
