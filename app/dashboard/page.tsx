import { createContext } from "react"
import checkAuthStatus from "@/auth/check-auth-status"

import Form from "@/components/form"
import { Button } from "@/components/ui/button"
import ProfileDropdown from "@/components/profile-dropdown"

export default async function Dashboard() {
  const { user } = await checkAuthStatus()

  return (
      <main className='min-h-screen max-w-lg mx-auto p-4 sm:p-8'>
        <div className='flex justify-end'>
          <ProfileDropdown />
        </div>
        <p>User id: {user.userId}</p>
        <p>Username: {user.username}</p>
        <Form action='/api/logout'>
          <Button type='submit'>Sign Out</Button>
        </Form>
      </main>
  )
}
