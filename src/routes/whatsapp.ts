import { Router, Request, Response } from "express";
import { twiml } from "twilio";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { Body, From, ProfileName } = req.body;
  console.log(
    `[Incoming] From: ${From}, Name: ${ProfileName}, Message: ${Body}`
  );

  const messagingResponse = new twiml.MessagingResponse();
  const msg = messagingResponse.message(From);
  const normalizedText = Body?.trim().toLowerCase();

  switch (normalizedText) {
    case "hi":
    case "hello":
      msg.body(
        `Hi ${
          ProfileName || "there"
        } 👋\nHow can I help you today? Type 'menu' to see options.`
      );
      break;

    case "menu":
      msg.body(
        `Here’s what I can do:\n- 'help': Show usage info\n- 'pricing': View our plans\n- 'agent': Talk to a human`
      );
      break;

    case "pricing":
      msg.body(
        "Our pricing starts at $9.99/month. Visit example.com/pricing for details."
      );
      break;

    case "agent":
      msg.body("Sure! I'll connect you to a support agent shortly. 🧑‍💼");
      break;

    default:
      msg.body(
        "Sorry, I didn’t understand that. 🤖\nType 'menu' to see what I can do."
      );
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(messagingResponse.toString());
});

export default router;
