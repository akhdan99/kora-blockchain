/**
 * Digunakan untuk melakukan configurasi Knex
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
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