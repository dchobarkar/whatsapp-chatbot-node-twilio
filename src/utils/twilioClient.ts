import { config } from "dotenv";
import { Twilio } from "twilio";

config();

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export default client;
