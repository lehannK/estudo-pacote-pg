const { query } = require("./client");
const getEventInfo = require("./get-event-info");

const sellTickets = async (eventId) => {
  const result = await getEventInfo(eventId);

  if (!result) return;

  const {
    total_tickets: totalTickets,
    sold_tickets: soldTickets,
    date,
  } = result;

  if (soldTickets === totalTickets)
    return console.log(`Não há mais ingressos disponíveis para este evento`);

  if (new Date() >= new Date(date)) return console.log(`Este evento já passou`);

  const updatedSoldTickets = soldTickets + 1;
  const updatedTotalTickets = totalTickets - 1;

  await query(
    `
    UPDATE events 
    SET 
      "sold_tickets" = $1, 
      "total_tickets" = $2 
    WHERE id = $3;`,
    [updatedSoldTickets, updatedTotalTickets, eventId]
  );

  const newResult = await getEventInfo(eventId);
  const {
    total_tickets: newTotalTicketsValue,
    sold_tickets: newSoldTicketsValue,
  } = newResult;

  console.log(`Ingresso vendido com sucesso!
Evento: ${eventId}
Ingressos disponíveis: ${newTotalTicketsValue}
Ingressos vendidos: ${newSoldTicketsValue}`);
};

module.exports = { sellTickets };
