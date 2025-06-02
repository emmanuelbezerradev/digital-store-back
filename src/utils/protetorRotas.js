const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || '1234';

function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }

    jwt.verify(token, JWT_SECRET, (err, usuario) => {
        if (err) return res.status(403).json({ ...err });
        req.usuario = usuario;
        next();
    });
}


module.exports = autenticarToken;
