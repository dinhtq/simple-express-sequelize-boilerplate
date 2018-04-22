const userTableName = 'user';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(userTableName, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, {
      underscored: true,
    }),
  down: (queryInterface, Sequelize) => {
    console.log('Sequelize', Sequelize);

    return queryInterface.dropTable(userTableName);
  },
};
