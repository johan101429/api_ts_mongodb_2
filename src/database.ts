import { connect, ConnectOptions } from 'mongoose';

interface CustomConnectOptions extends ConnectOptions {
  // Otras opciones si es necesario
}

export async function startConnection() {
  const options: CustomConnectOptions = {
    // Otras opciones si es necesario
  };

  try {
    const connection = await connect('mongodb://localhost:27017/photo-gallery-db', options);
    console.log('Connected to MongoDB');
    
    // Ahora, puedes acceder a la base de datos y otras propiedades si es necesario
    const dbName = connection.connections[0].name;
    console.log(`Connected to MongoDB: ${dbName}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
