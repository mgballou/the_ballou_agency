import { motion } from "framer-motion";

function Services(props) {

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
                        <h3 className='card-title'>Services</h3>

                    </div>
                    <div className="p-4">
                        <p>Through long-term partnerships with some of the top organizations in the industry,
                            we can provide  a wide variety of financial services.</p>

                        <ul>
                            <li>Term Life Insurance</li>
                            <li>Whole Life Insurance</li>
                            <li>Universal Life Insurance</li>
                            <li>Indexed Universal Life Insurance</li>
                            <li>Guaranteed Issue Life Insurance Product</li>
                            <li>Fixed Annuities</li>
                            <li>Fixed Indexed Annuities</li>
                            <li>Asset Rollovers</li>
                            <li>Alternative College Funding</li>
                            <li>Retirement Planning</li>
                            <li>Health Insurance Coverage</li>
                            <li>Investment Planning</li>

                        </ul>

                    </div>


                </div>

            </div>

        </motion.div>



    )
}

export default Services