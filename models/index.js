const User = require('./User');
const Post = require('./Post');
const Data = require('./Data');
const Game = require('./Game');
const GameCategory = require('./GameCategory');
const UserGame = require('./UserGame');
const UserCategory = require('./UserCategory');

// Forum Post Relationships
User.hasMany(Post, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
  });
  
Post.belongsTo(User, {
    foreignKey: 'author_id',
  });

User.hasOne(Data, {
    foreignKey: 'data_id',
    onDelete: 'CASCADE'
});

Data.belongsTo(User, {
    foreignKey: 'data_id',
    onDelete: 'CASCADE'
});

// Game Category Relationships
User.belongsToMany(Game, {
  through: {
    model: UserGame,
    unique: false
  }
});

Game.belongsToMany(User, {
  through: {
    model: UserGame,
    unique: false
  }
});

Game.belongsToMany(GameCategory, {
  through: {
    model: UserCategory,
    unique: false
  }
});

GameCategory.belongsToMany(Game, {
  through: {
    model: UserCategory,
    unique: false
  }
});

module.exports = { User, Post, Data, Game, GameCategory };
