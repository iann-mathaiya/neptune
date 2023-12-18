"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  action: string
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, action, children, ...props }, ref) => {
    const router = useRouter()

    return (
      <form
        ref={ref}
        method='post'
        action={action}
        className={cn("max-w-sm min-w-fit", className)}
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const response = await fetch(action, {
            method: "POST",
            body: formData,
            redirect: "manual",
          })

          if (response.status === 0) {
            // redirected
            // when using `redirect: "manual"`, response status 0 is returned
            return router.refresh()
          }
        }}
        {...props}
      >
        {children}
      </form>
    )
  }
)

export default Form
