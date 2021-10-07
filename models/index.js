const User = require('./User');
const Post = require('./Post');
const Data = require('./Data');
const Game = require('./Game');
const GameCategory = require('./GameCategory');
const UserGame = require('./UserGame');
const UserCategory = require('./UserCategory');
const Comment = require('./Comment');

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

// Forum Comments Relationships

User.hasMany(Comment, {
  foreignKey: 'author_id',
})

Comment.belongsTo(User, {
  foreignKey: 'author_id',
})

Post.hasMany(Comment, {
  foreignKey: 'forum_id'
})

Comment.belongsTo(Post, {
  foreignKey: 'forum_id'
})

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

module.exports = { User, Post, Data, Game, GameCategory, Comment };
