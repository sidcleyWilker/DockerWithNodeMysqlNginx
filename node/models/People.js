const db = require("./db")

const People = db.sequelize.define('people', {
    id:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING
    }
})

module.exports = People