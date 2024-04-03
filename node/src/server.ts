import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});

app.post("/events", async (request, response) => {
  const bodySchema = z.object({
    title: z.string(),
    description: z.string(),
    maximumAttendees: z.number().nullable(),
  });

  const requestData = bodySchema.parse(request.body);

  const newEvent = await prisma.event.create({
    data: {
      ...requestData,
      slug: requestData.title.toLowerCase().replaceAll(" ", "-"),
    },
  });

  console.log(request.body);

  return response.status(201).send(newEvent);
});
