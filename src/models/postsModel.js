import conectarAoBanco from "../config/dbConfig.js";

// **Conectando ao banco de dados**
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// **Função assíncrona para buscar todos os posts do banco de dados**
export default async function getTodosPosts() {
    // Acessando o banco de dados 'imersao_instabytes'
    const db = conexao.db("imersao_instabytes");
    // Acessando a coleção 'posts'
    const colecao = db.collection("posts");
    // Retornando todos os documentos da coleção como um array
    return colecao.find().toArray();
}