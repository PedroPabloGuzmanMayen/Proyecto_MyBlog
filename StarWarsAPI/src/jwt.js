import jwt from 'jsonwebtoken'

const secret = 'jijijijijajajaja'

const generateToken = (username) => {
    return jwt.sign(username, secret, { expiresIn: '2h', algorithm: 'HS256'})
}

const validateToken = (token) => {
    return jwt.verify(token, secret)
}

export { generateToken, validateToken }
