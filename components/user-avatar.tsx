'use client'
import { User } from "@/lib/types"
import { useEffect, useState } from "react"
import checkAuthStatus from "@/auth/check-auth-status"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserAvatar() {
  const [user, setUser] = useState<User | null>(null)

  async function getUser() {
    const { user } = await checkAuthStatus()
    setUser(user)
  }

  useEffect(() => {
    getUser()
  }, [user])

  const userAbbr = user?.username.charAt(0).toUpperCase()

  return (
    <Avatar className='cursor-pointer'>
      <AvatarImage src='https://github.com/shadcn.pngl' alt='@shadcn' />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  )
}
