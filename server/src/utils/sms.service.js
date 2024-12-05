// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

const accountSid = "AC74e07a59879611d14837ec0b16c5a4ce";
const authToken = "05fa3d42cf11dbb516338f92c41a951f";
import pkg from "twilio";
const client = pkg(accountSid, authToken);
export const sendWhatsAppmessage = ({ message }) => {
  client.messages
    .create({
      body: message,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+971509961569",
    })
    .then((message) => console.log(message.sid));
};
// .done();

// const accountSid = 'AC74e07a59879611d14837ec0b16c5a4ce';
// const authToken = '05fa3d42cf11dbb516338f92c41a951f';
// const client = require('twilio')(accountSid, authToken);





/**
* @description for setting up the initial whatsapp message
Send a WhatsApp message
Use WhatsApp and send a message from your device to
WhatsApp logo+1 415 523 8886

with code
 
join adjective-practical


*/

