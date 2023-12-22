/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./lucia.js").Auth
  type DatabaseUserAttributes = {
    email: string
    username: string
    persona: number | null
  }
  type DatabaseSessionAttributes = {}
}