import React from 'react'
import {motion} from 'motion/react'

 
function ServprodCard() {
    const transition = {
        duration: 1.5,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <div className='flex flex-col'>
            <motion.div 
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.25,
                        },
                    },
                }}
                whileInView="show"
                className='flex space-x-5 w-50 h-[300px] mt-5'
            >
                <motion.a
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                    className='ml-[9.3%] w-[40%] h-[216px] hover:opacity-80' 
                    href="#"
                >
                    <div className='w-full h-full rounded-md bg-[url("./img/produit.jpg")] bg-cover bg-no-repeat'>
                        <p className='font-medium text-white text-lg ml-[72%]'>Tout nos produits</p>
                    </div>
                </motion.a>
                <motion.a
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                    className='w-[40%] h-[216px] hover:opacity-80' 
                    href="#"
                >
                    <div className='w-full h-full rounded-md bg-[url("./img/contact.jpg")]'>
                        <p className='font-medium text-white text-lg ml-[72%]'>Contactez-Nous</p>
                    </div>
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="w-[81.5%] h-[550px] ml-[9.3%] overflow-hidden"
            >
                <img src="../../public/img/RZ.jpeg" alt="Example" className="object-cover w-full h-full" />
            </motion.div>

            <div className='flex flex-col w-[83%] h-auto mt-[7%] ml-[7.5%]'>
                <h1 className='flex justify-center text-[35px] text-blue font-semibold'>Nos services</h1>
                
                <motion.div 
                    whileInView={{ x: -100 }}
                    transition={transition}
                    className='flex flex-row w-full h-auto mt-5'
                >
                    <div className='w-[30%] h-[250px] ml-[2%]'>
                        <img className='w-full h-[200px]' src="../../public/img/car.png" alt="car" />
                    </div>
                    <div className='w-[70%] h-[250px] ml-[3%]'>
                        <p className='mt-5 text-gray'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Adipisci doloremque totam pariatur architecto. Voluptate doloribus laborum incidunt 
                            quos ipsam in obcaecati aperiam, sint consequatur dolores accusantium atque,
                             natus sed perspiciatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Adipisci doloremque totam pariatur architecto. Voluptate doloribus laborum incidunt 
                            quos ipsam in obcaecati aperiam, sint consequatur dolores accusantium atque,
                             natus sed perspiciatis!</p>
                    </div>
                </motion.div>

                <motion.div 
                    whileInView={{ x: 100 }}
                    transition={transition}
                    className='flex flex-row w-full h-[255px] mt-5'
                >
                    <div className='w-[70%] h-[250px] ml-[2%]'>
                        <p className='mt-5 text-gray'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Adipisci doloremque totam pariatur architecto. Voluptate doloribus laborum incidunt 
                            quos ipsam in obcaecati aperiam, sint consequatur dolores accusantium atque,
                             natus sed perspiciatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Adipisci doloremque totam pariatur architecto. Voluptate doloribus laborum incidunt 
                            quos ipsam in obcaecati aperiam, sint consequatur dolores accusantium atque,
                             natus sed perspiciatis!</p>
                    </div>
                    <div className='w-[30%] h-[250px] ml-[3%]'>
                        <img className="w-full h-[200px] mt-5" src="../../public/img/materiel.png" alt="materiel" />
                    </div>
                </motion.div>

                <motion.div 
                    whileInView={{ x: -100 }}
                    transition={transition}
                    className='flex flex-row w-full h-auto mt-5'
                >
                    <div className='w-[30%] h-[230px] ml-[2%]'>
                        <img className='w-full h-[200px]' src="../../public/img/chaise.png" alt="chaise" />
                    </div>
                    <div className='w-[70%] h-[230px] ml-[3%]'>
                        <p className='mt-5 text-gray'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Adipisci doloremque totam pariatur architecto. Voluptate doloribus laborum incidunt 
                            quos ipsam in obcaecati aperiam, sint consequatur dolores accusantium atque,
                             natus sed perspiciatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Adipisci doloremque totam pariatur architecto. Voluptate doloribus laborum incidunt 
                            quos ipsam in obcaecati aperiam, sint consequatur dolores accusantium atque,
                             natus sed perspiciatis!</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ServprodCard