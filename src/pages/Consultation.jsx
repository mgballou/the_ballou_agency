import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import emailjs from '@emailjs/browser';

const interestedInOptions = {
    option1: "Life Insurance",
    option2: "Annuities",
    option3: "Planning for college or retirement",
    option4: "Asset Rollovers",
    option5: "Investment Planning",
    option6: "Other"
}

const urgencyOptions = {
    option1: "I'm definitely seeking to move forward with an insurance policy or investment vehicle the next 30 days.",
    option2: "I'd like to know more about my options, but I wouldn't plan to do anything in the next 30 days.",
    option3: "I'm not anticpating making any immediate changes, but I would like to learn more about what you can offer."
}


function Consultation(props) {

    const [formSuccess, setFormSuccess] = useState(0)

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        interestedIn: [],
        moreDetails: "",
        urgency: ""

    })



    function handleFormChange(evt) {
        if (evt.target.name !== "interestedIn") {
            setFormData({ ...formData, [evt.target.name]: evt.target.value })
        } else {
            const { value, checked } = evt.target
            const { interestedIn } = formData
            if (checked) {
                setFormData({ ...formData, interestedIn: [...interestedIn, value] })
            } else {
                setFormData({ ...formData, interestedIn: interestedIn.filter((option) => option !== value) })

            }
        }

    }

    async function handleFormSubmit(evt) {
        evt.preventDefault()
        if (formSuccess !== 0) {
            setFormSuccess(0)
        }
        try {
            let formCopy = formData

            formCopy.interestedIn = formCopy.interestedIn?.map((option) => {
                return interestedInOptions[option]
            })

            formCopy.urgency = urgencyOptions[formCopy.urgency]

            const result = await emailjs.send("service_fr8qx3e", 'template_5t4q7kk', formCopy, "LgvhRZ158CF77BdSY")
            if (result.text === "OK") {
                setFormSuccess(1)
                setFormData({
                    name: "",
                    phoneNumber: "",
                    email: "",
                    interestedIn: [],
                    moreDetails: "",
                    urgency: ""

                })
            } else {
                throw new Error(result.text)


            }

        } catch (error) {
            setFormSuccess(-1)

        }

    }

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="bg-info bg-opacity-75"
            style={{ minHeight: '90vh' }}

        >

            <section className="container p-4">

                <h3 className="text-center text-white mb-2">Let's get in touch</h3>

                <div className="row">
                    <div className="col-lg-4 col-9 mx-auto">
                        <img className="border border-dark border-3 rounded-3 border-opacity-25 img-fluid" src="/assets/in-suit.jpeg" alt="" />

                    </div>
                    <div className="col-lg-8 col-12 d-flex flex-column justify-content-evenly">
                        <div className="mt-4 mb-2 card card-body bg-white bg-opacity-50 text-center mx-auto w-75">

                            <div className="fs-4 my-auto px-4">I look forward to our conversation. I encourage you to reach out to me directly, or fill out the form below, and I'll contact you.</div>

                        </div>

                        <div className="mt-4 mb-2 card card-body bg-white bg-opacity-50 text-center mx-auto w-75">
                            <div className="fs-4 my-auto px-4">
                                <div>505 North Main Street</div>
                                <div>South Boston, VA 24592</div>
                                <div>(o) 434-517-0777</div>
                                <div>(c) 434-579-0196</div>

                                <div className="mt-4 fst-italic">Hours by appointment</div>

                            </div>


                        </div>

                    </div>

                </div>

                <AnimatePresence>

                    {formSuccess === -1 ?

                        <motion.div className="mt-4 mb-2 card card-body bg-white bg-opacity-50 text-center mx-auto w-75" key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

                            <div className="fs-4 my-auto px-4">There was an error, please try again.</div>

                        </motion.div>


                        :

                        <></>

                    }






                    {formSuccess === 1 ?

                        <motion.div className="mt-4 mb-2 card card-body bg-white bg-opacity-50 text-center mx-auto w-75" key="thanks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

                            <div className="fs-4 my-auto px-4">Thanks for your submission!</div>

                        </motion.div>





                        :


                        <motion.form
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{duration: 1}}
                            layout
                            key="form"

                            className="my-3" onSubmit={handleFormSubmit}>
                            <legend className="">Consultation Form</legend>
                            <div className="form-floating mt-4">
                                <input onChange={handleFormChange} type="text" className="form-control" placeholder="Name" name="name" value={formData.name} />
                                <label className="form-label">Name</label>
                            </div>


                            <div className="form-floating mt-4">
                                <input onChange={handleFormChange} type="text" className="form-control" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} />
                                <label className="form-label">Phone Number</label>
                            </div>


                            <div className="form-floating mt-4">
                                <input onChange={handleFormChange} type="email" className="form-control" placeholder="Email" name="email" value={formData.email} />
                                <label className="form-label">Email</label>
                            </div>

                            <div className="form-group mt-4">

                                <legend>I'm interesed in...</legend>

                                <div className="row">
                                    <div className="form-check col-4 my-1">
                                        <input className="form-check-input" onChange={handleFormChange} type="checkbox" name="interestedIn" value="option1" />
                                        <label className="form-check-label">
                                            Life Insurance
                                        </label>
                                    </div>

                                    <div className="form-check col-4 my-1">
                                        <input className="form-check-input" onChange={handleFormChange} type="checkbox" name="interestedIn" value="option2" />
                                        <label className="form-check-label">
                                            Annuities
                                        </label>
                                    </div>

                                    <div className="form-check col-4 my-1">
                                        <input className="form-check-input" onChange={handleFormChange} type="checkbox" name="interestedIn" value="option3" />
                                        <label className="form-check-label">
                                            Planning for college or retirement
                                        </label>
                                    </div>

                                    <div className="form-check col-4 my-1">
                                        <input className="form-check-input" onChange={handleFormChange} type="checkbox" name="interestedIn" value="option4" />
                                        <label className="form-check-label">
                                            Asset Rollovers
                                        </label>
                                    </div>

                                    <div className="form-check col-4 my-1">
                                        <input className="form-check-input" onChange={handleFormChange} type="checkbox" name="interestedIn" value="option5" />
                                        <label className="form-check-label">
                                            Investment Planning
                                        </label>
                                    </div>

                                    <div className="form-check col-4 my-1">
                                        <input className="form-check-input" onChange={handleFormChange} type="checkbox" name="interestedIn" value="option6" />
                                        <label className="form-check-label">
                                            Other (add details below)
                                        </label>
                                    </div>

                                </div>


                            </div>

                            <div className="form-floating mt-4">
                                <textarea onChange={handleFormChange} type="text"
                                    style={{ height: '10rem' }}
                                    className="form-control" placeholder="Describe your current situation and what you're looking for" name="moreDetails" value={formData.moreDetails} />
                                <label className="form-label text-wrap">Add any details to help me prepare for your consultation</label>
                            </div>

                            <div className="form-group mt-4">
                                <legend>How urgent is your need?</legend>
                                <div className="form-check my-2">
                                    <input className="form-check-input" onChange={handleFormChange} type="radio" name="urgency" value="option1" />
                                    <label className="form-check-label">
                                        I'm definitely seeking to move forward with an insurance policy or investment vehicle the next 30 days.
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" onChange={handleFormChange} type="radio" name="urgency" value="option2" />
                                    <label className="form-check-label">
                                        I'd like to know more about my options, but I wouldn't plan to do anything in the next 30 days.
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" onChange={handleFormChange} type="radio" name="urgency" value="option3" />
                                    <label className="form-check-label">
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






                        </motion.form>

                    }


                </AnimatePresence>






            </section>


        </motion.div>
    )
}

export default Consultation