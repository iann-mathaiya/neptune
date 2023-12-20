"use server"
import { eq } from "drizzle-orm"
import { db } from "@/db/drizzle"
import { users } from "@/db/schema"
import checkAuthStatus from "@/actions/auth/check-auth-status"

export default async function readProfile() {
  try {
    const { user } = await checkAuthStatus()
    const profile = await db
      .select()
      .from(users)
      .where(eq(users.id, user.userId))

    return { user, profile }
  } catch (error) {
    throw error
  }
}
