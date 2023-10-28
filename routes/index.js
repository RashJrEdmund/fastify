const router = async (fastify, options) => {
    fastify.get("/", async (req, reply) => {
        return reply.send({ message: "hello world of fastify" });
    });
}

module.exports = router;
