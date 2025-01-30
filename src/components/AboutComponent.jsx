import {motion, useAnimation} from 'framer-motion';
import { useEffect } from 'react';
const AboutComponent = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        controls.start('visible');
      } 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Rendre l'animation moins rapide
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about" className="scroll-mt-[65px] md:bg-[url('/img/about.png')] bg-no-repeat bg-cover bg-center relative mt-20 max-md:mt-10 w-full h-[72vh] max-md:h-auto">
      <div className="w-full h-full bg-[#0870CF] opacity-30 max-md:hidden"></div>
        <h1 className="text-5xl max-md:text-3xl max-md:text-center md:w-[300px] font-bold max-sm:p-3 sm:p-3 text-[#3584C7] md:text-white  md:absolute top-[30%] left-[8%] md:translate-y-[-50%]">
          A propos de RZ Medical
        </h1>

        <motion.div className="flex max-md:flex-wrap max-sm:gap-3 max-sm:p-3 sm:gap-3 lg:gap-10 justify-between md:absolute bottom-[-100px] left-[50%] md:translate-x-[-50%] xl:w-[80%] lg:w-[90%] sm:p-3 sm:w-full md:px-3" variants={containerVariants}
        initial="hidden"
        animate={controls}>
          <motion.div className="w-[24%] sm:w-[49%] h-auto aspect-square opacity-90 rounded-lg flex flex-col justify-center items-center max-sm:w-full max-md:aspect-video sm:gap-10 gap-5 sm:px-3 px-10 py-5 text-center backdrop-blur-lg bg-[#025DB0]/90"variants={itemVariants}>
            <img src="/img/icon1.png" alt="user" className="w-[60px]  max-sm:w-[20vw]"/>
            <p className="text-white h-[30%] sm:text-xl max-sm:text-2xl">+500 clients satisfaits</p>
          </motion.div>
          <motion.div className="w-[24%] sm:w-[49%] h-auto aspect-square opacity-90 rounded-lg flex flex-col justify-center items-center max-sm:w-full max-md:aspect-video sm:gap-10 gap-5 sm:px-3 px-10 py-5 text-center backdrop-blur-lg bg-[#025DB0]/90" variants={itemVariants}> 
            <img src="/img/icon2.png" alt="user" className="w-[60px]  max-sm:w-[20vw]"/>
            <p className="text-white h-[30%] sm:text-xl max-sm:text-2xl">Plus de 5ans 
            d&apos;expérience</p>
          </motion.div>
          <motion.div className="w-[24%] sm:w-[49%] h-auto aspect-square opacity-90 rounded-lg flex flex-col justify-center items-center max-sm:w-full max-md:aspect-video sm:gap-10 gap-5 sm:px-3 px-10 py-5 text-center backdrop-blur-lg bg-[#025DB0]/90"variants={itemVariants}>
            <img src="/img/icon3.png" alt="user" className="w-[60px]  max-sm:w-[20vw]"/>
            <p className="text-white h-[30%] sm:text-xl max-sm:text-2xl">Livraison dans 
            tout le pays</p>
          </motion.div>
          <motion.div className="w-[24%] sm:w-[49%] h-auto aspect-square opacity-90 rounded-lg flex flex-col justify-center items-center max-sm:w-full max-md:aspect-video sm:gap-10 gap-5 sm:px-3 px-10 py-5 text-center backdrop-blur-lg bg-[#025DB0]/90" variants={itemVariants}>
            <img src="/img/icon4.png" alt="user" className="w-[60px]  max-sm:w-[20vw]"/>
            <p className="text-white h-[30%] sm:text-xl max-sm:text-2xl">+1000 produits 
            disponibles</p>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default AboutComponent;
