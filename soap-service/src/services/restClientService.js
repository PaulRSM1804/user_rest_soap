const axios = require('axios');

async function createUser(args) {
  try {
    const response = await axios.post('http://localhost:8080/api/users', {
      email: args.email,
      nombre: args.nombre,
      password: args.password,
      rol: args.rol,
    });

    return response.data;
  } catch (error) {
    console.error('Error calling REST API:', error);
    throw error;
  }
}

async function getUser(args) {
  try {
    const response = await axios.get(`http://localhost:8080/api/users/${args.id}`);

    return response.data;
  } catch (error) {
    console.error('Error calling REST API:', error);
    throw error;
  }
}

async function updateUser(args) {
  try {
    const response = await axios.put(`http://localhost:8080/api/users/${args.id}`, {
      email: args.email,
      nombre: args.nombre,
      password: args.password,
      rol: args.rol,
    });

    return response.data;
  } catch (error) {
    console.error('Error calling REST API:', error);
    throw error;
  }
}

async function deleteUser(args) {
  try {
    const response = await axios.delete(`http://localhost:8080/api/users/${args.id}`);

    return response.data;
  } catch (error) {
    console.error('Error calling REST API:', error);
    throw error;
  }
}


// Define aquí otras funciones para consumir la API REST si es necesario

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
  // Exporta otras funciones aquí
};
