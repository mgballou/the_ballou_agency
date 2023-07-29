import { motion } from 'framer-motion'

function About() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}

        >
            <div className='card border-dark border-5 mb-5'>
                <div className='card-body my-4'>
                    <div className='card-header mb-4'>
                        <h3 className='card-title'>About The Ballou Agency</h3>

                    </div>
                    <div>
                        <div className='d-flex justify-content-center my-2'>
                            <img src="assets/headshot.jpg" alt="Marvin Ballou" className="border border-info border-3 rounded-3 border-opacity-25" style={{maxHeight: '460px', maxWidth: '100%'}} />

                        </div>
                        <div className='p-4'>
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

                        </div>
                        

                    </div>





                </div>

            </div>

            <div className='card border-dark border-5 my-5'>
                <div className='card-body my-4'>
                    <div className='card-header mb-4'>
                        <h3 className='card-title'>Our Values</h3>
                    </div>


                    <div className="d-flex flex-row flex-wrap gap-3">
                        <div className='card card-body text-white bg-dark bg-opacity-75  align-items-center  d-flex border-white w-25 gap-2 p-4'>
                            <h4 className='card-subtitle'>
                                Integrity
                            </h4>
                            <p className='mb-0'>We want you to buy war bonds.</p>
                        </div>

                        <div className='card card-body bg-info bg-opacity-25 align-items-center  d-flex border-white w-25 gap-2 p-4'>
                            <h4 className='card-subtitle'>
                                Integrity
                            </h4>
                            <p className='mb-0'>We want you to buy war bonds.</p>
                        </div>

                        <div className='card card-body text-white bg-dark bg-opacity-75  align-items-center  d-flex border-white w-25 gap-2 p-4'>
                            <h4 className='card-subtitle'>
                                Integrity
                            </h4>
                            <p className='mb-0'>We want you to buy war bonds.</p>
                        </div>

                        <div className='card card-body bg-info bg-opacity-25 align-items-center  d-flex border-white w-25 gap-2 p-4'>
                            <h4 className='card-subtitle'>
                                Integrity
                            </h4>
                            <p className='mb-0'>We want you to buy war bonds.</p>
                        </div>

                        <div className='card card-body text-white bg-dark bg-opacity-75  align-items-center  d-flex border-white w-25 gap-2 p-4'>
                            <h4 className='card-subtitle'>
                                Integrity
                            </h4>
                            <p className='mb-0'>We want you to buy war bonds.</p>
                        </div>

                        <div className='card card-body bg-info bg-opacity-25 align-items-center  d-flex border-white w-25 gap-2 p-4'>
                            <h4 className='card-subtitle'>
                                Integrity
                            </h4>
                            <p className='mb-0'>We want you to buy war bonds.</p>
                        </div>



                    </div>

                </div>
            </div>


            <div className='card border-dark border-5 my-5'>
                <div className='card-body my-4'>

                    <div className='card-header mb-4'>
                        <h3 className='card-title'>We Represent</h3>

                    </div>





                </div>
            </div>



        </motion.div>
    )
}

export default About