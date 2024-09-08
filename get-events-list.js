const { query } = require("./client");

const getEventsList = async () => {
  const { rows } = await query(`
    SELECT 
      id,
      name,
      date,
      total_tickets as "totalTickets",
      sold_tickets as "soldTickets"
    FROM 
      events ORDER BY ID DESC;`);

  return rows;
};

module.exports = { getEventsList };
