module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_image: {
      type: DataTypes.STRING,
    },
    total_orders: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
    },
    last_logged_in: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  });
  return Users;
};
