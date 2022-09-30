const actors = async (parent, args, context, info) => {
	const { userId } = context;
		if (!userId) throw Error('Please log in');

	const where = args.filter
		? {
				OR: [
					{ name: { contains: args.filter } },
					{ bio: { contains: args.filter } },
				],
		  }
		: {};

	const actors = await context.prisma.actor.findMany({ where });
	return actors;
};

const testimonials = async (parent, args, context, info) => {
	const { userId } = context;
		if (!userId) throw Error('Please log in');


	const where = args.filter
		? {
				OR: [
					{ name: { contains: args.filter } },
					{ occupation: { contains: args.filter } },
				],
		  }
		: {};

	const testimonials = await context.prisma.testimonial.findMany({ where });
	return testimonials;
};

const users = async (parent, args, context, info) => {
	return await context.prisma.user.findMany();
};

module.exports = {
	actors,
	testimonials,
	users,
};
