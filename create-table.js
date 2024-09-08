const { query } = require("./client");

const createTable = async () => {
  await query(`CREATE TABLE IF NOT EXISTS "public"."events" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    total_tickets INT NOT NULL,
    sold_tickets INT DEFAULT 0
    );`);

  return console.log("Tabela criada com sucesso!");
};

module.exports = { createTable };
