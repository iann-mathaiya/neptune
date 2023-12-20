import checkAuthStatus from "@/auth/check-auth-status"
import ProfileAvatar from "@/components/profile-avatar"
import ProfileDropdown from "@/components/profile-dropdown"

export default async function Dashboard() {
  const { user } = await checkAuthStatus()

  return (
    <main className='min-h-screen max-w-2xl mx-auto space-y-4 sm:space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className="text-2xl">
        🤑
        </h1>
        <ProfileDropdown>
          <ProfileAvatar user={user} />
        </ProfileDropdown>
      </div>
      <div></div>
    </main>
  )
}
