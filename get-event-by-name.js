const { query } = require("./client");

const getEventByName = async (name) => {
  const { rows, rowCount } = await query(
    `SELECT * FROM events WHERE name = $1;`,
    [name]
  );

  if (rowCount === 0)
    return console.log("Nenhum evento com este nome foi encontrado...");

  return rows[0];
};

module.exports = { getEventByName };
