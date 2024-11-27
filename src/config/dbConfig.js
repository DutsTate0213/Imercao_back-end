import { MongoClient } from 'mongodb';

// Função para conectar ao banco de dados
export default async function connectToDatabase(connectionString) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(connectionString); // Criar uma nova conexão com o banco de dados
      console.log('Connecting to the MongoDB cluster');
      await mongoClient.connect(); // Conectar ao banco de dados
      console.log('Connected to MongoDB');

      return mongoClient; // Retornar a conexão com o banco de dados
  } catch (error) {
      console.error('Failed to connect to database', error); // Exibir um erro caso a conexão falhe
      process.exit();
  }
}