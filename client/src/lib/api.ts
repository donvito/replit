import type { InsertRegistration } from "@db/schema";

export async function registerUser(data: Omit<InsertRegistration, "id" | "createdAt">) {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }

  return response.json();
}
