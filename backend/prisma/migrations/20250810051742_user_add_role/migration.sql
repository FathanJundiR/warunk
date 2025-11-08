-- CreateEnum
CREATE TYPE "public"."ROLE" AS ENUM ('ADMIN', 'STAFF', 'CLIENT');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" "public"."ROLE" NOT NULL DEFAULT 'CLIENT';
