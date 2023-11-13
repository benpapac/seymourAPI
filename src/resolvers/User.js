const actors = (parent, args, context) => {
	return context.prisma.user
	.findUnique({ where: { id: parent.id } })
	.actors();
};

const testimonials = (parent, args, context) => {
	return context.prisma.user
		.findUnique({ where: { id: parent.id } })
		.testimonials();
};

const blogs = (parent, args, context) => {
	return context.prisma.user
		.findUnique({ where: {id: parent.id} })
		.blogs();
}

module.exports = {
	actors,
	blogs,
	testimonials
};
