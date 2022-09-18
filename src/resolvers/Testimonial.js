const postedBy = (parent, args, context) => {
	return context.prisma.testimonial
		.findUnique({ where: { id: parent.id } })
		.postedBy();
};



module.exports = {
	postedBy,
};
