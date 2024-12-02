import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const registrations = pgTable("registrations", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertRegistrationSchema = createInsertSchema(registrations);
export const selectRegistrationSchema = createSelectSchema(registrations);
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = z.infer<typeof selectRegistrationSchema>;
