// app/page.tsx
import { auth } from "@/auth/lucia"
import * as context from "next/headers"
import { redirect } from "next/navigation"

import Form from "@/components/form"
import { Button } from "@/components/ui/button"

export default async function Dashboard() {
  const authRequest = auth.handleRequest("GET", context)
  const session = await authRequest.validate()
  if (!session) redirect("/login")

  return (
    <main className='min-h-screen p-24'>
      <h1>Profile</h1>
      <p>User id: {session.user.userId}</p>
      <p>Username: {session.user.username}</p>
      <Form action='/api/logout'>
        <Button type='submit'>Sign Out</Button>
      </Form>
    </main>
  )
}
