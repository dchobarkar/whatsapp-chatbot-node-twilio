# 📱 WhatsApp Chatbot with Node.js + Twilio

This project is a step-by-step implementation of a WhatsApp Chatbot built using Node.js, Express, Twilio API, and OpenAI.

Each branch corresponds to a section from the accompanying blog series:

- `01-why-whatsapp` – Why WhatsApp? Business Use Case and Tech Landscape
- `02-project-setup` – Twilio Sandbox + Node.js Boilerplate
- `03-webhooks` – Webhook Handling
- `04-rule-based-bot` – Rule-Based Bot Logic
- `05-openai-integration` – Smart Replies via OpenAI API
- `06-deployment` – Deployment & Webhook Configuration
- `07-go-live` – Moving from Sandbox to Production
- `08-enhancements` – Rich Media, Multi-language, Buttons, etc.

In this repo, we’ll build a production-ready WhatsApp chatbot using Node.js, Twilio, and OpenAI step-by-step.

## ✅ Production Go-Live Checklist

To move from sandbox to a live WhatsApp bot:

1. **Facebook Business Verification**

   - Complete verification at <https://business.facebook.com/settings>
   - Link WABA to Twilio under Messaging > Senders > WhatsApp Senders

2. **Register a Real Number**

   - Use a clean number not tied to WhatsApp app
   - Verify via 6-digit OTP

3. **Submit Message Templates**

   - Create under Messaging > Content > WhatsApp Templates in Twilio
   - Use placeholders for personalization

4. **Capture Opt-In**

   - Use form/SMS/in-app toggle
   - Store timestamp + source of consent

5. **Update Twilio Webhook**

   - Ensure webhook URL is correctly set in the new sender settings

6. **Test Everything**
   - Ensure opt-ins are respected
   - Validate logs and compliance
