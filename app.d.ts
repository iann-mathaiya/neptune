/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./lucia.js").Auth
  type DatabaseUserAttributes = {
    email: string
    persona: string
    username: string
  }
  type DatabaseSessionAttributes = {}
}