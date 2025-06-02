
const express = require("express");
const app = express();
const port = 8000;
// PRODUTOS
const usuariosRoutes = require("./src/routes/usuariosRoutes");
const produtosRoutes = require("./src/routes/produtosRoutes");
const loginRoutes = require('./src/routes/loginRoutes');

app.use(express.json());

app.get("/,", (req, res) => {
    res.send("usuarios");
});
app.get("/,", (req, res) => {
    res.send("produtos");
});

app.use("/usuarios", usuariosRoutes);
app.use("/produtos", produtosRoutes);
app.use('/login', loginRoutes);

app.use((req, res) => {
    res.status(404).send("Rota não encotrada");
});
app.listen(port, () => {
    console.log(`Servidor de pé:http://localhost:${port}`);

});

