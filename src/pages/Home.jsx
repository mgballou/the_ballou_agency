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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet nesciunt quasi exercitationem molestias corporis rerum alias, doloribus optio perspiciatis, animi doloremque ipsum voluptates aliquam assumenda fugit rem suscipit.</p>
            </div>
        </motion.div>
    )
}

export default Home