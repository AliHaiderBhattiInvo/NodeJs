"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cnic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }

  // Cnic.hasOne(userModel, {foreignKey: 'id'});

  Cnic.init(
    {
      user_id: DataTypes.INTEGER,
      id_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cnic",
    }
  );
  return Cnic;
};
