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
    <main className='flex min-h-screen flex-1 flex-col justify-center p-24'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h1 className='mt-5 font-display text-xl font-bold leading-[1.15] text-black sm:text-2xl sm:leading-[1.15]'>
          Login into
          <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
            {" "}
            Neptune
          </span>
        </h1>

        <h2 className='mt-2 text-gray-600 sm:text-sm'>We gonna be drizzle fo shizzle</h2>

        <Form action='/api/login' className='mt-8 space-y-4'>
          <div>
            <Label htmlFor='username'>Username</Label>
            <Input name='username' id='username' />
          </div>

          <div>
            <Label htmlFor='password'>Password</Label>
            <Input type='password' name='password' id='password' />
          </div>

          <Button className='w-full'>Login</Button>
        </Form>

        <div className='mt-4'>
          <Link href='/' className='px-4 py-2 w-full flex justify-center text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md'>
            Create Account
          </Link>
        </div>
      </div>
    </main>
  )
}
