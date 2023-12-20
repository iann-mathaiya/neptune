import { User } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileAvatar({ user }: { user: User }) {
  const userAbbr = user.username.charAt(0).toUpperCase()
  return (
    <Avatar className='cursor-pointer'>
      <AvatarImage src='https://github.com/shadcn.pngl' alt='@shadcn' />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  )
}
