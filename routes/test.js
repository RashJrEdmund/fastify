const router = async (fastify, options) => {
  fastify.get("/", async (req, reply) => {
    return { message: "omo this thing work o" };
  });

  fastify.post("/", async (req, reply) => {
    reply.send("post finished")
  });
}

module.exports = router;

/* 
fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
}) */