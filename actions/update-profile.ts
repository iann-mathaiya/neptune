"use server"

import checkAuthStatus from "@/auth/check-auth-status"
import { db } from "@/db/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function updateProfile(formData: FormData) {
  try {
    const persona = Number(formData.get("persona"))

    const { user } = await checkAuthStatus()

    console.log({user, persona})

    const updatedProfile: { updatedPersona: number | null }[] = await db
      .update(users)
      .set({ persona: persona })
      .where(eq(users.id, user.userId))
      .returning({ updatedPersona: users.persona })

    console.log(updatedProfile)

    return updatedProfile

  } catch (error) {
    throw error
  }
}
