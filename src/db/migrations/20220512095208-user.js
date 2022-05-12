module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      type: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        comment: '0:admin,1:user'
      },
      status: {
          type: Sequelize.SMALLINT,
        allowNull: false,
        comment: '0:inactive,1:active' 
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('user')
  }
}
