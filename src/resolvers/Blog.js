const postedBy = (parent, args, context) => {
	return context.prisma.blog
		.findUnique({ where: { id: parent.id } })
		.postedBy();
};

module.exports = {
	postedBy,
};
