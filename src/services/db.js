import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
  user: 'mohamad',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'users-auth',
});

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};

export default { pool, query };
