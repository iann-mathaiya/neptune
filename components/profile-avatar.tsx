import { User } from "@/lib/types"
import { personas } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ProfileProps = {
  user: User
  size?: string
  profile?: number | null
}

export default function ProfileAvatar({ user, size, profile }: ProfileProps) {
  const userAbbr = user.username.charAt(0).toUpperCase()

  const userPersona = personas.find((persona) => persona.id === profile)

  return (
    <Avatar className={`${size} cursor-pointer`}>
      <AvatarImage
        src={userPersona?.src}
        alt={`${user.username}'s profile picture`}
      />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  )
}
