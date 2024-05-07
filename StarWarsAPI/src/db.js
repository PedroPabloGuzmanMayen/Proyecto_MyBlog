import conn from './conn.js'

// Con esta función se obtienen todos los posts de la base de datos
export async function getPosts() {
  try {
    const rows = await conn.query('SELECT * FROM posts')
    return rows.rows
  } catch (error) {
    console.error('Error obtienedo posts:', error)
    throw error
  }
}
// Con esta función podemos modificar un post dado su ID
export async function modifyPostByID(id, title, content, image) {
  // Modificar imagen y contenido pero no el título
  try {
    if (title === null && content !== null && image !== null) {
      const res = await conn.query('UPDATE posts SET content = $1, banner = $2 WHERE id = $3', [content, image, id])
      return res.rows
    }
    // Modificar el título y el contenido pero no la imagen
    else if (content !== null && title !== null && image === null) {
      const res = await conn.query('UPDATE posts SET content = $1, title = $2 WHERE id = $3', [title, content, id])
      return res.rows
    }
    // Modificar el título y la imagen pero no el contenido
    else if (content === null && image !== null && title !== null) {
      const res = await conn.query('UPDATE posts SET title = $1, banner = $2 WHERE id = $3', [title, image, id])
      return res.rows
    }
    // Modificar solo el contenido
    else if (content !== null && image === null && title === null) {
      const res = await conn.query('UPDATE posts SET content = $1 WHERE id = $2', [content, id])
      return res.rows
    }
    // Modificar solo el título
    else if (content === null && image === null && title !== null) {
      const res = await conn.query('UPDATE posts SET title = $1 WHERE id = $2', [title, id])
      return res.rows
    }
    // Modificar solo la imagen
    else if (content === null && image !== null && title === null) {
      const res = await conn.query('UPDATE posts SET banner = $1 WHERE id = $2', [image, id])
      return res.rows
    }
    // Modificar todo el post
    else {
      const res = await conn.query('UPDATE posts SET title = $1, content = $2, banner = $3 WHERE id = $4', [title, content, image, id])
      return res.rows
    }
  } catch (error) {
    console.error('Error modificando post post:', error)
    throw error
  }
}
// Con esta función se crea un nuevo post, se deben verificar los valores que se desean modificar
export async function newPost(title, content, image, author) {
  try {
    const rows = await conn.query('INSERT INTO posts (title, content, banner, author) VALUES ($1, $2, $3, $4)', [title, content, image, author])
    return rows.rows
  } catch (error) {
    console.error('Error creando post:', error)
    throw error
  }
}

// Con esta función se obtiene un post dado su ID
export async function getPostbyID(id) {
  try {
    const result = await conn.query('SELECT * FROM posts WHERE id = $1', [parseInt(id)])
    return result.rows
  } catch (error) {
    console.error('Error obteniendo post:', error)
    throw error
  }
}
// Con esta función se elimina un post dado su ID
export async function deletePost(id) {
  try {
    const res = await conn.query('DELETE FROM posts WHERE id = $1', [parseInt(id)])
    return res.rows
  } catch (error) {
    console.error('Error eliminando post:', error)
    throw error
  }
}

//Esta función sirve para el login

export async function login(username, password) {
  const res = await conn.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password])
  if (res.rows.length === 1) {
    return res.rows
  }
  else {
    return false
  }

}

//Esta función sirve para registrar nuevos usuarios en la app

export async function register(username, password) {

    const res = await conn.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password])
    return res.rows
}

//Función que obtiene los posts de un usuario dado su username
export async function getUserPosts(username) {
  try {
    const res = await conn.query('SELECT * FROM posts WHERE author = $1', [username])
    return res.rows
  } catch (error) {
    console.error('Error obteniendo posts:', error)
    throw error
  }
}