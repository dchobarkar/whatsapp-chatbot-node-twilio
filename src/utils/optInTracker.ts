export interface OptInRecord {
  phoneNumber: string;
  name?: string;
  timestamp: string;
  source: "chat" | "form" | "manual";
}

export const trackOptIn = (record: OptInRecord) => {
  console.log(
    `[Opt-In] ${record.phoneNumber} via ${record.source} at ${record.timestamp}`
  );
  // In production, store this in your database for compliance
};
