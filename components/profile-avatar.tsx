import { User } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileAvatar({ user, size }: { user: User, size?: string }) {
  const userAbbr = user.username.charAt(0).toUpperCase()
  return (
    <Avatar className={`${size} cursor-pointer`}>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  )
}
