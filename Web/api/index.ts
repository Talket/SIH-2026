import app from "../server/app";

// Export Vercel Serverless Function handler
// Accepts standard Node (req, res) or Express app invocation
export default function handler(req: any, res: any) {
  return app(req, res);
}

