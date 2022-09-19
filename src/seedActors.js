const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
	const ben = await prisma.actor.create({
		data: {
			name: 'Ben Papac',
			img: 'https://i.imgur.com/BxDTG47.jpg',
			alt: 'Ben Papac',
			imdb: 'https://www.imdb.com/name/nm3621230/?ref_=fn_al_nm_',
			bio: "Ben made his Theatrical debut as Albus Potter in Harry Potter & the Cursed Child, SF (2019-2022). He is also known for his roles on American Horror Story, HBO's Room 104, and Into the Badlands on AMC. Ben began his career in Atlanta and Baton Rouge, with roles in The Walking Dead, Fantastic Four, and others.",
		},
	});

	const Fiona = await prisma.actor.create({
		data: {
			name: 'Fiona Rene',
			img: 'https://i.imgur.com/1oFlOsg.jpg',
			alt: 'Fiona Rene',
			imdb: 'https://www.imdb.com/name/nm2031749/?ref_=fn_al_nm_1',
			bio: 'Fiona Rene is a multi-ethnic Chinese American actress who just shot a Series Regular role on the CBS pilot, "Early Edition."  Currently, she can be seen on "The Lincoln Lawyer"(Netflix) and "I Know What You Did Last Summer"(Amazon).  Since being selected for the ABC/Disney Showcase, Fiona has starred in numerous TV shows: "Stumptown," "NCIS Hawaii," "SWAT," "Grey’s Anatomy," and "Jane The Virgin." Fiona is a writer/director, with experience in VO and immersive theater. She has a development deal for her TV script, "Scared Shitless."  Fiona is known for being the voice of "Freeform" and for her mocap role Sarah Bernhardt in "The Invisible Hours." She leads a Technicolor workshop: \'Acting for the Future - Interactive Techniques for Immersive Live, VR and AR.\'',
		},
	});

	const Jeff = await prisma.actor.create({
		data: {
			name: 'Jeff Lewis',
			img: 'https://i.imgur.com/pw4rwUq.jpg',
			alt: 'Jeff Lewis',
			imdb: 'https://www.imdb.com/name/nm1511529/?ref_=fn_al_nm_1',
			bio: 'Best known as "Vork" from the popular award-winning web series, "The Guild," Jeff has been writing, acting, and performing improv and sketch comedy for decades, working opposite comedians such as Drew Carey, Kristin Wiig, Jim Belushi, and Andy Samberg. Recently, He Recurred as Phil Hastings on NBC\'s "Kenan" which ran for 2 seasons.  Other recent credits include Netflix\'s "Prank Encounters" starring Gaten Matarazzo from Stranger Things, HBO Max\'s "Winning Time" and Showtime\'s "Super Pumped."  In addition, Jeff is a content producer for the game show, "Funny You Should Ask."',
		},
	});

	const Kellie = await prisma.actor.create({
		data: {
			name: 'Kellie Blaise',
			img: 'https://i.imgur.com/kZ48Uzu.jpg',
			alt: 'Kellie Blaise',
			imdb: 'https://www.imdb.com/name/nm1624276/?ref_=fn_al_nm_1',
			bio: 'Kellie began singing at fifteen. Her song, "SLEEP," was nominated for an Irish Meteor Award (best song). She recorded her first penned album "No Prisoners," with producer Preston Glass, trained under vocal coach Seth Riggs, and starred "The Voice"(IE), mentored by Sharon Corr. Kellie has appeared in "The Borgias," "Doctors" and “Ill Behaviour"(BBC), “Deathrace 4,"(Universal) and Irish films "This Day" and "The O’Brien\'s," for which she also composed.  Kellie most recently appeared in "The Shrink Next Door," opposite Will Ferrel and Paul Rudd. Kellie recently won a Screen Ireland Artist’s Grant(2022) to produce her screenplay, "The Life Of Reilly," in which she stars and sings.',
		},
	});
};

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
