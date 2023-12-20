'use server'
import { User } from "@/lib/types"
import { auth } from "@/auth/lucia"
import * as context from "next/headers"
import { redirect } from "next/navigation"

export default async function checkAuthStatus() {
  const authRequest = auth.handleRequest("GET", context)
  const session = await authRequest.validate()
  if (!session) redirect("/login")

  const user: User = await auth.getUser(session.user.userId)

  return { session, user }
}
