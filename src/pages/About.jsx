import { motion } from 'framer-motion'

function About(){

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5}}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        
        >
            <h1>About Page</h1>
            <p>Life is full of unforeseen challenges, and financial obstacles can often be the hardest to
overcome. Having a trusted advisor who can help you anticipate, plan for, and weather
these hurdles is invaluable, and Marvin Ballou, the owner and primary agent of the
Ballou Agency, is just that person.</p> 
<p>
A member of the insurance and finance field for over 20 years, Marvin founded the
Ballou Agency, to fill a need he saw for an innovative financial services organization. His
goal was to create a company that could provide financial education and a wide-range of
personalized services, products, and solutions to individuals, families, and businesses in a
largely underserved area of the country. And, over the course of his career, Marvin has
worked tirelessly to make a difference in the lives of the countless individuals he has
encountered and taken on as clients.</p>
<p>
Through long-term partnerships with some of the top organizations in the industry,
Marvin has built a company that can provide life insurance protection, alternative college
funding, retirement planning, health insurance coverage, investment planning, asset
rollovers, and a wealth of other services. He takes a personal interest in the circumstances
of each of his clients, and works to tailor the information and options he offers to best
meet their unique and individualized needs.</p>

<p>
Marvin’s dedication and commitment to his clients has allowed him to foster life-long
relationships and to be there with families through unexpectedly difficult times. His novel
approach allowed him to help one client withdraw retirement funds without penalty after
a layoff, and again several years later to pay for a life-saving emergency operation for a
relative. In another instance, his forward-thinking approach made it possible for him to
help a young, widowed client invest funds received from life insurance polices that he
had worked to establish for her and her spouse only a few years prior. </p>

<p>
He has also been able to set up substantial insurance and retirement plans for small-
business owners who only had $200 a month to contribute, help a large-business owner to
secure over $2 million in coverage, despite health issues, to provide for the future of his
wife and children, and to even help a local organization invest and double their
scholarship fund in less than 10 years. Ultimately, no matter your position in life or level
of financial preparedness, Marvin will put your interests first and can be trusted to
provide sound and thoughtful guidance in a professional and courteous manner. </p>
<p>
Marvin is passionate about this work, the need for every individual to have a plan for
their financial future, and the essential role that access to clear and easily understood
financial guidance plays in this effort. Because of this he takes the time to walk each of
his clients through everything they need to know about their plans, is always willing to
answer questions, and regularly holds free seminars on financial planning for churches,
clubs, and civic organizations. He also participates as a leader and mentor in a group for
young men ages 10 to 18, to help influence and foster the lives and financial security of a
new generation.</p>

<p>
Contact Marvin today, so that he can meet with you and begin to work one-on-one and
hand-in-hand to build and secure financial success for you, your family, your business,
and your future!</p>
        </motion.div>
    )
}

export default About