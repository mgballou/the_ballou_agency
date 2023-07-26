import { motion } from "framer-motion"


function Home(){

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5}}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        className="d-flex flex-row"
        >

            <div>
                <img src="src/assets/headshot.jpg" alt="Marvin Ballou" className="img-fluid" />

            </div>

            <div className="w-50">

            <h1>Home Page</h1>
            <p>Life is full of unforeseen challenges, and financial obstacles can often be the hardest to overcome. Having a trusted advisor who can help you anticipate, plan for, and weather these hurdles is invaluable. Trust The Ballou Agency to care for your financial wellness.</p>
            </div>
        </motion.div>
    )
}

export default Home