import React from 'react'

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { customers } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";


const Customers = () => {
    return (
        < >
            <motion.div variants={textVariant()} className="mt-20">
                <p className={styles.sectionSubText}> I don’t like to brag, but I’m changing the game.</p>
                <h2 className={styles.sectionHeadText}>Clients I've worked with.</h2>
            </motion.div>

            <div className='flex flex-row flex-wrap justify-left gap-10 mb-20'>
                {customers.map((customer) => {
                    <div className='w-28 h-28' key={customer.icon}>
                        <BallCanvas icon={customer.icon} />
                    </div>
                })}
            </div>
        </>
    );
};

export default SectionWrapper(Customers, "");
