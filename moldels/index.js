const User = require("./user")
const Post = require("./post")
const Data = require("./data")

User.hasMany(Post, {
    foreignKey: "author_id",
    onDelete: "CASCADE",
  });
  
Post.belongsTo(User, {
    foreignKey: "author_id",
  });

User.hasOne(Data, {
    foreignKey: "data_id",
    onDelete: "CASCADE"
});

Data.belongsTo(User, {
    foreignKey: "data_id",
    onDelete: "CASCADE"
})

  module.exports = { User, Post, Data };
  