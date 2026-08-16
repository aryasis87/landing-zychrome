'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckIcon, StarIcon, GiftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const pricingPlans = [
    {
      name: "General Admission",
      price: "Gratis",
      duration: "",
      features: [
        "Akses ke semua sesi seminar",
        "Goodie bag NH Bank",
        "Welcome coffee & snack",
        "E-certificate partisipasi",
        "Kesempatan door prize"
      ],
      cta: "Daftar Sekarang",
      popular: false
    },
    {
      name: "VIP Pass",
      price: "Rp 150.000",
      duration: "per orang",
      features: [
        "Semua benefit General Admission",
        "VIP seat (baris depan)",
        "Exclusive NH Bank merchandise",
        "Meet & greet dengan pemateri",
        "Prioritas Q&A session",
        "Voucher cashback Rp 200.000"
      ],
      cta: "Pilih VIP Pass",
      popular: true
    },
    {
      name: "Corporate Package",
      price: "Custom",
      duration: "min. 10 orang",
      features: [
        "Semua benefit VIP Pass",
        "Reserved corporate seating",
        "Dedicated customer service",
        "Diskon grup hingga 30%",
        "Konsultasi banking eksklusif",
        "Corporate branding opportunity"
      ],
      cta: "Hubungi Sales",
      popular: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pricingPlans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pricingPlans.length) % pricingPlans.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        damping: 15
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-graphite-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-chrome mb-3"
          >
            Pilih Paket Anda
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-signal max-w-2xl mx-auto"
          >
            Benefit eksklusif untuk setiap peserta
          </motion.p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative bg-graphite-2 rounded-2xl p-8 transition-all ${
                plan.popular 
                  ? 'border-2 border-signal shadow-xl shadow-signal/20' 
                  : 'border border-chrome/12 shadow-lg hover:shadow-xl hover:border-signal'
              }`}
              role="region"
              aria-labelledby={`plan-title-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-signal to-signal-2 text-chrome text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <StarIcon className="w-3.5 h-3.5" />
                    TERPOPULER
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3
                  id={`plan-title-${index}`}
                  className="text-xl font-semibold text-chrome mb-2"
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-signal">
                    {plan.price}
                  </span>
                  {plan.duration && (
                    <span className="text-sm text-signal/70">
                      / {plan.duration}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-signal/12 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-signal" />
                      </div>
                    </div>
                    <span className="text-sm text-chrome">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#register"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-signal to-signal hover:from-signal hover:to-signal-2 text-chrome shadow-lg shadow-signal/20' 
                    : 'bg-graphite-2 hover:bg-signal/12 text-signal border border-chrome/12'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative px-4 sm:px-8">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {pricingPlans.map((plan, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div
                    className={`relative bg-graphite-2 rounded-2xl p-6 sm:p-8 max-w-md mx-auto transition-all ${
                      plan.popular 
                        ? 'border-2 border-signal shadow-xl shadow-signal/20' 
                        : 'border border-chrome/12 shadow-lg'
                    }`}
                    role="region"
                    aria-labelledby={`plan-mobile-title-${index}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="bg-gradient-to-r from-signal to-signal-2 text-chrome text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                          <StarIcon className="w-3.5 h-3.5" />
                          TERPOPULER
                        </div>
                      </div>
                    )}

                    <div className="mb-6 sm:mb-8 pt-2">
                      <h3
                        id={`plan-mobile-title-${index}`}
                        className="text-lg sm:text-xl font-semibold text-chrome mb-2"
                      >
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-signal">
                          {plan.price}
                        </span>
                        {plan.duration && (
                          <span className="text-xs sm:text-sm text-signal/70">
                            / {plan.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6 sm:mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-signal/12 flex items-center justify-center">
                              <CheckIcon className="w-3 h-3 text-signal" />
                            </div>
                          </div>
                          <span className="text-xs sm:text-sm text-chrome">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="#register"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full text-center px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-signal to-signal hover:from-signal hover:to-signal-2 text-chrome shadow-lg shadow-signal/20' 
                          : 'bg-graphite-2 hover:bg-signal/12 text-signal border border-chrome/12'
                      }`}
                    >
                      {plan.cta}
                    </motion.a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-graphite-2 rounded-full p-2 shadow-lg text-signal hover:bg-graphite-2 transition-colors border border-chrome/12"
            aria-label="Previous pricing plan"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-graphite-2 rounded-full p-2 shadow-lg text-signal hover:bg-graphite-2 transition-colors border border-chrome/12"
            aria-label="Next pricing plan"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {pricingPlans.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? 'bg-signal w-8' : 'bg-signal w-1.5'
                }`}
                aria-label={`Go to plan ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Benefit Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-signal to-signal-2 rounded-2xl p-6 sm:p-8 shadow-xl shadow-signal/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="bg-graphite-2/20 backdrop-blur-sm p-3 rounded-full shadow-sm" aria-hidden="true">
                <GiftIcon className="w-8 h-8 text-chrome" />
              </div>
              <div>
                <h4 className="font-bold text-chrome text-lg sm:text-xl mb-1">Early Bird Special!</h4>
                <p className="text-chrome text-sm sm:text-base">
                  50 pendaftar pertama mendapat voucher NH Bank <strong className="text-chrome">Rp 100.000</strong> + merchandise eksklusif
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;