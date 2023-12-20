import ProfileAvatar from "@/components/profile-avatar"
import readProfile from "@/actions/profile.ts/read-profile"
import { ChangeProfilePicture } from "./_components/change-dp"

export default async function Profile() {
  const { user, profile } = await readProfile()

  return (
    <main className='min-h-screen max-w-2xl mx-auto space-y-4 sm:space-y-8'>
      <h1 className='scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl text-slate-800'>
        Profile
      </h1>

      <div className='flex items-center justify-between'>
        <ProfileAvatar user={user} profile={profile[0].persona} size='size-20 lg:size-20' />
        <ChangeProfilePicture profile={profile[0].persona} />
      </div>
    </main>
  )
}
