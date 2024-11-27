/**
 * API REST para gerenciamento de posts com imagens
 * 
 * Esta aplicação permite:
 * - Listar todos os posts (GET /posts)
 * - Criar novos posts (POST /posts)
 * - Fazer upload de imagens (POST /upload)
 * - Atualizar posts com descrições geradas por IA (PUT /upload/:id)
 * 
 * Funcionalidades principais:
 * - Armazenamento de imagens no servidor local
 * - Integração com MongoDB para persistência dos dados
 * - Geração automática de descrições usando Google Gemini AI
 * - CORS configurado para permitir requisições do frontend (localhost:8000)
 */

import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)
 
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000"); 
    console.log("http://localhost:3000/posts");
});