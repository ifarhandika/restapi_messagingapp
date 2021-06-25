module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define("Rooms", {
    initiator: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  

  //   Users.associate = (models) => {
  //     Users.hasMany(models.Posts)
  //   }

  return Rooms
}
