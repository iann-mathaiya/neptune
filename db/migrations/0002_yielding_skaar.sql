ALTER TABLE "auth_user" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "auth_user" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "auth_user" ADD COLUMN "username" varchar(255);