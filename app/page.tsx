import Link from "next/link"
import Form from "@/components/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Form action='/api/signup'>
        <Label htmlFor='username'>Username</Label>
        <Input name='username' id='username' />

        <Label htmlFor='password'>Password</Label>
        <Input type='password' name='password' id='password' />

        <Button>Create Account</Button>

        <Link href="/login">Sign in</Link>
      </Form>
    </main>
  )
}
