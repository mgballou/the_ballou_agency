import { motion } from "framer-motion"
import { useNavigate } from "react-router"


function Home() {

    const navigate = useNavigate()

    function handleClick(){
        navigate("/consultation")
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}

            className=""


        >
            <section className="container-fluid min-vh-100 overflow-auto" style={{ background: "url('/assets/presenting.jpeg')", aspectRatio: '16/9', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: "no-repeat", backgroundAttachment: 'fixed' }}>


                <div className="h-100 p-4 container-xxl" style={{ backdropFilter: "blur(10px)" }}>
                    <div className="mx-0 row my-2 justify-content-center">

                        <div className="col-9 w-100 my-2">
                            <div className="card card-body bg-white bg-opacity-50 p-4 text-center">
                                <p className="px-2 py-4 fs-3">Life is full of unforeseen challenges, and financial obstacles can often be the hardest to overcome. Having a trusted financial services provider who can help you anticipate, plan for, and weather these hurdles is invaluable.</p>

                                <p className="px-2 py-4 fs-1"> Trust <span className="fst-italic">The Ballou Agency</span> to care for your financial wellness.</p>


                            </div>

                        </div>



                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: .2 },
                        }}
                        onClick={handleClick}


                        className="col-9 col-lg-5 btn btn-lg btn-primary mx-auto my-4 fs-3">Set up a consultation</motion.button>




                    </div>



                </div>


            </section>

            <section className="container-fluid py-5 bg-info bg-opacity-75 h-100">

                <h3 className="text-center text-white mb-0">Agency Accomplishments</h3>

                <div className="mx-auto pt-3 pb-5 container-xxl row justify-content-center">
                <div className="col-12 col-sm-9 col-lg-4 my-2">
                    <div className="card text-center text-white bg-dark bg-opacity-50 p-4 my-2 mx-1 h-100">
                        <h5 className="card-title card-header">Security During Unexpected Challenges</h5>
                        <div className="card-text card-body">
                            <p>After a sudden layoff, strategized a penalty-free withdrawal of retirement funds</p>
                            <p>Enabled the client to financially support their family during uncertain times</p>
                            <p>Provided a pathway for the client to access their assets when they needed it most</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-9 col-lg-4 my-2">
                    <div className="card text-center text-white bg-dark bg-opacity-50 p-4 my-2 mx-1 h-100">
                        <h5 className="card-title card-header">Affordable Retirement Planning</h5>
                        <div className="card-text card-body">
                            <p>Supported a local small business owner's retirement planning</p>
                            <p>Crafted a sustainable retirement pathway with limited $200 monthly contributions</p>
                            <p>Secured an impressive insurance policy along with a robust retirement plan</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-9 col-lg-4 my-2">
                    <div className="card text-center text-white bg-dark bg-opacity-50 p-4 my-2 mx-1 h-100">
                        <h5 className="card-title card-header">Empowering Non-Profit Growth</h5>
                        <div className="card-text card-body">
                            <p>Collaborated with a local organization offering scholarships to high school graduates</p>
                            <p>Provided guidance on asset management that yielded exceptional results</p>
                            <p>Witnessed the scholarship fund's remarkable doubling within a decade</p>
                        </div>
                    </div>
                </div>

                </div>

                <div className="my-2 container-xxl card card-body bg-white bg-opacity-50 p-4 text-center mx-auto">
                    <p className="fs-4">These real-world scenarios exemplify our commitment to helping individuals, entrepreneurs, and community organizations achieve financial success. Our expertise in navigating complex financial situations, paired with a dedication to tailored solutions, has enabled us to drive positive outcomes for our diverse range of clients.</p>


                </div>

                

            </section>





        </motion.div>
    )
}

export default Home