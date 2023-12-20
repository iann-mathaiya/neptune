import { lucia } from "lucia"
import { db } from "@vercel/postgres"
import { nextjs_future } from "lucia/middleware"
import { pg } from "@lucia-auth/adapter-postgresql"

export const auth = lucia({
  adapter: pg(db, {
    key: "user_key",
    user: "auth_user",
    session: "user_session",
  }),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: nextjs_future(),

  sessionCookie: {
    expires: false,
  },

  getUserAttributes: (data) => {
    return {
      username: data.username,
    }
  },
})

export type Auth = typeof auth
