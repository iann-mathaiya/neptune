import { User } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { RiCheckLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import updateProfile from "@/actions/profile.ts/update-profile"

export default function UpdateUser({ email }: Pick<User, "email">) {
  async function handleUpdate(formData: FormData) {
    "use server"
    const result = await updateProfile(formData)
  }

  return (
    <div>
      <form
        action={handleUpdate}
        className='flex w-full max-w-sm items-center space-x-2'
      >
        <Input
          type='email'
          name='email'
          className="w-52"
          defaultValue={email}
          placeholder='Email'
        />
        <Button variant='ghost' type='submit' className=' hover:bg-transparent'>
          <RiCheckLine size={20} aria-hidden />
        </Button>
      </form>
    </div>
  )
}
