const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const main = async () => {
    const testBlog = prisma.blog.create({
        data: {
            date: new Date(),
            title: 'test blog',
            body: 'I\'m writing a test article here to see if the db is set up.\n No        telling what will happen.'
        }
    });

    return testBlog;
};


main()
	.catch((e) => {
		throw e;
	})
	.finally(async (result) => {
        console.log('created test article: ', result);
		await prisma.$disconnect();
	});