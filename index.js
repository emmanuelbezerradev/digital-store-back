const express = require("express");
const app = express();
const port = 8000;
// PRODUTOS
const usuariosRoutes = require("./src/routes/usuariosRoutes");
const produtosRoutes = require("./src/routes/produtosRoutes");

app.use(express.json());

app.get("/,",(req, res) => {
    res.send("usuarios");
});
app.get("/,",(req, res) => {
    res.send("produtos");
});

app.use("/usuarios", usuariosRoutes);
app.use("/produtos", produtosRoutes);


app.use((req, res) => {
    res.status(404).send("Rota não encotnrada");
});
app.listen(port,() => {
    console.log(`Servidor de pé:http://localhost:${port}`);
    
});
