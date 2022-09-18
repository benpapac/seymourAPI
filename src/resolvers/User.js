const actors = (parent, args, context) => {
	return context.prisma.user.findUnique({ where: { id: parent.id } }).actors();
};

const testimonials = (parent, args, context) => {
	return context.prisma.user
		.findUnique({ where: { id: parent.id } })
		.testimonials();
};

module.exports = {
	actors,
	testimonials,
};
