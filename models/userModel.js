module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Users.associate = (models) => {
    Users.hasMany(models.Rooms, {
      onDelete: "cascade",
      foreignKey: "userId",
      as: "rooms",
    }),
      Users.hasMany(models.Message, {
        onDelete: "cascade",
        foreignKey: "userId",
        as: "message",
      })
  }

  return Users
}
