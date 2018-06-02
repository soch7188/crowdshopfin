const Sequelize = require('sequelize');
const config = require('./database')

const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
			// For Korean support
			charset: 'utf8',
			collate: 'utf8_general_ci',

        timezone: '+08:00', //here you can pass timezone

      logging: config.mysql.logging,
      host: config.mysql.host,
      dialect: 'mysql',

      define: {
          // don't add the timestamp attributes (updatedAt, createdAt)
          timestamps: true,

          // don't delete database entries but set the newly added attribute deletedAt
          // to the current date (when deletion was done). paranoid will only work if
          // timestamps are enabled
          paranoid: false,

          // don't use camelcase for automatically added attributes but underscore style
          // so updatedAt will be updated_at
          underscored: false,

          // disable the modification of tablenames; By default, sequelize will automatically
          // transform all passed model names (first parameter of define) into plural.
          // if you don't want that, set the following
          freezeTableName: false,
      }
    }
);

const User = sequelize.define('user', {
    user_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	fin_account_number: Sequelize.STRING,
});

const Item = sequelize.define('item', {
	item_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
	category: Sequelize.STRING,
	name: Sequelize.STRING,
	description: Sequelize.STRING,
	due_date: Sequelize.STRING,
	total_revenue: Sequelize.INTEGER,
	total_refund: Sequelize.INTEGER,
	total_buyer: Sequelize.INTEGER,
	successful_sale: Sequelize.INTEGER
});

const BuyOrder = sequelize.define('buy_order', {
	buy_order_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
	buyer_user_id: Sequelize.INTEGER,
	product_id: Sequelize.INTEGER,
	buy_price: Sequelize.INTEGER
});

const SellOrder = sequelize.define('sell_order', {
    sell_order_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    seller_user_id: Sequelize.INTEGER,
    product_id: Sequelize.INTEGER,
	sell_price: Sequelize.INTEGER,
});

const Transaction = sequelize.define('transaction', {
	txn_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},

});

module.exports = {
    sequelize,
	User,
    Item,
    BuyOrder,
	SellOrder,
	Transaction
};
