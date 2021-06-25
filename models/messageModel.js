module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Message.associate = (models) => {
    Message.hasMany(models.Rooms, {
      onDelete: "cascade",
    })
  }

  return Message
}
