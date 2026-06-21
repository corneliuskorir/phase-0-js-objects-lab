//Write your code here

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.0,
};

let logAttendeeName = (attendee) => console.log(attendee.name);
let logTicketPrice = (attendee) => console.log(attendee.ticketPrice);
let updateTicketType = (attendee, newTicketType) =>
  (attendee.ticketType = newTicketType);

let updateTicketPrice = (attendee, newTicketPrice) =>
  (attendee.ticketPrice = newTicketPrice);
let removeEventProperty = (attendee) => delete attendee.event;
let addCheckedInProperty = (attendee) => (attendee.checkedIn = true);

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== "undefined" && { attendee }),
  ...(typeof logAttendeeName !== "undefined" && { logAttendeeName }),
  ...(typeof logTicketPrice !== "undefined" && { logTicketPrice }),
  ...(typeof updateTicketType !== "undefined" && { updateTicketType }),
  ...(typeof updateTicketPrice !== "undefined" && { updateTicketPrice }),
  ...(typeof removeEventProperty !== "undefined" && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== "undefined" && { addCheckedInProperty }),
};
