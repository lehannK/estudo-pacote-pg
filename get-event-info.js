const { query } = require("./client");

const getEventInfo = async (eventId) => {
  const { rows, rowCount } = await query(
    `SELECT * FROM events WHERE id = $1;`,
    [eventId]
  );

  if (rowCount === 0) {
    console.log(`Nenhum evento com id:"${eventId}" foi encontrado`);
    return false;
  }

  return rows[0];
};

module.exports = getEventInfo;
