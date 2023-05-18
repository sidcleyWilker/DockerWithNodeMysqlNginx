const Sequelize = require("sequelize")

const sequelize = new Sequelize("nodedb","root","root",{
    host: "db",
    dialect: "mysql",
    define: {
        timestamps: false
    }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize, sequelize
}


// const config = {
//     host: 'db',
//     user: 'root',
//     password: 'root',
//     database:'nodedb'
// };
// const mysql = require('mysql')
// const connection = mysql.createConnection(config)

// const sql = `INSERT INTO people(name) values('novo user )`
// connection.query(sql)
// connection.end()