"use client"
import { useState } from "react"
import { User } from "@/lib/types"
import updateProfile from "@/actions/profile.ts/update-profile"

import { Input } from "@/components/ui/input"
import { RiCheckLine, RiCloseLine, RiQuillPenLine } from "@remixicon/react"
import { Label } from "@/components/ui/label"

export default function UpdateUser({ email }: Pick<User, "email">) {
  const [isEditable, setIsEditable] = useState(false)

  async function handleUpdate(formData: FormData) {
    const result = await updateProfile(formData)
    setIsEditable(false)
  }

  return (
    <div>
      {!isEditable && (
        <div className='py-2 px-3 flex items-center gap-2'>
          <h3 className='text-sm'>{email}</h3>
          <button type='button' onClick={() => setIsEditable(true)}>
            <RiQuillPenLine size={20} aria-hidden />
          </button>
        </div>
      )}

      {isEditable && (
        <form action={handleUpdate}>
          <div>
            <label htmlFor='email' className='sr-only'>
              Email Address
            </label>
            <div className='mt-1 w-80 relative rounded-md shadow-sm'>
              <input
                id='email'
                type='email'
                name='email'
                defaultValue={email}
                className='h-9 w-full py-1 px-3 focus:border-[1.5px] focus:border-slate-800 focus:outline focus:outline-slate-400 focus:outline-offset-2 block pr-10 sm:text-sm rounded-md'
              />
              <div className='absolute inset-y-0 right-0 pr-[1px] flex items-center'>
                <button
                  type='button'
                  onClick={() => setIsEditable(false)}
                  className='p-1.5 bg-transparent text-slate-800 hover:text-red-600 hover:bg-red-100 rounded-md'
                >
                  <RiCloseLine size={20} aria-hidden />
                </button>
                <button
                  type='submit'
                  className='p-1.5 bg-transparent text-slate-800 hover:text-green-500 hover:bg-green-100 rounded-md'
                >
                  <RiCheckLine size={20} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
