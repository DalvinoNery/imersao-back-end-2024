import express from "express";
import routes from "./src/routes/postsRoutes.js";
 

// **Simulando dados de posts (seriam buscados do banco em um cenário real)**
const posts = [
    { id: 1, descricao: "Uma foto", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Um gato fofo", imagem: "https://placekitten.com/400/300" },
    { id: 3, descricao: "Um gato fazendo  panqueca", imagem: "https://placekitten.com/400/300" }
];

// **Criando a aplicação Express**
const app = express();
routes(app);



// **Iniciando o servidor na porta 3000**
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



