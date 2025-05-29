const express = require("express");
const app = express();
const port = 8000;
// PRODUTOS
const usuariosRoutes = require("./src/routes/usuariosRoutes");
const produtosRoutes = require("./src/routes/produtosRoutes");

app.get("/,",(red, res) => {
    res.send("produtos");
});
app.use("/produtos", produtosRoutes);
app.use((req, res) => {
    res.status(404).send("Rota não encotnrada");
});
app.listen(port,() => {
    console.log(`Servidor de pé:http://localhost:${port}`);
    
});

// USUARIOS
app.get("/", (req, res) => {
    res.send("olá mundo");
});

app.use("/usuarios", usuariosRoutes);

app.use((req,res) => {
    res.status(404).send("Rota não encontrada");
});

app.listen(port, () => {
    console.log(`Servidor de pé: http://localhost:${port}`);    
});
