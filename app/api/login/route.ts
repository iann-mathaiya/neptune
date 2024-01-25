import { auth } from "@/actions/auth/lucia"
import * as context from "next/headers"
import { NextResponse } from "next/server"
import { LuciaError } from "lucia"

import type { NextRequest } from "next/server"

export const POST = async (request: NextRequest) => {
  // const formData = await request.formData()
  // const email = formData.get("email")
  // const password = formData.get("password")

  const res = await request.json()
  console.log(res)

  const email = res.email
  const password = res.password

  try {
    // find user by key
    // and validate password
    const key = await auth.useKey("email", email.toLowerCase(), password)
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    })
    const authRequest = auth.handleRequest(request.method, context)
    authRequest.setSession(session)
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/", // redirect to profile page
      },
    })
  } catch (e) {
    if (
      e instanceof LuciaError &&
      (e.message === "AUTH_INVALID_KEY_ID" ||
        e.message === "AUTH_INVALID_PASSWORD")
    ) {
      // user does not exist or invalid password
      return NextResponse.json(
        {
          error: "Incorrect email or password",
        },
        {
          status: 400,
        }
      )
    }
    return NextResponse.json(
      {
        error: "An unknown error occurred",
      },
      {
        status: 500,
      }
    )
  }
}
