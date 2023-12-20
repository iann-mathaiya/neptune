import ProfileAvatar from "@/components/profile-avatar"
import readProfile from "@/actions/profile.ts/read-profile"
import ProfileDropdown from "@/components/profile-dropdown"


export default async function Dashboard() {
  const { user, profile } = await readProfile()

  return (
    <main className='min-h-screen max-w-2xl mx-auto space-y-4 sm:space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>🤑</h1>
        <ProfileDropdown>
          <ProfileAvatar user={user} profile={profile[0].persona} />
        </ProfileDropdown>
      </div>
      <div>

      </div>
    </main>
  )
}
