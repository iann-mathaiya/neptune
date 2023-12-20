"use client"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { personas } from "@/lib/utils"
import { RadioGroup } from "@headlessui/react"
import updateProfile from "@/actions/update-profile"

export function ChangeProfilePicture() {
  const [selected, setSelected] = useState(personas[0].id)

  async function handleSubmit(formData: FormData) {
    const result = await updateProfile(formData)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>Change</Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-xl'>
        <DialogHeader>
          <DialogTitle>Edit profile picture</DialogTitle>
          <DialogDescription>
            Choose from the following personas. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form action={handleSubmit}>
          <div className='w-full px-4 py-8 sm:py-12'>
            <div className='mx-auto w-full'>
              <RadioGroup name="persona" value={selected} onChange={setSelected}>
                <RadioGroup.Label className='sr-only'>
                  Personas
                </RadioGroup.Label>
                <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 gap-y-8'>
                  {personas.map(({ id, src, name }) => (
                    <RadioGroup.Option key={id} value={id} className='cursor-pointer'>
                      {({ checked }) => (
                        <>
                          <div className='flex flex-col items-center text-sm max-w-sm gap-1'>
                            <Avatar
                              className={`size-20 ${
                                checked && "p-1 border-2 border-green-500"
                              }`}
                            >
                              <AvatarImage
                                src={src}
                                alt={`${name}'s profile picture`}
                              />
                            </Avatar>
                            <RadioGroup.Description
                              as='span'
                              className={`inline text-center ${
                                checked ? "text-green-600" : "text-gray-500"
                              }`}
                            >
                              {name}
                            </RadioGroup.Description>
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>

          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function CheckIcon(props: any) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
