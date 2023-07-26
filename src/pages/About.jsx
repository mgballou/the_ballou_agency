import { motion } from 'framer-motion'

function About() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}

        >
            <div className='card border-dark border-5'>
                <div className='card-body'>
                    <h3 className='card-title my-4'>About The Ballou Agency</h3>
                    <p>
                        As a dedicated financial advisor with more than two decades of experience in the insurance and finance field, I proudly established the Ballou Agency to address a pressing need I observed in our underserved community. My vision was to create an innovative financial services organization that offers personalized solutions to individuals, families, and businesses. Throughout my career, I've remained committed to making a positive impact on the lives of the countless individuals who have become my valued clients.
                    </p>

                    <p>
                        Through enduring partnerships with industry-leading organizations, my company can provide a comprehensive range of services, including life insurance protection, alternative college funding, retirement planning, health insurance coverage, investment planning, asset rollovers, and much more. My approach centers on understanding the unique circumstances of each client, allowing me to tailor information and options to best suit their individual needs.
                    </p>

                    <p>
                        Passion drives me in this work, and I firmly believe that everyone deserves a solid financial plan for their future. Access to clear and easily understandable financial guidance is paramount in this endeavor, and I am devoted to guiding my clients every step of the way. Whether it's walking through their plans in detail, answering questions, or conducting free seminars on financial planning for local communities, I am here to provide unwavering support.
                    </p>

                    <p>
                        I invite you to reach out to me today, so we can meet one-on-one and work hand-in-hand to build and secure financial success for you, your family, your business, and your future. Together, we can navigate the path to financial stability and prosperity.
                    </p>

                    <h3 className='card-title my-4'>Our Values</h3>
                    <div className='d-flex flex-column gap-1 my-4'>

                        <div className='d-flex flex-row justify-content-evenly gap-3'>
                            <p className='py-4 px-2 border-3 border-dark border-bottom border-top rounded w-50 text-center'>Integrity</p>
                            <p className='py-4 px-2 border-3 border-dark border-bottom border-top rounded w-50 text-center'>Financial Education</p>
                        </div>

                        <div className='d-flex flex-row justify-content-evenly gap-3'>
                            <p className='py-4 px-2 border-3 border-dark border-bottom border-top rounded w-50 text-center'>Community</p>
                            <p className='py-4 px-2 border-3 border-dark border-bottom border-top rounded w-50 text-center'>Security</p>
                        </div>


                        <div className='d-flex flex-row justify-content-evenly gap-3'>
                            <p className='py-4 px-2 border-3 border-dark border-bottom border-top rounded w-50 text-center'>Empowerment</p>
                            <p className='py-4 px-2 border-3 border-dark border-bottom border-top rounded w-50 text-center'>Something</p>
                        </div>



                    </div>




                </div>


            </div>



        </motion.div>
    )
}

export default About