import 'dotenv/config';
import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js"

// Conexão com o banco de dados
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

// Listar todos os posts
export async function getAllPosts() {

    const db = connection.db("fruits_db"); // Conexão com o banco de dados

    const collection = db.collection("posts"); // Coleção de posts

    return collection.find().toArray(); // Encontrar todos os posts na coleção
}

// Criar um novo post
export async function createPost(newPost) {
    const db = connection.db("fruits_db"); // Conexão com o banco de dados
    const collection = db.collection("posts"); // Coleção de posts
    return collection.insertOne(newPost); // Inserir o novo post na coleção
}

// Atualizar um post com uma descrição gerada pelo Gemini AI
export async function updatePost(id, newPost) {
    const db = connection.db("fruits_db"); // Conexão com o banco de dados
    const collection = db.collection("posts"); // Coleção de posts
    const objID = ObjectId.createFromHexString(id); // Criar um ObjectId a partir do id
    return collection.updateOne({_id: new ObjectId(objID)}, {$set:newPost}); // Atualizar o post na coleção
}