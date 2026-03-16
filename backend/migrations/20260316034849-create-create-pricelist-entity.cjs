'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pricelists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      articleNo: {
        unique: true,
        allowNull: false,
        type: Sequelize.BIGINT
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      inStock: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      description: {
        type: Sequelize.STRING
      },
      unitId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'units',
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

    await queryInterface.addIndex('pricelists', ['article_no', 'name'])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pricelists');
    await queryInterface.removeIndex('pricelists', ['article_no', 'name'])
  }
};
