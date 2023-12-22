"use server"

import { User } from "@/lib/types"
import * as context from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/actions/auth/lucia"

export default async function checkAuthStatus() {
  const authRequest = auth.handleRequest("GET", context)
  const session = await authRequest.validate()
  if (!session) redirect("/login")

  const user: User = await auth.getUser(session.user.userId)

  return { session, user }
}
