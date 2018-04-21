const toDoItemTableName = 'to_do_item';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(toDoItemTableName, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      description: {
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
      toDoId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'to_do',
          key: 'id',
          as: 'to_do_id',
        },
      },
    }),
  down: (queryInterface, Sequelize) => {
    console.log('Sequelize', Sequelize);

    return queryInterface.dropTable(toDoItemTableName);
  },
};
