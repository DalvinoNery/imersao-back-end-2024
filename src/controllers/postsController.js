import getTodosPosts from "../models/postsModel.js";


export async function listar(req, res) {
    // Chamando a função para buscar os posts
    const resultado = await getTodosPosts();
    // Enviando os posts como resposta em formato JSON com status 200 (sucesso)
    res.status(200).json(resultado);
};

