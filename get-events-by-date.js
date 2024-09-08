const { query } = require("./client");

const getEventsByDate = async (date) => {
  const { rows, rowCount } = await query(
    `SELECT * FROM events WHERE date = $1;`,
    [date]
  );

  if (rowCount === 0)
    return console.log("Nenhum evento para esta data foi encontrado...");

  return rows[0];
};

module.exports = { getEventsByDate };
