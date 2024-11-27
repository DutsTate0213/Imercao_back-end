import { MongoClient } from 'mongodb';

export default async function connectToDatabase(connectionString) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(connectionString);
      console.log('Connecting to the MongoDB cluster');
      await mongoClient.connect();
      console.log('Connected to MongoDB');

      return mongoClient;
  } catch (error) {
      console.error('Failed to connect to database', error);
      process.exit();
  }
}