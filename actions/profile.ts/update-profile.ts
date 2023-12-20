"use server"

import { db } from "@/db/drizzle"
import { eq } from "drizzle-orm"
import { users } from "@/db/schema"
import { revalidatePath } from "next/cache"
import checkAuthStatus from "@/actions/auth/check-auth-status"

export default async function updateProfile(formData: FormData) {
  try {
    const persona = Number(formData.get("persona"))

    const { user } = await checkAuthStatus()

    const updatedProfile: { updatedPersona: number | null }[] = await db
      .update(users)
      .set({ persona: persona })
      .where(eq(users.id, user.userId))
      .returning({ updatedPersona: users.persona })

    revalidatePath("/profile")

    return updatedProfile
  } catch (error) {
    throw error
  }
}
