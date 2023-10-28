const fastify = require("fastify")({ logger: true });
const { PORT } = require("./services/constants");

fastify.register(require("./routes/index"), { prefix: "/" }); // think of app.use("/top_route", () => )
// fastify.get("/", function handler(req, reply) {
//     reply.send("Hello world of fastify");
// });

fastify.register(require("./routes/test"), { prefix: "/test" });

fastify.register(require("./routes/redirect"), { prefix: "/r" });

fastify.listen({ port: PORT }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    console.log({ address });
});
