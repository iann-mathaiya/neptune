import Link from "next/link"
import * as context from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/actions/auth/lucia"
import LoginForm from "./_components/loginform"

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

        <h2 className='mt-2 text-gray-600 sm:text-sm'>
          We gonna drizzle fo shizzle
        </h2>

        <LoginForm />

        <div className='mt-4'>
          <Link
            href='/'
            className='px-4 py-2 w-full flex justify-center text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md'
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  )
}
