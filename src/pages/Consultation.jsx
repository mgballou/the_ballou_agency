import { useState, useRef } from "react";
import { motion } from "framer-motion";


function Consultation(props) {

    return (


        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="bg-info bg-opacity-75"
            style={{ minHeight: '80vh' }}

        >

            <section className="container p-4">

                <h3 className="text-center text-white mb-2">Let's get in touch</h3>

                <div className="row">
                    <div className="col-lg-4 col-12">
                        <img className="border border-info border-3 rounded-3 border-opacity-25 img-fluid" src="/assets/in-suit.jpeg" alt="" />

                    </div>
                    <div className="col-lg-8 col-12 d-flex flex-column justify-content-evenly">
                        <div className="mt-4 mb-2 card card-body bg-white bg-opacity-50 text-center mx-auto w-75">

                            <div className="fs-4 my-auto px-4">I look forward to our conversation. I encourage you to reach out to me directly, or fill out the form below, and I'll contact you.</div>

                        </div>

                        <div className="mt-4 mb-2 card card-body bg-white bg-opacity-50 text-center mx-auto w-75">
                            <div className="fs-4 my-auto px-4">
                                <div>505 North Main Street</div>
                                <div>South Boston, VA 24592</div>
                                <div className="my-3">Hours by appointment</div>
                                <div className="row">
                                    <p className="col-12 col-lg-6">(o) 434-517-0777</p>
                                    <p className="col-12 col-lg-6">(c) 434-579-0196</p>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>






                <form action="" className="my-3">
                    <legend className="">Consultation Form</legend>
                    <div className="form-floating mt-4">
                        <input type="text" className="form-control" placeholder="Name" />
                        <label className="form-label">Name</label>
                    </div>


                    <div className="form-floating mt-4">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                        <label className="form-label">Phone Number</label>
                    </div>


                    <div className="form-floating mt-4">
                        <input type="email" className="form-control" placeholder="Email" />
                        <label className="form-label">Email</label>
                    </div>

                    <div className="form-group mt-4">

                        <legend>I'm interesed in...</legend>

                        <div className="row">
                            <div className="form-check col-4 my-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Life Insurance
                                </label>
                            </div>

                            <div className="form-check col-4 my-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Annuities
                                </label>
                            </div>

                            <div className="form-check col-4 my-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Planning for college or retirement
                                </label>
                            </div>

                            <div className="form-check col-4 my-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Asset Rollovers
                                </label>
                            </div>

                            <div className="form-check col-4 my-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Investment Planning
                                </label>
                            </div>

                            <div className="form-check col-4 my-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Other (add details below)
                                </label>
                            </div>

                        </div>


                    </div>

                    <div className="form-floating mt-4">
                        <textarea type="text"
                            style={{ height: '10rem' }}
                            className="form-control" placeholder="Describe your current situation and what you're looking for" />
                        <label className="form-label text-wrap">Add any details to help me prepare for your consultation</label>
                    </div>

                    <div className="form-group mt-4">
                        <legend>How urgent is your need?</legend>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <label className="form-check-label" for="optionsRadios1">
                                I'm definitely seeking to move forward with an insurance policy or investment vehicle the next 30 days.
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                            <label className="form-check-label" for="optionsRadios2">
                                I'd like to know more about my options, but I wouldn't plan to do anything in the next 30 days.
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                            <label className="form-check-label" for="optionsRadios3">
                                I'm not anticpating making any immediate changes, but I would like to learn more about what you can offer.
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <motion.input
                            whileTap={{ scale: 0.9 }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: .2 },
                            }}

                            className="col-9 btn btn-lg btn-primary mx-auto my-4" type="submit" />

                    </div>






                </form>

            </section>


        </motion.div>
    )
}

export default Consultation