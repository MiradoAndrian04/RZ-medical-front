import { motion } from "motion/react";
import { Link } from "react-router-dom";

function ServprodCard() {
  const transition = {
    duration: 1.5,
    delay: 0.2,
    ease: "easeOut",
  };

  return (
    <div  className="flex flex-col bg-transparent">
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
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="flex max-sm:flex-col space-x-5 max-sm:space-x-0 max-sm:gap-3 w-full  max-w-[1200px] p-5    mx-auto h-[300px] mt-5"
      >
        <motion.div
          className="w-[50%] max-sm:w-full h-[216px] hover:opacity-80"
          href="#"
          
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        >
          <Link to="/produit">
          <div className='flex justify-end w-full h-full rounded-md bg-[url("./img/produit.jpg")] bg-cover bg-no-repeat p-5'>
            <p className="font-medium text-white text-lg inline-block h-[55px] backdrop-blur-2xl rounded-lg p-3">
              Tout nos produits
            </p>
          </div>
          </Link>
        </motion.div>
        <motion.div
          className="w-[50%] max-sm:w-full h-[216px] hover:opacity-80"
          href="#"
          initial={{x: 100, opacity: 0, }}
        whileInView={{ x: 0, opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay:1.5 }}
        >
          <Link to="/contact">
          <div className=' flex justify-end w-full h-full rounded-md bg-[url("./img/contact.jpg")] bg-cover p-5'>
            <p className="font-medium text-white text-lg inline-block h-[55px] backdrop-blur-2xl rounded-lg p-3">
              Contactez-Nous
            </p>
          </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay:0.5 }}
        className="w-full max-w-[1160px] m-auto max-lg:aspect-video overflow-hidden aspect-video bg-[url('./img/RZ.jpeg')] bg-cover bg-center bg-fixed h-[500px]"
      >
        {/* <img
          src="../../public/img/RZ.jpeg"
          alt="Example"
          className="object-cover w-full h-full"
        /> */}
        <div className="bg-black w-full h-full opacity-70 flex items-center justify-center p-5">
          <h2 className="text-white text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quidem iure quia sunt, molestiae totam similique animi in! Voluptatem, sequi. Repellat quos tenetur ut illum non iusto ad doloremque reprehenderit.</h2>
        </div>
      </motion.div>

      <div id="services" className=" scroll-mt-20 flex flex-col max-w-[1160px] w-full  max-md:p-3 h-auto mt-[7%] mx-auto">
        <h1 className="flex justify-center text-[35px] text-blue font-semibold">
          Nos services
        </h1>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="flex flex-row max-md:flex-col bg-sky-500/10 items-center w-full h-auto mt-5 max-md:mt-3 gap-5 max-md:gap-0 max-md:border-[1px] max-md:border-grey-300 rounded-md p-3"
        >
          <div className="w-[30%] max-md:w-[70%] max-md:mx-auto h-auto ml-[2%]">
            <img
              className="w-full h-[200px] mt-5 object-cover"
              src="../../public/img/materiel.png"
              alt="materiel"
            />
          </div>
          <div className="flex-1 flex items-center h-[250px]">
            <p className="mt-5 text-gray max-md:text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              doloremque totam pariatur architecto. Voluptate doloribus laborum
              incidunt quos ipsam in obcaecati aperiam, sint consequatur dolores
              accusantium atque, natus sed perspiciatis!Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Adipisci doloremque totam
              pariatur architecto. Voluptate doloribus laborum incidunt quos
              ipsam in obcaecati aperiam, sint consequatur dolores accusantium
              atque, natus sed perspiciatis!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="flex flex-row max-md:flex-col-reverse bg-sky-500/10 items-center w-full h-auto mt-5 max-md:mt-3 gap-5 max-md:gap-0 max-md:gap-0 max-md:border-[1px] max-md:border-grey-300 rounded-md p-3"
        >
          <div className="w-[70%] h-[250px] ml-[2%] max-lg:ml-3 max-md:mx-auto h-auto">
            <p className="mt-5 text-gray max-md:text-center mb-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              doloremque totam pariatur architecto. Voluptate doloribus laborum
              incidunt quos ipsam in obcaecati aperiam, sint consequatur dolores
              accusantium atque, natus sed perspiciatis!Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Adipisci doloremque totam
              pariatur architecto. Voluptate doloribus laborum incidunt quos
              ipsam in obcaecati aperiam, sint consequatur dolores accusantium
              atque, natus sed perspiciatis!
            </p>
          </div>
          <div className="w-[30%] max-md:w-[70%] max-md:mx-auto max-md:mb-[-30px] h-auto">
            <img
              className="w-full h-[200px] object-contain"
              src="../../public/img/car.png"
              alt="car"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          viewport={{ once: true }}
          className="flex flex-row max-md:flex-col bg-sky-500/10 items-center w-full h-auto mt-5 max-md:mt-3 gap-5 max-md:gap-0 max-md:gap-0 max-md:border-[1px] max-md:border-grey-300 rounded-md p-3"
        >
          <div className="w-[30%] max-md:w-[70%] max-md:mx-auto h-auto ml-[2%]">
            <img
              className="w-full h-[200px] object-cover"
              src="../../public/img/chaise.png"
              alt="chaise"
            />
          </div>
          <div className="w-[70%] max-md:mx-auto h-auto">
            <p className="mt-5 text-gray max-md:text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              doloremque totam pariatur architecto. Voluptate doloribus laborum
              incidunt quos ipsam in obcaecati aperiam, sint consequatur dolores
              accusantium atque, natus sed perspiciatis!Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Adipisci doloremque totam
              pariatur architecto. Voluptate doloribus laborum incidunt quos
              ipsam in obcaecati aperiam, sint consequatur dolores accusantium
              atque, natus sed perspiciatis!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServprodCard;
