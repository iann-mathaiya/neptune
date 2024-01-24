import * as z from "zod"

export type User = {
  userId: string
  email:  string
  username: string
  persona: number | null
}

export type Persona = {
  id: number
  src: string
  name: string
}

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }).email({message: 'Input must be a valid email address'}),
  password: z.string().min(8, {
    message: "Password must have 8 characters or more."
  })
})
