import express from "express";
import multer from "multer";
import { listPosts, createNewPost, uploadImage, updateNewPost } from "../controllers/postsController.js";
import cors from "cors";

// Configuração do cors para permitir requisições do frontend
const corsOptions = {
  origin: "http://localhost:8000", // URL do frontend
  optionsSuccessStatus: 200
}

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Configuração das rotas
const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions))
  app.get("/posts", listPosts); // Listar todos os posts
  app.post("/posts", createNewPost); // Criar um novo post
  app.post("/upload", upload.single("image"), uploadImage); // Fazer upload de uma imagem
  app.put("/upload/:id", updateNewPost) // Atualizar um post com uma descrição gerada pelo Gemini AI
};

export default routes;