"use server"

import { db } from "@/db/drizzle"
import { eq } from "drizzle-orm"
import { users } from "@/db/schema"
import { revalidatePath } from "next/cache"
import checkAuthStatus from "@/actions/auth/check-auth-status"

export default async function updateProfile(formData: FormData) {
  try {
    const { user } = await checkAuthStatus()

    const email = String(formData.get("email"))
    const persona = Number(formData.get("persona"))

    const updatedProfile: {
      updatedPersona: number | null
      updatedEmail: string | null
    }[] = await db
      .update(users)
      .set({
        email: email !== 'null' ? email : user.email,
        persona: persona !== 0 ? persona : user.persona,
      })
      .where(eq(users.id, user.userId))
      .returning({ updatedPersona: users.persona, updatedEmail: users.email })

    revalidatePath("/profile")

    console.log(updatedProfile)

    return updatedProfile
  } catch (error) {
    throw error
  }
}
