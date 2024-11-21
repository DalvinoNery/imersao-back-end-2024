import fs from "fs";
import {getTodosPosts, salvar} from "../models/postsModel.js";

export async function listar(req, res) {
    // Chamando a função para buscar os posts
    const resultado = await getTodosPosts();
    // Enviando os posts como resposta em formato JSON com status 200 (sucesso)
    res.status(200).json(resultado);
};

export async function cadastrar(req, res) {
    const novoPost = req.body;
    try{
       const postCriado = await  salvar(novoPost); 
       res.status(200).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro" : "Falha na requisição"});
    }
    
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt:""
    };
    
    try{
       const postCriado = await  salvar(novoPost); 
       const imagemAtualizada =`uploads/${postCriado.insertedId}.png`;
       fs.renameSync(req.file.path, imagemAtualizada);
       res.status(200).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro" : "Falha na requisição"});
    }
}    


