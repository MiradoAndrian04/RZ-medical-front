import { motion } from "motion/react";
import { Link } from "react-router-dom";

function ServprodCard() {
  const transition = {
    duration: 1.5,
    delay: 0.2,
    ease: "easeOut",
  };

  return (
    <div  className="service flex flex-col bg-transparent">
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
          <Link to="/products">
          <div className='flex justify-end w-full h-full rounded-md bg-[url("/img/produit.jpg")] bg-cover bg-no-repeat p-5'>
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
          <div className=' flex justify-end w-full h-full rounded-md bg-[url("/img/contact.jpg")] bg-cover p-5'>
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
        className="w-full max-w-[1160px] m-auto max-lg:aspect-video overflow-hidden aspect-video bg-[url('/img/RZ.jpeg')] bg-cover bg-center bg-fixed h-[500px]"
      >
        {/* <img
          src="../../public/img/RZ.jpeg"
          alt="Example"
          className="object-cover w-full h-full"
        /> */}
        <div className="bg-black w-full h-full opacity-70 flex items-center justify-center p-5">
          <h2 className="text-white text-3xl text-center">Nous fournissons les meilleurs services à nos clients. <br />
          Votre satisfaction est notre priorité.</h2>
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
              src="/img/materiel.png"
              alt="materiel"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center h-[250px]">
            <h2 className="font-bold text-xl">Equipement</h2>
            <p className="mt-5 text-gray max-md:text-center">
            Chez RZ Medical Equipment, nous mettons à votre disposition des équipements médicaux de haute qualité, conçus pour garantir performance, sécurité et durabilité. Nos produits répondent aux normes internationales les plus strictes, vous assurant une fiabilité inégalée pour une utilisation en toute confiance. Parce que votre satisfaction est notre priorité, nous sélectionnons les meilleures marques du marché, alliant innovation et excellence. Avec nos équipements de pointe, vous bénéficiez d'une technologie avancée pour optimiser vos soins et améliorer le bien-être de vos patients. Faites le choix de l'efficacité et de la sécurité avec RZ Medical Equipment, votre partenaire de confiance en matériel médical !
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
          <h2 className="font-bold text-xl">Livraison</h2>

            <p className="mt-5 text-gray max-md:text-center mb-1">
            RZ Medical Equipment vous garantit un service de livraison rapide et sécurisé partout à Madagascar. Où que vous soyez, nous veillons à ce que vos équipements médicaux vous parviennent dans les meilleures conditions et dans les meilleurs délais. Grâce à notre réseau logistique performant, nous assurons une distribution efficace pour répondre à vos besoins urgents en matériel médical. Avec RZ Medical Equipment, vous bénéficiez d'une solution clé en main, alliant fiabilité, rapidité et professionnalisme. Faites confiance à notre expertise pour vous fournir des équipements de qualité, livrés directement à votre porte !
            </p>
          </div>
          <div className="w-[30%] max-md:w-[70%] max-md:mx-auto max-md:mb-[-30px] h-auto">
            <img
              className="w-full h-[200px] object-contain"
              src="/img/car.png"
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
              src="/img/serv.png"
              alt="chaise"
            />
          </div>
          <div className="w-[70%] max-md:mx-auto h-auto">
          <h2 className="font-bold text-xl">Service après-vente</h2>

            <p className="mt-5 text-gray max-md:text-center">
            Chez RZ Medical Equipment, votre satisfaction ne s'arrête pas à l'achat. Nous vous offrons un service après-vente hors pair, conçu pour répondre à tous vos besoins et vous assurer une tranquillité d'esprit totale. Notre équipe de techniciens experts est à votre disposition pour vous conseiller, vous assister et assurer la maintenance de vos équipements. Avec RZ Medical Equipment, vous bénéficiez d'un accompagnement personnalisé et de solutions rapides et efficaces en cas de besoin. Faites le choix de la sérénité, choisissez RZ Medical Equipment
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServprodCard;
