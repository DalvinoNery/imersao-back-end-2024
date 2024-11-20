import express from "express";
import { listar } from "../controllers/postsController.js";


const routes = (app) =>{
    // **Middleware para interpretar JSON no corpo das requisições**
    app.use(express.json());
    // **Rota para buscar todos os posts**
    app.get("/posts", listar);
};

export default routes;

