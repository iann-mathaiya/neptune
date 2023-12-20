import { User } from "@/lib/types"
import { personas } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileAvatar({ user, size, profile }: { user: User, size?: string, profile: number | null }) {
  const userAbbr = user.username.charAt(0).toUpperCase()

  const userPersona = personas.find(persona => persona.id === profile);

  return (
    <Avatar className={`${size} cursor-pointer`}>
      <AvatarImage src={userPersona?.src} alt={`${user.username}'s profile picture`} />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  )
}
