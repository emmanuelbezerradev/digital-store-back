const { buscarProdutos, buscarUmProduto, criarProduto, editarProduto, apagarProduto } = require("../controller/produtosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send( await buscarProdutos() );
});

router.get("/:id", async (req, res) => {
    res.send( await buscarUmProduto(req.params.id));
});

router.post("/", async (req, res) => {
    res.send(await criarProduto(req.body));
});

// router.put("/:id", (req, res) => {
//     res.send(`Edita um produto com o id: ${req.params.id}`);
// });
router.put("/:id", async (req, res) => {
    res.send(await editarProduto(req.params.id, req.body));
});
router.put("/:id", (req, res) => {
    res.send(`Edita um produto com o id: ${req.params.id}`);
});
router.delete("/:id", async (req,res) => {
    res.send(await apagarProduto(req.params.id));
})
router.delete("/:id", (req, res) => {
    res.send(`Apaga um produto com o id: ${req.params.id}`);
});

module.exports = router;