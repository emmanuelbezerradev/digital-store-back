const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { prisma } = require('../services');

const JWT_SECRET = process.env.JWT_SECRET; // Troque por uma chave segura e coloque no .env

router.post('/', async (req, res) => {
    const { usuario_email, usuario_senha } = req.body;

    // Busca o usuário pelo email
    const usuario = await prisma.usuarios.findUnique({
        where: { usuario_email }
    });

    if (!usuario) {
        return res.status(401).json({ mensagem: 'Usuário ou senha inválidos' });
    }

    // Compara a senha
    const senhaValida = await bcrypt.compare(usuario_senha, usuario.usuario_senha);
    if (!senhaValida) {
        return res.status(401).json({ mensagem: 'Usuário ou senha inválidos' });
    }

    // Gera o token
    const token = jwt.sign(
        { usuario_id: usuario.usuario_id },
        JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
});

module.exports = router;