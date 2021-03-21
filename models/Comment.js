const { Model,DataTypes,Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
Comment.init(
    {

    text: {
        type:DataTypes.STRING,
        allowNull: false,
    },

   },
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment'
  }
)
module.exports = Comment;         