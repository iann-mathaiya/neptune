import { User } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileAvatar({ user, size, profile }: { user: User, size?: string, profile: number | null }) {
  const userAbbr = user.username.charAt(0).toUpperCase()

  // const profileImage = 

  return (
    <Avatar className={`${size} cursor-pointer`}>
      <AvatarImage src='https://github.com/shadcn.png' alt={`${user.username}'s profile picture`} />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  )
}
