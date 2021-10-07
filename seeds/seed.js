const sequelize = require('../config/connection');
const { User, Game, GameCategory, Post, Comment } = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');
const GameCategoryData = require('./gameCategoryData.json');
const forumData = require('./forumData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Game.bulkCreate(gameData, {
    individualHooks: true,
    returning: true,
  });

  await GameCategory.bulkCreate(GameCategoryData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(forumData, {
    individualHooks: true,
    returning: true,
  });
  
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
