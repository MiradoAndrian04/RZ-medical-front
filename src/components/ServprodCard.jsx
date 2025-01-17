import { motion } from "motion/react";

function ServprodCard() {
  const transition = {
    duration: 1.5,
    delay: 0.1,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div className="flex flex-col">
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
        className="flex max-sm:flex-col space-x-5 max-sm:space-x-0 max-sm:gap-3 w-full  max-w-[1200px] p-5    mx-auto h-[300px] mt-5"
      >
        <motion.a
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="w-[50%] max-sm:w-full h-[216px] hover:opacity-80"
          href="#"
        >
          <div className='w-full h-full rounded-md bg-[url("./img/produit.jpg")] bg-cover bg-no-repeat p-5'>
            <p className="font-medium text-white text-lg ml-[72%] ">
              Tout nos produits
            </p>
          </div>
        </motion.a>
        <motion.a
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="w-[50%] max-sm:w-full h-[216px] hover:opacity-80"
          href="#"
        >
          <div className='w-full h-full rounded-md bg-[url("./img/contact.jpg")] bg-cover p-5'>
            <p className="font-medium text-white text-lg ml-[72%]">
              Contactez-Nous
            </p>
          </div>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="w-full max-w-[1160px] m-auto max-lg:aspect-video overflow-hidden aspect-video"
      >
        <img
          src="../../public/img/RZ.jpeg"
          alt="Example"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <div className="flex flex-col max-w-[1160px] w-full  max-md:p-3 h-auto mt-[7%] mx-auto">
        <h1 className="flex justify-center text-[35px] text-blue font-semibold">
          Nos services
        </h1>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          className="flex flex-row max-md:flex-col w-full h-auto mt-5 max-md:mt-3 gap-5 max-md:gap-0 max-md:border-[1px] max-md:border-grey-300 rounded-md p-3"
        >
          <div className="w-[30%] max-md:w-[70%] max-md:mx-auto h-auto ml-[2%]">
            <img
              className="w-full h-[200px] mt-5 object-cover"
              src="../../public/img/materiel.png"
              alt="materiel"
            />
          </div>
          <div className="flex-1 h-[250px]">
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
          className="flex flex-row max-md:flex-col-reverse w-full h-auto mt-5 max-md:mt-3 gap-5 max-md:gap-0 max-md:gap-0 max-md:border-[1px] max-md:border-grey-300 rounded-md p-3"
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
          className="flex flex-row max-md:flex-col w-full h-auto mt-5 max-md:mt-3 gap-5 max-md:gap-0 max-md:gap-0 max-md:border-[1px] max-md:border-grey-300 rounded-md p-3"
        >
          <div className="w-[30%] max-md:w-[70%] max-md:mx-auto h-auto ml-[2%]">
            <img
              className="w-full h-[200px] object-cover"
              src="../../public/img/chaise.png"
              alt="chaise"
            />
          </div>
          <div className="w-[70%] h-[230px] max-md:mx-auto h-auto">
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
