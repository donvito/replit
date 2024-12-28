import type { Express } from "express";
import { db } from "../db";
import { registrations } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express) {
  app.get("/api/hello", (_req, res) => {
    res.json({ message: "Hello from the API!" });
  });
  app.post("/api/register", async (req, res) => {
    try {
      const { fullName, email } = req.body;
      
      // Check if email already exists
      const existing = await db.select()
        .from(registrations)
        .where(eq(registrations.email, email));
      
      if (existing.length > 0) {
        return res.status(400).json({ error: "Email already registered" });
      }

      // Insert new registration
      const result = await db.insert(registrations)
        .values({ fullName, email })
        .returning();

      res.json(result[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

  app.get("/api/registrations", async (_req, res) => {
    try {
      const result = await db.select()
        .from(registrations)
        .orderBy(registrations.createdAt);

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });
}
