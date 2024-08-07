const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'proyecto',
  password: 'admin',
  port: 5432,
});

async function createServiceRequest(args) {
  if (!args || !args.descripcion) {
    throw new Error('Invalid arguments');
  }

  const { descripcion, estado, fecha_creacion, fecha_actualizacion, usuario_id } = args;
  const result = await pool.query(
    'INSERT INTO service_request (descripcion, estado, fecha_creacion, fecha_actualizacion, usuario_id) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    [descripcion, estado || 'Pending', fecha_creacion || new Date(), fecha_actualizacion || new Date(), usuario_id || 1]
  );
  return { id: result.rows[0].id };
}

async function getServiceRequests() {
  const result = await pool.query('SELECT * FROM service_request');
  console.log('Database query result:', result.rows); // Agrega este log para depuración
  return result.rows;
}

async function getServiceRequest(args) {
  if (!args || !args.id) {
    throw new Error('Invalid arguments');
  }

  const { id } = args;
  const result = await pool.query('SELECT * FROM service_request WHERE id = $1', [id]);
  if (result.rows.length === 0) {
    throw new Error('Service request not found');
  }
  return result.rows[0];
}

async function updateServiceRequest(args) {
  if (!args || !args.id || !args.descripcion || !args.estado) {
    throw new Error('Invalid arguments');
  }

  const { id, descripcion, estado, fecha_actualizacion } = args;
  await pool.query(
    'UPDATE service_request SET descripcion = $1, estado = $2, fecha_actualizacion = $3 WHERE id = $4',
    [descripcion, estado, fecha_actualizacion || new Date(), id]
  );
  return { message: 'Service request updated successfully' };
}

async function deleteServiceRequest(args) {
  if (!args || !args.id) {
    throw new Error('Invalid arguments');
  }

  const { id } = args;
  await pool.query('DELETE FROM service_request WHERE id = $1', [id]);
  return { message: 'Service request deleted successfully' };
}

module.exports = {
  createServiceRequest,
  getServiceRequests,
  getServiceRequest,
  updateServiceRequest,
  deleteServiceRequest,
};
