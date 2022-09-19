const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();


const main = async() => {
    const kristi = await prisma.testimonial.create({
        data: {
        name: "Kristi Slager",
        occupation: "Energy Healing Counselor, Movement Coach",
        testimonial: "Meeting Nicole completely changed my life. I met her at one of my lowest points and as she began coaching me, my life began to completely turn around. The thing that stands out the most about Nicole is the loving and compassionate space she holds. The way she saw the parts of me that were hurting with such compassion and love, allowed me to open up to loving myself— And that has been a gift of more magnitude and impact than I could ever express. Working with Nicole completely turned my life around... for the first time I could see myself with compassion, and as someone deserving of grace. And these things healed me. Nicole is a true healer and I’m forever grateful for how she has blessed my life!"
    }, 
    });

    const cemal = await prisma.testimonial.create({
        data: {
        name:"Cemal Özdemir",
        occupation: "Enterepeneur, Dad",
        testimonial: "It was a Monday in September. I had a breakfast meeting and then went into the office. I received really bad news. My first call was to Nicole. She immediately brought me back to center.  I have spent many years looking for a connection in a life coach or therapist. One that won’t judge me. One where I could express my feelings. One where I could be vulnerable. When I met Nicole, I knew I had found her. Nicole has a gift. She gives perspectives I can trust while providing the perfect balance between building me up and challenging my thoughts. The past 3 years have been the most difficult of my life. Nicole has been there through all of it.  It is hard to imagine where I would be without her. She is one of a kind.  "
        },
    });
    const fiona = await prisma.testimonial.create({
        data: {
        name: "Fiona Rene",
        occupation: "Actor",
        testimonial: "Niole Seymour has truly changed my life in so many ways.  As an Actor, she manages my career trajectory and keeps the business growing in an intended direction, as an Artist she coaches me through emotional currents, uncertainty and creative blocks, but I would say, most importantly, as a Human, Nicole has been a mentor and guide to make me a better Leader in ALL that I do.  I think that is the key here- her ability to coach us as the star in our own story in life.  In all areas of my business and artistry, Nicole moves with me and meets me where I am.  She consistently creates a space to feel open and trusting for creation and compassion, while showing me perspectives and mentalities that push me and my ability to not only see each end of the spectrum, but also, what may lay in the grey. She is an undeniable asset to any business owner, artist, and human."
        },
    });
    const caleb = await prisma.testimonial.create({
        data: {
        name: "Caleb Auston",
        occupation: "photographer, singer/songwriter",
        testimonial: "Nicole is a coach truly suited for artists. Whether you are trying to break habits, find new ones, or help remove the blocks currently inhibiting your progress, Nicole has a way of being both supportive and direct. She understands right-brained creatives and how we operate, allowing for a perspective that stands out in a sea of left-brained professionals attempting to aid artists. Most importantly, she truly cares, and will take you on as a client if she knows you are worthy of the time and energy. Nicole came into my life during a dark period, but due to her guidance and coaching, I've had one of the most productive years of my life. "
        }, 
    });
    const jana = await prisma.testimonial.create({
        data: {
        name: "Jana Brost",
        occupation: "CEO",
        testimonial: "Why coach with Nicole?  I’ve never worked with someone like Nicole.  The way she approaches it is unlike anyone I’ve worked with.  So many in this industry focus on “fixing,” which inevitably focuses your time, energy (and money) on problems and what’s broken.  Nicole focuses on your values and what you want to create.  Plus, she finds a way to make what you learn actionable.  I’ve walked away with a mighty, mighty tool kit.  The results have been wildly impactful for me.  But, don’t ask me… I think my husband is an even bigger fan of Nicole’s."
        }, 
    });
    
    const april = await prisma.testimonial.create({
        data: {
        name: "April Belford",
        occupation: "Stylist, Entrepreneur",
        testimonial: "I started working with Nicole during one of the scariest and lowest points in my life. I was newly sober and dealing with the grief of a loss. Nicole truly helped set my life on a new path. With her help, I found my strength and a new-found confidence I never thought possible. She challenged me to see things from a different perspective and open my world up to any possibility. Her simple and effective approach has allowed me to continue using the tools I’ve gained in my daily life."
        },
    }); 
    const andi = await prisma.testimonial.create({
        data: {
        name:"Andi Christensen",
        occupation: "Actor",
        testimonial: "Coaching with Nicole has been one of the most vital, grounding, mental-health-massaging practices I’ve discovered in a very long time. Like many of us recently, I was navigating a good ol’ existential crisis, and many of my usual, negative thought patterns were in overdrive. Almost immediately, Nicole presented perspectives that inspired new solutions to old problems. She challenged me to take initiative from a place of positivity and gave me actionable steps to address obstacles in both my daily and professional life. Something she told me that I will always remember, “The person you are becoming will outlast any goal.” I think about that every day.  Through our sessions, I have established a new appreciation for my career and a stronger sense of self. Coaching with Nicole is rooted in its tailor-made balance of reflection and action, as invaluable as it is inventive."
        },
    });
    const ellie = await prisma.testimonial.create({
        data: {
        name: "Ellie Lee",
        occupation: "actress, host",
        testimonial: "Nicole is one of the warmest people you will ever meet. She listens, she cares, she follows up, and goes the extra mile. I've always felt safe with her and for anyone out there who is looking for a coach that will be with you every step of the way, Nicole is the best choice! When life gets hard, sometimes it's hard to navigate it on your own, so having an amazing coach on your side will help you immensely along your journey!"
        },
    });
}

main()
        .catch(e => {
            throw e;
        })
        .finally( async( ) => {
            await prisma.$disconnect();
        });

