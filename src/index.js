const { ApolloServer } = require('apollo-server');
// const { fs } = require('fs');
// const { path } = require('path');
const { getUser, getUserId } = require('./utils');
const { PrismaClient } = require('@prisma/client');
// const cors = require('cors');

const defs = require('./schema.graphql'); //import graphql
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Actor = require('./resolvers/Actor');
const Testimonial = require('./resolvers/Testimonial');
const Blog = require('./resolvers/Blog');

const prisma = new PrismaClient();

const resolvers = {
	Query,
	Mutation,
	User,
	Actor,
	Blog,
	Testimonial,
};

const typeDefs = defs.typeDefs;

const corsOptions = {
	origin: [
		'https://www.lgmanagement.org',
		'https://studio.apollographql.com',
		'http:/localhost:3000',
	],
	credentials: true,
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	//cors: corsOptions,


	context: ({ req }) => {
		const userId = req && req.headers.authorization ? getUserId(req) : null;
		// const headers = req && req.headers;
		return {
			...req,
			prisma,
			userId: userId,
		};
	},
});

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => console.log(`Server is running on ${url}`));
