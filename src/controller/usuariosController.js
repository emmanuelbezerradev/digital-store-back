const { prisma } = require("../services")
const bcrypt = require('bcrypt');

async function buscarUsuarios() {
    try {
        return await prisma.usuarios.findMany();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
};

async function buscarUmUsuario(id) {
    try {
        return await prisma.usuarios.findUnique({
            where: {
                usuario_id: Number(id)
            }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
};

async function criarUsuario(dados) {
    try {
        // Criptografa a senha antes de salvar
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds);

        // Cria o usuário com a senha criptografada
        return await prisma.usuarios.create({
            data: {
                ...dados,
                usuario_senha: senhaCriptografada
            }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
   
};

async function editarUsuario(id, dados) {
    try {
        return await prisma.usuarios.update({
            where: { usuario_id: Number(id) },
            data: dados
        })
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
}

async function apagarUsuario(id) {
    return await prisma.usuarios.delete({
        where: { usuario_id: Number(id) }
    });
};

module.exports = {
    buscarUsuarios,
    buscarUmUsuario,
    criarUsuario,
    editarUsuario,
    apagarUsuario
};

