import {getAllPosts, createPost, updatePost} from "../models/postsModel.js";
import fs from "fs";
import generateDescriptionWithGemini from "../services/geminiService.js"

// Função para listar todos os posts
export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

// Função para criar um novo post
export async function createNewPost(req, res) {
    const newPost = req.body;
    try {
        const createdPost = await createPost(newPost);
        res.status(200).json(createdPost);  
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Error":"Request failed"}) 
    }
}

// Função para fazer upload de uma imagem
export async function uploadImage(req, res) {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const createdPost = await createPost(newPost);
        const updatedImage = `uploads/${createdPost.insertedId}.png`
        fs.renameSync(req.file.path, updatedImage)
        res.status(200).json(createdPost);  
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Error":"Request failed"})
    }
}

// Função para atualizar um post com uma descrição gerada pelo Gemini AI
export async function updateNewPost(req, res) {
    const id = req.params.id;
    const imageUrl = `http://localhost:3000/${id}.png`
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const description = await generateDescriptionWithGemini(imgBuffer)

        // Atualizar o post com a descrição gerada pelo Gemini AI
        const post = {
            imgUrl: imageUrl,
            description: description,
            alt: req.body.alt
        }
        // Atualizar o post na coleção
        const updatedPost = await updatePost(id, post);
        res.status(200).json(updatedPost);  
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Error":"Request failed"});
    }
}