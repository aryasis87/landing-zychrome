'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Sponsorship = () => {
  const sponsors = [
    {
      name: "Telkom Indonesia",
      logo: "/images/3.png",
      tier: "platinum",
      url: "https://www.telkom.co.id/"
    },
    {
      name: "XL Axiata",
      logo: "/images/4.png",
      tier: "gold",
      url: "https://www.xl.co.id/"
    },
    {
      name: "Bukalapak",
      logo: "/images/2.png",
      tier: "gold",
      url: "https://www.bukalapak.com/"
    },
    {
      name: "Elang Mahkota Teknologi",
      logo: "/images/5.png",
      tier: "silver",
      url: "https://emtek.co.id/"
    },
    {
      name: "Multipolar Technology",
      logo: "/images/6.webp",
      tier: "silver",
      url: "https://www.multipolar.com/"
    },
    {
      name: "Nodeflux",
      logo: "/images/1.png",
      tier: "silver",
      url: "https://www.nodeflux.io/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const platinumSponsors = sponsors.filter(sponsor => sponsor.tier === "platinum");
  const goldSponsors = sponsors.filter(sponsor => sponsor.tier === "gold");
  const silverSponsors = sponsors.filter(sponsor => sponsor.tier === "silver");

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-graphite to-graphite-2 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-signal rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-signal rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-chrome mb-3 sm:mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-signal">
              Partner Kami
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-signal max-w-3xl mx-auto px-4"
          >
            Terima kasih kepada partner yang mendukung peluncuran NH All One Bank
          </motion.p>
        </motion.div>

        {platinumSponsors.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-center text-lg sm:text-xl font-semibold text-chrome mb-6 sm:mb-8">Platinum Partner</h3>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {platinumSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 sm:p-6 bg-graphite-2 rounded-2xl shadow-md border border-chrome/12 hover:shadow-lg transition-all"
                >
                  <div className="relative w-48 sm:w-64 h-16 sm:h-20">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 192px, 256px"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {goldSponsors.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-center text-lg sm:text-xl font-semibold text-chrome mb-6 sm:mb-8">Gold Partners</h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {goldSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 sm:p-5 bg-graphite-2 rounded-xl shadow-sm border border-chrome/12 hover:shadow-md transition-all"
                >
                  <div className="relative w-36 sm:w-48 h-12 sm:h-16">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 144px, 192px"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {silverSponsors.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-center text-lg sm:text-xl font-semibold text-chrome mb-6 sm:mb-8">Silver Partners</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {silverSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4 bg-graphite-2 rounded-lg shadow-sm border border-chrome/12 hover:shadow-md transition-all"
                >
                  <div className="relative w-28 sm:w-36 h-10 sm:h-12">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 112px, 144px"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-signal/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-chrome/12 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-chrome mb-3 sm:mb-4">Jadi Partner NH Bank?</h3>
          <p className="text-signal mb-4 sm:mb-6 text-sm sm:text-base">Bergabunglah dengan ekosistem perbankan digital terdepan dan dapatkan berbagai keuntungan eksklusif.</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-graphite-2 text-signal font-bold shadow-md hover:shadow-lg transition-all border border-signal text-sm sm:text-base"
          >
            Hubungi Partnership Team
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;