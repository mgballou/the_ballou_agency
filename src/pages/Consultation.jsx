import { useState, useRef } from "react";
import { motion } from "framer-motion";


function Consultation(props) {

    return (


        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="bg-info"
            style={{minHeight: '80vh'}}

        >

            <section>
                <p>form goes here</p>

            </section>


        </motion.div>
    )
}

export default Consultation