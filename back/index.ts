import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify();
server.register(cors);

server.get("/click", async (req, res) => {
  return res.send({ message: "Hello World" });
});
server.get("/mouse", async (req, res) => {
  return res.send({ message: "Mouse entered (from server)" });
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
