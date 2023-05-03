//imports the model and datatypes modules from sequelize
const { Model, DataTypes } = require("sequelize");

//this imports the connection instance from the cofig/connection.js file
const sequelize = require("../config/connection.js");

//defines the category model by extending the model class
class Category extends Model {}

Category.init(
  {
    // defines the columns and category models schema by using init()
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);
//exports the category model so it can be used globally in other files
module.exports = Category;
