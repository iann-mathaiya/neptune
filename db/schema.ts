import { pgTable, bigint, varchar, integer } from "drizzle-orm/pg-core"

export const users = pgTable("auth_user", {
  id: varchar("id", { length: 255 }).primaryKey(),
  persona: integer("persona"),
  email: varchar("email", { length: 255 }).unique().notNull(),
  username: varchar("username", { length: 255 }).unique().notNull(),
})

export type User = typeof users.$inferSelect;

export const session = pgTable("user_session", {
  id: varchar("id", { length: 128 }).primaryKey(),
  idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
  activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => users.id),
})

export const key = pgTable("user_key", {
  id: varchar("id", { length: 255 }).primaryKey(),
  hashedPassword: varchar("hashed_password", { length: 255 }),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => users.id),
})
