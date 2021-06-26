module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define("Rooms", {
    initiator: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chatWith: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Rooms.associate = (models) => {
    Rooms.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user",
    }),
      Rooms.hasMany(models.Message, {
        foreignKey: "roomId",
        as: "message",
      })
  }

  return Rooms
}
