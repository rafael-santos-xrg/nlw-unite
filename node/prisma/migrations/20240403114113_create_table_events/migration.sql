-- CreateTable
CREATE TABLE "event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "max_attendees" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "event_slug_key" ON "event"("slug");
