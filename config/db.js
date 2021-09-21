/**
 * Digunakan untuk melakukan configurasi Knex
 */

module.exports ={
    db:require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }
  })
}