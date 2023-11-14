const { prisma } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { actors } = require('./Query');
const { secret, getUserId } = require('../utils');

const PLEASE_LOG_IN_MESSAGE = 'Please log in.';

//user
const signup = async (parents, args, context) => {
	const password = await bcrypt.hash(args.password, 10);

	const user = await context.prisma.user.create({
		data: { ...args, password },
	});

	const secret = process.env.APP_SECRET;
	const token = jwt.sign({ userId: user.id }, secret);

	return {
		token,
		user,
	};
};

const login = async (parent, args, context) => {
	let user;

	try {
		user = await context.prisma.user.findUnique({
			where: { email: args.email },
		});
	} catch (e) {
		throw Error({message: 'No such user'});
	}

	const valid = await bcrypt.compare(args.password, user.password);
	if (!valid) {
		throw new Error('Invalid password');
	}

	const token = jwt.sign({ userId: user.id }, secret);

	return {
		token,
		user,
	};
};

const updateUser = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	try {
		const user = await context.prisma.user.update({
			where: { id: userId },
			data: {
				...args,
			},
		});
		return user;
	} catch (e) {
		return e.message;
	}
};

const deleteUser = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	try {
		const actors = await context.prisma.actor.deleteMany({
			where: { postedBy: { id: userId } },
		});
	
		const testimonials = await context.prisma.testimonial.deleteMany({
			where: { postedBy: { id: userId } },
		});
		const user = await context.prisma.user.delete({ where: { id: userId } });
	
		return [user, testimonials, actors];
	} catch(e) {
		return e.message;
	}

};

//actor
const newActor = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	try {
		const newActor = context.prisma.actor.create({
		data: {
			...args,
			postedBy: { connect: { id: userId } },
			},
		});
		return newActor;
	} catch(e) {
		return e.message;
	}
};

const updateActor = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	try {
		const actor = context.prisma.actor.update({
			where: { name: args.oldName },
			data: {
				// ...args,
				name: args.name,
				img: args.img,
				alt: args.alt,
				imdb: args.imdb,
				bio: args.bio,
	
				postedBy: { connect: { id: userId } },
			},
		});
	
		return actor;
	} catch(e) {
		return e.message;
	}
};

const deleteActor = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	try {
		const actor = context.prisma.actor.delete({
			where: { name: args.name },
		});
		return actor;
	} catch(e) {
		return e.message;
	}
};

const deleteActors = async (parent, args, context) => {
	try {
		const actors = context.prisma.actor.deleteMany();
	} catch(e) {
		return actors.count;
	}
};

//blog
const newBlog = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	try {
		const newBlog = context.prisma.blog.create({
			data: {
				...args,
				date: new Date(),
				postedBy: { connect: { id: userId } },
			},
		});
	
		return newBlog;
	} catch(e) {
		return e.message;
	}

};

const updateBlog = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	try {
		const updatedBlog = context.prisma.blog.update({
			where: { title: args.oldTitle },
			data: {
				title: args.title,
				body: args.body,
				date: new Date(),
				postedBy: { connect: { id: userId } },
			},
		});
	
		return updatedBlog;
	} catch(e) {
		return e.message;
	}

};

const deleteBlog = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	const deletedBlog = context.prisma.blog.delete({
		where: { title: args.title },
	});

	return deletedBlog;
};

//testimonial
const newTestimonial = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	const newTestimonial = context.prisma.testimonial.create({
		data: {
			...args,
			postedBy: { connect: { id: userId } },
		},
	});
	return newTestimonial;
};

const updateTestimonial = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	const testimonial = context.prisma.testimonial.update({
		where: { name: args.oldName },
		data: {
			name: args.name,
			occupation: args.occupation,
			testimonial: args.testimonial,
			postedBy: { connect: { id: userId } },
		},
	});

	return testimonial;
};

const deleteTestimonial = async (parent, args, context) => {
	const { userId } = context;
	if (!userId) throw Error(PLEASE_LOG_IN_MESSAGE);

	const testimonial = context.prisma.testimonial.delete({
		where: { name: args.name },
	});
	return testimonial;
};

module.exports = {
	signup,
	login,
	updateUser,
	deleteUser,
	newActor,
	updateActor,
	deleteActor,
	deleteActors,
	newBlog,
	updateBlog,
	deleteBlog,
	newTestimonial,
	updateTestimonial,
	deleteTestimonial,
};
