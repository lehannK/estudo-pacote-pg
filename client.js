const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://lehannk:123456@localhost:5432/node_postgres",
});

const query = async (queryString, params, callback) => {
  return pool.query(queryString, params, callback);
};

module.exports = { query };
