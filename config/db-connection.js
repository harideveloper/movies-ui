const Knex = require('knex');

// Connecting from Dev tp GCP Postgres SQL
const createTcpPool = async config => {
  console.log("user name is "+process.env.DB_USER)
  console.log("connection name is "+process.env.INSTANCE_CONNECTION_NAME)
  const dbSocketAddr = process.env.DB_HOST.split(':');
  return Knex({
    client: 'pg',
    connection: {
      user: process.env.DB_USER, 
      password: process.env.DB_PASS, 
      database: process.env.DB_NAME, 
      host: dbSocketAddr[0], 
      port: dbSocketAddr[1], 
    },

    ...config,
  });
};

// Connecting from GCP Resource to GCP Postgres SQL
const createUnixSocketPool = async config => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
  return Knex({
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS, 
      database: process.env.DB_NAME, 
      host: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`,
    },
    ...config,
  });
};

// Create connection pool
const createPool = async () => {
  const config = {pool: {}};
  config.pool.max = 5;
  config.pool.min = 5;
  config.pool.acquireTimeoutMillis = 60000; 
  config.pool.createTimeoutMillis = 30000; 
  config.pool.idleTimeoutMillis = 600000; 
  config.pool.createRetryIntervalMillis = 200; // 
  
  if (process.env.DB_HOST) {
      console.log("Connection through HOST"+process.env.DB_HOST)
      return createTcpPool(config);
  } else {
    console.log("Unix socket pool connection !!!")
    return createUnixSocketPool(config);
  }
};


module.exports = { createPool };