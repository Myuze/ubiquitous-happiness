const sequelize = require('../config/connection');
const { Post } = require('../models');

const forumData = require('./forumData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(forumData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
