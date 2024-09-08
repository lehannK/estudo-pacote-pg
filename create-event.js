const { query } = require("./client");

const createEvent = async (name, date, totalTickets) => {
  if (typeof totalTickets !== "number" || totalTickets < 0)
    return console.error("O valor total dos ingressos deve ser maior que 0");

  await query(
    `INSERT INTO events 
    (name, date, total_tickets) VALUES ($1, $2, $3);`,
    [name, date, totalTickets]
  );

  console.log("Evento criado com sucesso!");
};

module.exports = { createEvent };
