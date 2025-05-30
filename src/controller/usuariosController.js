const { prisma } = require("../services")

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
        return await prisma.usuarios.create({
            data: dados
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

