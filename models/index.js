const User = require("./User");
const Post = require("./Post");
const Comment = require("./comment");

User.hasMany(Cpmment, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
module.exports = { User, Post, Comment };
