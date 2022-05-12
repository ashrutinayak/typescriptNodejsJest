const userModel = (sequelize: any, DataTypes: any) => {
    const user = sequelize.define(
      'user',
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.SMALLINT,
          allowNull: false
        },
        type: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          comment: '0:admin,1:user'
        },
        status: {
            type: DataTypes.SMALLINT,
          allowNull: false,
          comment: '0:inactive,1:active' 
        }
      },
      {}
    )
    return user
  }
  
  export default userModel
  