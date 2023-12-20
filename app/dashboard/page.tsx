import Form from "@/components/form"
import { Button } from "@/components/ui/button"
import checkAuthStatus from "@/auth/check-auth-status"

export default async function Dashboard() {
  const {user} = await checkAuthStatus()

  return (
    <main className='min-h-screen p-24'>
      <h1>Profile</h1>
      <p>User id: {user.userId}</p>
      <p>Username: {user.username}</p>
      <Form action='/api/logout'>
        <Button type='submit'>Sign Out</Button>
      </Form>
    </main>
  )
}
