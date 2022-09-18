const postedBy = (parent, args, context) => {
	return context.prisma.actor
		.findUnique({ where: { id: parent.id } })
		.postedBy();
};



module.exports = {
	postedBy,
};
