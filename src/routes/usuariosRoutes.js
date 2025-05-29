const { executarSQL } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send( await executarSQL("SELECT * FROM usuarios;"));
});

router.get("/:id", (req, res) => {
    res.send(`Busca um usuario com o id: ${req.params.id}`);
});

router.post("/", (req, res) => {
    res.send("Cria um usuario");
});

router.put("/:id", (req, res) => {
    res.send(`Edita um usuario com oo id: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
    res.send(`Apaga um usuario com o id: ${req.params.id}`);
});

module.exports = router;