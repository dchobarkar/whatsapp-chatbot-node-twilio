import { Router, Request, Response } from "express";
import { twiml } from "twilio";

import commandRouter from "../utils/commandRouter";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { Body, ProfileName } = req.body;

  const replyText = await commandRouter(Body, ProfileName);

  const messagingResponse = new twiml.MessagingResponse();
  const msg = messagingResponse.message(replyText.body);
  if (replyText.mediaUrl) msg.media(replyText.mediaUrl);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(messagingResponse.toString());
});

export default router;
