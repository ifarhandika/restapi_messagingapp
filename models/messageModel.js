module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Message.associate = (models) => {
    Message.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user",
    }),
      Message.belongsTo(models.Rooms, {
        foreignKey: "roomId",
        as: "rooms",
      })
  }

  return Message
}
