const User = require('./User')
const Post = require('./Post')
const Data = require('./Data');
const Game = require('./Game');

User.hasMany(Post, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
  });
  
Post.belongsTo(User, {
    foreignKey: 'author_id',
  });

User.hasOne(Data, {
    foreignKey: 'data_id',
    onDelete: "CASCADE"
});

Data.belongsTo(User, {
    foreignKey: "data_id",
    onDelete: "CASCADE"
})

User.hasMany(Game, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE'
})

Game.belongsTo(User, {
  foreignKey: 'game_id'
})

  module.exports = { User, Post, Data };
  