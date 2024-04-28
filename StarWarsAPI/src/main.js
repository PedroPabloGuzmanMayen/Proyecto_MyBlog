import conn from './conn.js'

console.log(await conn.query('SELECT * FROM posts'))