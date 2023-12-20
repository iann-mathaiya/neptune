import { pgTable, bigint, varchar, integer } from "drizzle-orm/pg-core"

export const users = pgTable("auth_user", {
  id: varchar("id", { length: 255 }).primaryKey(),
  username: varchar("username", { length: 255 }),
  email: varchar("email", { length: 255 }),
  persona: integer("persona"),
})

export type User = typeof users.$inferSelect;

export const session = pgTable("user_session", {
  id: varchar("id", { length: 128 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => users.id),
  activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
  idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
})

export const key = pgTable("user_key", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => users.id),
  hashedPassword: varchar("hashed_password", { length: 255 }),
})
