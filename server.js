import express from "express";

const posts = [
      { id: 1, descricao: "Uma foto", imagem: "https://placecats.com/millie/300/150" },
      { id: 2, descricao: "Um gato fofo", imagem: "https://placekitten.com/400/300" },
      { id: 3, descricao: "Um gato fazendo  panqueca", imagem: "https://placekitten.com/400/300" }
  ];

const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log("Servidor escutando...");
});

app.get("/posts", (rec, res)=>{
    res.status(200).json(posts);
});

function buscarPostPodID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    })
};

app.get("/posts/:id", (rec, res)=>{
    const index = buscarPostPodID(rec.params.id);
    res.status(200).json(posts[index]);
});