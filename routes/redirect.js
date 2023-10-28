const router = async (fastify, options) => {
    fastify.get("/", async (req, reply) => {

        return reply.redirect(200, "https://mini-link.vercel.app/")
        // return reply.send({ message: "hello world of fastify" });
    });
}

module.exports = router;
