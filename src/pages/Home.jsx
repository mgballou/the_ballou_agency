import { motion } from "framer-motion"


function Home() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}

            className="mb-2"


        >
            <section className="container-fluid min-vh-100 overflow-auto" style={{ background: "url('/assets/stacking-coins.jpeg')", aspectRatio: '16/9', backgroundSize: 'cover', backgroundPosition: 'bottom center', backgroundRepeat: "no-repeat", backgroundAttachment: 'fixed' }}>


                <div className="h-100 p-4" style={{ backdropFilter: "blur(10px)" }}>
                    <div className="mx-0 row my-2 justify-content-center">

                        <div className="col-9 w-100 my-2">
                            <div className="card card-body bg-white bg-opacity-50 p-4 text-center">
                                <p className="px-2 py-4 fs-3">Life is full of unforeseen challenges, and financial obstacles can often be the hardest to overcome. Having a trusted financial services provider who can help you anticipate, plan for, and weather these hurdles is invaluable.</p>

                                <p className="px-2 py-4 fs-1"> Trust <span className="fst-italic">The Ballou Agency</span> to care for your financial wellness.</p>


                            </div>

                        </div>



                        <button className="col-9 btn btn-lg btn-primary mx-auto my-4">Set up a consultation</button>




                    </div>



                </div>


            </section>

            <section className="container-fluid min-vh-100 bg-info bg-opacity-75">
                <div className="mx-0 my-2 row justify-content-center">
                    <div className="col-9 col-lg-4">
                        <div className="card card-body text-white bg-dark bg-opacity-50 p-4 my-2 mx-1">
                            <p>Agency Profile 1</p>
                            <ul>
                                <li>OOmpadd dsadini adsado asdknas</li>
                                <li>dasowimdowei WEdasdads eEaonndnienduea EDaosndal</li>
                                <li>DAOKa asdnjai asdmass,ldie una nuian </li>
                                <li>sdniade OEapke alme imaome nayeoun </li>
                                <li>Asdoja eje e poapokei mamaneuuna iiman paop neunoaune,pl lounaune</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-9 col-lg-4">
                        <div className="card card-body text-white bg-dark bg-opacity-50 p-4 my-2 mx-1">
                            <p>Agency Profile 2</p>
                            <ul>
                                <li>OOmpadd dsadini adsado asdknas</li>
                                <li>dasowimdowei WEdasdads eEaonndnienduea EDaosndal</li>
                                <li>DAOKa asdnjai asdmass,ldie una nuian </li>
                                <li>sdniade OEapke alme imaome nayeoun </li>
                                <li>Asdoja eje e poapokei mamaneuuna iiman paop neunoaune,pl lounaune</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-9 col-lg-4">
                        <div className="card card-body text-white bg-dark bg-opacity-50 p-4 my-2 mx-1">
                            <p>Agency Profile 3</p>
                            <ul>
                                <li>OOmpadd dsadini adsado asdknas</li>
                                <li>dasowimdowei WEdasdads eEaonndnienduea EDaosndal</li>
                                <li>DAOKa asdnjai asdmass,ldie una nuian </li>
                                <li>sdniade OEapke alme imaome nayeoun </li>
                                <li>Asdoja eje e poapokei mamaneuuna iiman paop neunoaune,pl lounaune</li>
                            </ul>
                        </div>
                    </div>







                </div>

            </section>





        </motion.div>
    )
}

export default Home