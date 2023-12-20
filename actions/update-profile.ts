"use server"

import checkAuthStatus from "@/auth/check-auth-status"
import { db } from "@/db/drizzle"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function updateProfile(formData: FormData) {
  try {
    const persona = Number(formData.get("persona"))

    const { user } = await checkAuthStatus()

    const updatedProfile: { updatedPersona: number | null }[] = await db
      .update(users)
      .set({ persona: persona })
      .where(eq(users.id, user.userId))
      .returning({ updatedPersona: users.persona })

    return updatedProfile
  } catch (error) {
    throw error
  }
}
