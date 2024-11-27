import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Inicializar o servidor
const app = express();
app.use(express.static("uploads")) // Usar o diretório uploads para armazenar as imagens
routes(app) // Configurar as rotas
 
// Iniciar o servidor em uma porta selecionada
// process.env.PORT é a porta que o servidor vai rodar que é definida no arquivo .env
app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT}`); // Exibir uma mensagem no console indicando que o servidor foi iniciado
  console.log(`http://localhost:${process.env.PORT}/posts`); // URL para acessar o servidor
});