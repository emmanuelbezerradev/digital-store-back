const { buscarUmUsuario } = require("../controller/usuariosController");
const { editarUsuario } = require("../controller/usuariosController");
const { apagarUsuario } = require("../controller/usuariosController");
const { criarUsuario } = require("../controller/usuariosController");
const { buscarUsuarios } = require("../controller/usuariosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send( await buscarUsuarios() );
});

router.get("/:id", async (req, res) => {
    res.send( await buscarUmUsuario(req.params.id));
});

router.post("/", async (req, res) => {
    res.send( await criarUsuario(req.body));
});

router.put("/:id", async (req, res) => {
    res.send(await editarUsuario(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.send( await apagarUsuario(req.params.id));
});

module.exports = router;