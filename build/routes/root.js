const root = async (fastify) => {
    fastify.route({
        method: "GET",
        url: "/",
        schema: {},
        handler: async () => { },
    });
};
export default root;
