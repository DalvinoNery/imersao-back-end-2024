import express from "express";
import routes from "./src/routes/postsRoutes.js";

// **Criando a aplicação Express**
const app = express();
app.use(express.static("uploads"))
routes(app);



// **Iniciando o servidor na porta 3000**
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



