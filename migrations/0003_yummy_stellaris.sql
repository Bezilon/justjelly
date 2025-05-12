ALTER TABLE "servers" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "servers" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "servers" ADD COLUMN "url" text NOT NULL;