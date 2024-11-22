import express from "express";
import multer from "multer";
import {cadastrar, listar, uploadImagem, atualizarPost} from "../controllers/postsController.js";

//**Constante para manter o nome do arquivo que está sendo upado. Configuração no windows */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) =>{
    // **Middleware para interpretar JSON no corpo das requisições**
    app.use(express.json());
    // **Rota para buscar todos os posts**
    app.get("/posts", listar);
    //**Rota para cadastrar um post**
    app.post("/posts", cadastrar)
    //**Rota para cadastrar posts com upload de imagem */
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarPost)
};

export default routes;

