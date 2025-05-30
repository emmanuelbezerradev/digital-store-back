const { executarSQL } = require("../services");
const { PrismaClient } = require("../generated/prisma")
const prisma = new PrismaClient();

async function buscarUsuarios() {
    return await prisma.usuarios.findMany();
    // return await executarSQL("SELECT * FROM usuarios;");
};

async function buscarUmUsuario(id) {
    return await prisma.usuarios.findUnique({
        where: { usuario_id: id }
        // return await executarSQL(SELECT * FROM usuarios WHERE usuario_id = ${id};
    });
};

async function criarUsuario(dados) {
    return await prisma.usuarios.create({
        data: {
            usuario_nome: dados.usuario_nome,
            usuario_email: dados.usuario_email,
            usuario_senha: dados.usuario_senha,
            usuario_telefone: dados.usuario_telefone,
            usuario_cpf: dados.usuario_cpf,
            endereco_id: dados.endereco_id
        }
    });
    // return await executarSQL(`INSERT INTO usuarios (produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco},${dados.produto_desconto},'${dados.produto_imagem}',${dados.marca_id},${dados.categoria_id})`);
};

async function editarUsuario(id, dados) {
    return await prisma.usuarios.update({
        where: { usuario_id: (id) },
        data: {
            usuario_nome: dados.usuario_nome,
            usuario_email: dados.usuario_email,
            usuario_senha: dados.usuario_senha,
            usuario_telefone: dados.usuario_telefone,
            usuario_cpf: dados.usuario_cpf,
            endereco_id: dados.endereco_id
        }
    });
    // return await executarSQL(`UPDATE usuarios SET usuario_nome = '${dados.produto_nome}', produto_preco = ${dados.produto_preco}, produto_desconto = ${dados.produto_desconto}, produto_imagem = '${dados.produto_imagem}', marca_id = ${dados.marca_id}, categoria_id = ${dados.categoria_id} WHERE usuario_id = ${id};`);
};

async function apagarUsuario(id) {
    return await prisma.usuarios.delete({
        where: { usuario_id: (id) }
    });
    // return await executarSQL(`DELETE FROM usuarios WHERE usuario_id = ${id}`)
};

module.exports = {
    buscarUsuarios,
    buscarUmUsuario,
    criarUsuario,
    editarUsuario,
    apagarUsuario
};

