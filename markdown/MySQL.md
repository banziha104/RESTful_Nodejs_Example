# MySQL 연동

- Connection  

```javascript
const Sequelize = require('sequelize')
const sequlize = new Sequelize('nodeTest', 'root', '1234',
  {
    host: 'localhost',
    port : 3306,
    dialect: 'mysql'
  }
)

```

- Schema 정의

```javascript
const Orm = sequlize.define('sqlTest', {
  user_num: {
    type: Sequelize.INTEGER,
  },
  user_name: {
    type: Sequelize.STRING
  }
})

module.exports = Orm
```

- CRUD

```javascript
router.get('/', (req, res) => {
  conn.findAll().then((log) => console.log(log))
  res.send("DB에서 불러오기")
})

router.post('/', (req, res) => {
  conn.create({user_num : 30, user_name : "LeeYoungJoon"})
  res.send('DB에 넣기')
})
```