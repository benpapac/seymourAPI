const { ApolloServer } = require('apollo-server');
// const { fs } = require('fs');
// const { path } = require('path');
const { getUserId } = require('./utils');
const { PrismaClient } = require('@prisma/client');
// const cors = require('cors');


const defs = require('./schema.graphql'); //import graphql
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Actor = require('./resolvers/Actor');
const Testimonial = require('./resolvers/Testimonial');

const prisma = new PrismaClient();


const resolvers = {
	Query,
	Mutation,
	User,
	Actor,
	Testimonial,
};

const typeDefs = defs.typeDefs;

const corsOptions = {
    origin: ["https:/www.lgmanagement.org", "https://studio.apollographql.com"],
	credentials: true,
}

const server = new ApolloServer({
	// typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
	typeDefs,
	resolvers,
	csrfPrevention: true,
	//cors: corsOptions,
	context: ({ req }) => {
		return {
			...req,
			prisma,
			userId: req && req.headers.authorization ? getUserId(req) : null,
		};
	},
});


server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => console.log(`Server is running on ${url}`));
