import ProfileAvatar from "@/components/profile-avatar"
import readProfile from "@/actions/profile.ts/read-profile"
import { ChangeProfilePicture } from "./_components/change-dp"
import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default async function Profile() {
  const { user } = await readProfile()

  return (
    <main className='min-h-screen max-w-2xl mx-auto space-y-4 sm:space-y-8'>
      <div className='flex items-center gap-2'>
        <Link href='/dashboard'>
          <ArrowLeftIcon
            className='size-5 text-slate-500 hover:text-slate-800'
            aria-hidden
          />
        </Link>
        <h1 className='scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl text-slate-800'>
          Profile
        </h1>
      </div>

      <div className='px-4 sm:px-6 flex items-center justify-between'>
        <div className="flex items-center gap-2">
          <ProfileAvatar
            user={user}
            profile={user.persona}
            size='size-20 lg:size-20'
          />

          <div>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <h4>{user.persona}</h4>
          </div>
        </div>
        <ChangeProfilePicture persona={user.persona} />
      </div>
    </main>
  )
}
