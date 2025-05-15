import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import whatsappRoutes from "./routes/whatsapp";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/whatsapp", whatsappRoutes);

app.get("/", (_req, res) => {
  res.send("WhatsApp Chatbot Server Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
