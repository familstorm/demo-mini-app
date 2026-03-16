'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('localizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        unique: true,
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      languageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addIndex('localizations', ['key', 'languageId', 'value'])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('localizations');
  }
};