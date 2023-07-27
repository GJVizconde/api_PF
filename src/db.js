const { Sequelize } = require('sequelize');
require('dotenv').config();

const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');
const RatingModel = require('./models/Rating');
const GalleryModel = require('./models/Gallery');
const PostModel = require('./models/Post');
const CommentModel = require('./models/Comment');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dealupdb`,
  {
    logging: false,
    native: false,
    charset: 'utf8mb4',
    define: {
      validate: true,
    },
  }
);

// const sequelize = new Sequelize(DB_DEPLOY,
// {
//   logging: false,
//   native: false,
//   charset: 'utf8mb4',
// }
// );

UserModel(sequelize);
ProjectModel(sequelize);
RatingModel(sequelize);
PostModel(sequelize);
CommentModel(sequelize);

const { User, Project, Rating, Gallery, Comment, Post } = sequelize.models;

//relacion de tablas
User.belongsToMany(Project, { through: "user_project" });
Project.belongsToMany(User, { through: "user_project" });


// Rating.hasMany(User,{ foreignKey:"ratingId" });
// User.belongsTo(Rating);

// Project.hasMany(Rating, { foreignKey: 'projectId' });
// Rating.belongsTo(Project);

//relacion tabla post-comment
// Post.hasMany(Comment, { as:'comment', foreignKey: 'postId'});
// Comment.belongsTo(Post, { as:'user', foreignKey: 'postId'});
Post.hasMany(Comment, { foreignKey: 'postId'});
Comment.belongsTo(Post, { foreignKey: 'postId'});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
