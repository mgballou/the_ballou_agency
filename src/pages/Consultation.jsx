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
                <form action="">
                    <div className="form-group mt-4">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group mt-4">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group mt-4">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="you@email.com" />
                    </div>
                    <div className="form-group mt-4">
                        <label className="form-label">Add any details to help me prepare for your consultation</label>
                        <textarea type="text" className="form-control" placeholder="Describe your current situation and what you're looking for" />
                    </div>

                    <div className="form-group mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>
                                <label className="form-check-label" for="optionsRadios1">
                                    I'm definitely seeking to move forward with an insurance policy or investment vehicle the next 30 days.
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                                <label className="form-check-label" for="optionsRadios2">
                                    I'd like to know more about my options, but I wouldn't plan to do anything in the next 30 days.
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3"/>
                                <label className="form-check-label" for="optionsRadios3">
                                    I'm not anticpating making any immediate changes, but I would like to learn more about what you can offer.
                                </label>
                        </div>
                    </div>





                </form>

            </section>


        </motion.div>
    )
}

export default Consultation