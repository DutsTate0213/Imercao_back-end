import express from "express";
// import routes from "./src/routes/postsRoutes.js"

const stringConexao = process.env.STRING_CONEXAO;
console.log(stringConexao);


// routes(app)

const app = express();
app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}...`);
});