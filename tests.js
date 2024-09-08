const { createTable } = require("./create-table");
const { createEvent } = require("./create-event");
const { getEventsList } = require("./get-events-list");
const { getEventByName } = require("./get-event-by-name");
const { getEventsByDate } = require("./get-events-by-date");
const { sellTickets } = require("./sell-tickets");

const test = async () => {
  await createTable();

  await createEvent("TESTE", new Date("2010-10-15"), 1000);

  await getEventsList().then((res) => console.log(res));

  await getEventByName("Rock in Rio").then((res) => console.log(res));

  await getEventsByDate(new Date("2025-10-15")).then((res) => console.log(res));

  await sellTickets(9).then((res) => console.log(res));

  process.exit(0);
};

test();
