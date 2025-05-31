const jwt = require('jsonwebtoken');

function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }

    jwt.verify(token, 'SEU_SEGREDO_AQUI', (err, usuario) => {
        if (err) return res.status(403).json({ mensagem: 'Token inválido' });
        req.usuario = usuario;
        next();
    });
}

module.exports = autenticarToken;''