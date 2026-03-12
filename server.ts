import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  try {
    const app = express();
    // Use the PORT environment variable if provided (for Cloud Run), otherwise default to 3000 (for local/preview)
    const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

    // API routes FIRST
    app.get("/api/health", (req, res) => {
      res.json({ status: "ok", timestamp: new Date().toISOString() });
    });

    // Vite middleware for development
    if (process.env.NODE_ENV !== "production") {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { 
          middlewareMode: true,
          hmr: false
        },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      // In production, serve static files from dist
      // When bundled in server.js, dist is in the same directory
      const distPath = path.join(__dirname, "dist");
      console.log(`Serving static files from: ${distPath}`);
      app.use(express.static(distPath));
      
      // SPA fallback for production
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    console.log(`Attempting to listen on port: ${PORT}`);
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`SUCCESS: Server is listening on port ${PORT}`);
    }).on('error', (err) => {
      console.error('Server failed to start:', err);
      process.exit(1);
    });
  } catch (error) {
    console.error('Failed to initialize server:', error);
    process.exit(1);
  }
}

startServer();
