const actors = async (parent, args, context, info) => {

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

const actor = async (parent, args, context, info) => {
	const actor = await context.prisma.actor.findUnique({
		where: { id: args.id }
	});
	return actor;
}

const testimonials = async (parent, args, context, info) => {
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

const testimonial = async (parent, args, context, info) => {
	const testimonial = await context.prisma.testimonial.findUnique({
		where: { id: args.id },
	});
	return testimonial;
};

const users = async (parent, args, context, info) => {
	return await context.prisma.user.findMany();
};

module.exports = {
	actors,
	actor,
	testimonials,
	users,
};
