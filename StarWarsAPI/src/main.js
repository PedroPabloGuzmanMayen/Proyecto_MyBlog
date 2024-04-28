import conn from './conn.js'

async function getPosts() {
  try {
    const [rows] = await conn.query('SELECT * FROM posts')
    return rows
  } catch (error) {
    console.error('Error obtienedo posts:', error)
    throw error
  }
}
console.log(await getPosts())