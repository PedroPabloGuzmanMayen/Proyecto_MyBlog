import conn from './conn.js'

// Con esta función se obtienen todos los posts de la base de datos
export async function getPosts() {
  try {
    const [rows] = await conn.query('SELECT * FROM posts;')
    return rows
  } catch (error) {
    console.error('Error obtienedo posts:', error)
    throw error
  }
}
// Con esta función podemos modificar un post dado su ID
export async function modifyPostByID(id, title, content, image) {
  // Modificar imagen y contenido pero no el título
  try {
    if (title === '' && content !== '' && image !== '') {
      const [res] = await conn.query('UPDATE posts SET content = ?, banner = ? WHERE id = ?', [content, image, id])
      return res
    }
    // Modificar el título y el contenido pero no la imagen
    if (content !== '' && title !== '' && image === '') {
      const [res] = await conn.query('UPDATE posts SET content = ?, title = ? WHERE id = ?', [title, content, id])
      return res
    }
    // Modificar el título y la imagen pero no el contenido
    if (content === '' && image !== '' && title !== '') {
      const [res] = await conn.query('UPDATE posts SET title = ?, banner = ? WHERE id = ?', [title, image, id])
      return res
    }
    // Modificar solo el contenido
    if (content !== '' && image === '' && title === '') {
      const [res] = await conn.query('UPDATE posts SET content = ? WHERE id = ?', [content, id])
      return res
    }
    // Modificar solo el título
    if (content === '' && image === '' && title !== '') {
      const [res] = await conn.query('UPDATE posts SET title = ? WHERE id = ?', [title, id])
      return res
    }
    // Modificar solo la imagen
    if (content === '' && image !== '' && title === '') {
      const [res] = await conn.query('UPDATE posts SET banner = ? WHERE id = ?', [image, id])
      return res
    }
    // Modificar todo el post

    const [res] = await conn.query('UPDATE posts SET title = ?, content = ?, banner = ? WHERE id = ?', [title, content, image, id])
    return res
  } catch (error) {
    console.error('Error modificando post post:', error)
    throw error
  }
}
// Con esta función se crea un nuevo post, se deben verificar los valores que se desean modificar
export async function newPost(title, content, image, author) {
  try {
    const [rows] = await conn.query('INSERT INTO posts (title, content, banner, author) VALUES (?, ?, ?, ?)', [title, content, image, author])
    return rows
  } catch (error) {
    console.error('Error creando post:', error)
    throw error
  }
}

// Con esta función se obtiene un post dado su ID
export async function getPostbyID(id) {
  try {
    const [result] = await conn.query('SELECT * FROM posts WHERE id = ?', [id])
    return result
  } catch (error) {
    console.error('Error obteniendo post:', error)
    throw error
  }
}
// Con esta función se elimina un post dado su ID
export async function deletePost(id) {
  try {
    const [res] = await conn.query('DELETE FROM posts WHERE id = ?', [id])
    return res
  } catch (error) {
    console.error('Error eliminando post:', error)
    throw error
  }
}