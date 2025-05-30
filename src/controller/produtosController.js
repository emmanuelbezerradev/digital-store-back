const { executarSQL } = require("../services");
const { PrismaClient } = require("../generated/prisma")
const prisma = new PrismaClient();

async function buscarProdutos() {
    return await prisma.produtos.findMany();
    // return await executarSQL("SELECT * FROM produtos;");
};

async function buscarUmProduto(id) {
    return await prisma.produtos.findUnique({
        where: { produto_id: id }
        // return await executarSQL(SELECT * FROM produtos WHERE produto_id = ${id};
    });
};

async function criarProduto(dados) {
    return await prisma.produtos.create({
        data: {
            produto_nome: dados.produto_nome,
            produto_preco: dados.produto_preco,
            produto_desconto: dados.produto_desconto,
            produto_imagem: dados.produto_imagem,
            marca_id: dados.marca_id,
            categoria_id: dados.categoria_id
        }
    });
    // return await executarSQL(`INSERT INTO produtos (produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco},${dados.produto_desconto},'${dados.produto_imagem}',${dados.marca_id},${dados.categoria_id})`);
};

async function editarProduto(id, dados) {
    return await prisma.produtos.update({
        where: { produto_id: (id) },
        data: {
            produto_nome: dados.produto_nome,
            produto_preco: dados.produto_preco,
            produto_desconto: dados.produto_desconto,
            produto_imagem: dados.produto_imagem,
            marca_id: dados.marca_id,
            categoria_id: dados.categoria_id
        }
    });
    // return await executarSQL(`UPDATE produtos SET produto_nome = '${dados.produto_nome}', produto_preco = ${dados.produto_preco}, produto_desconto = ${dados.produto_desconto}, produto_imagem = '${dados.produto_imagem}', marca_id = ${dados.marca_id}, categoria_id = ${dados.categoria_id} WHERE produto_id = ${id};`);
};

async function apagarProduto(id) {
    return await prisma.produtos.delete({
        where: { produto_id: (id) }
    });
    // return await executarSQL(`DELETE FROM produtos WHERE produto_id = ${id}`)
};

module.exports = {
    buscarProdutos,
    buscarUmProduto,
    criarProduto,
    editarProduto,
    apagarProduto
};

