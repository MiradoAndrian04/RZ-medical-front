import { motion } from "framer-motion";

const Advantages = () => {
  // Variants pour les animations des cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="avantage" className="scroll-mt-20 bg-gray-50 py-12 mt-32 max-md:mt-15">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl text-blue font-semibold uppercase">
          Notre Avantage
        </h2>
        <h1 className="text-lg font-bold text-gray my-4">
          Pourquoi choisir RZ Medical ?
        </h1>
        <p className="text-gray">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type.
          <br />
          It has survived not only five centuries, but also the leap into
          electronic typesetting with the release of Lorem Ipsum.
        </p>
      </div>

      <motion.div
        className="grid max-md:flex max-md:justify-center max-md:flex-wrap grid-cols-1 md:grid-cols-3 justify-center gap-3 mt-10 max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animation au moment où les cartes sont visibles
      >
        <motion.div
          variants={cardVariants}
          className="bg-blue text-white max-md:w-[48%] max-sm:w-full  p-4 rounded-lg shadow-md max-md:aspect-video"
        >
          <img
            src="public/img/service.png"
            alt="Service"
            className="w-20 h-20 object-cover mb-4 mx-auto rounded-lg"
          />
          <h2 className="text-xl font-bold mb-2 text-center">Service</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-white text-gray p-4 max-md:w-[48%] max-sm:w-full rounded-lg shadow-md border max-md:aspect-video"
        >
          <img
            src="public/img/pat.png"
            alt="Partenaire"
            className="w-20 h-20 object-cover mb-4 mx-auto rounded-lg"
          />
          <h2 className="text-xl font-bold mb-2 text-center">Partenaire</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-blue text-white max-md:w-[48%] max-sm:w-full  p-4 rounded-lg shadow-md max-md:aspect-video "
        >
          <img
            src="public/img/equipe.png"
            alt="Équipe"
            className="w-20 h-20 object-cover mb-4 mx-auto rounded-lg"
          />
          <h1 className="text-xl font-bold mb-2 text-center">Équipe</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Advantages;
