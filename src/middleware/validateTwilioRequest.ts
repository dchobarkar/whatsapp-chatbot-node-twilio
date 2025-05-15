import { Request, Response, NextFunction } from "express";
import { validateRequest } from "twilio";

export function validateTwilioRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const signature = req.headers["x-twilio-signature"] as string;
  const url = `https://${req.headers.host}${req.originalUrl}`;
  const params = req.body;

  const isValid = validateRequest(
    process.env.TWILIO_AUTH_TOKEN!,
    signature,
    url,
    params
  );

  if (!isValid) {
    console.warn("[SECURITY] Invalid Twilio Signature");
    return res.status(403).send("Invalid Twilio request");
  }

  next();
}
