import Link from "next/link"
import { auth } from "@/auth/lucia"
import Form from "@/components/form"
import * as context from "next/headers"
import { redirect } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default async function Login() {
  const authRequest = auth.handleRequest("GET", context)
  const session = await authRequest.validate()
  if (session) redirect("/dashboard")

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Form action='/api/login'>
        <Label htmlFor='username'>Username</Label>
        <Input name='username' id='username' />

        <Label htmlFor='password'>Password</Label>
        <Input type='password' name='password' id='password' />

        <Button>Login</Button>

        <Link href="/login">Create Account</Link>
      </Form>
    </main>
  )
}