const toDoTableName = 'to_do';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(toDoTableName, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      title: {
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
    }),
  down: (queryInterface, Sequelize) => {
    console.log('Sequelize', Sequelize);

    return queryInterface.dropTable(toDoTableName);
  },
};
