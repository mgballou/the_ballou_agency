import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import { getBlogs } from "../utilities/contentful-service"

function Blog(props) {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleRequest(){

        try {
            const response = await getBlogs()
            if (response.ok){
                setBlogs(response)
                setIsLoading(false)
            } else {
                throw new Error("Content failed to load, please try again later.")
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="container  mt-5 mb-2"
            style={{ minHeight: '80vh' }}

        >

            <div className='card border-dark border-5 mb-5'>
                <div className='card-body my-4'>

                    <div className='card-header mb-4'>
                        <h3 className='card-title'>More from The Ballou Agency</h3>
                    </div>
                    <div className="row">


                        <div className="col-9 col-lg-3 mx-auto">
                            <img src="assets/working.jpeg" alt="" className="border border-info border-3 rounded-3 border-opacity-25 img-fluid" loading="lazy"/>

                        </div>

                        <div className="col-12 col-lg-9">


                            {blogs ?


                                <></>

                                :
                                <div className="p-4 card-text">
                                    <p>Check back for articles, insights, and updates on the latest in financial services and products.</p>


                                </div>

                            }








                        </div>
                    </div>


                </div>


            </div>

        </motion.div>
    )
}


export default Blog