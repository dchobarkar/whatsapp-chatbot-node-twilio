import { Router, Request, Response } from "express";
import { twiml } from "twilio";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const messagingResponse = new twiml.MessagingResponse();
  const incomingMsg = req.body.Body;
  console.log("Incoming Message:", incomingMsg);

  messagingResponse.message("Hello from your WhatsApp bot!");
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(messagingResponse.toString());
});

export default router;
