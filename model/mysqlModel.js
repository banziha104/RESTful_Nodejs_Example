const Sequelize = require('sequelize')
const sequlize = new Sequelize('nodeTest', 'root', '1234',
  {
    host: 'localhost',
    port : 3306,
    dialect: 'mysql'
  }
)

const Orm = sequlize.define('sqlTest', {
  user_num: {
    type: Sequelize.INTEGER,
  },
  user_name: {
    type: Sequelize.STRING
  }
})

module.exports = Orm