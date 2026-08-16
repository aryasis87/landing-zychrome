'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  AcademicCapIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const TargetAudience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const audiences = [
    {
      icon: <UserGroupIcon className="w-8 h-8 text-signal" />,
      title: 'Nasabah NH Bank',
      description:
        'Nasabah existing yang ingin menikmati kemudahan layanan digital banking terkini',
      roles: ['Pemilik Rekening', 'Pengguna Kartu Kredit', 'Debitur/Kreditur']
    },
    {
      icon: <BuildingOffice2Icon className="w-8 h-8 text-signal" />,
      title: 'Pelaku Usaha',
      description:
        'Pengusaha dan UMKM yang membutuhkan solusi transaksi bisnis yang cepat dan efisien',
      roles: ['Owner UMKM', 'Entrepreneur', 'Corporate User']
    },
    {
      icon: <ShoppingBagIcon className="w-8 h-8 text-signal" />,
      title: 'Lifestyle Enthusiast',
      description:
        'Generasi modern yang aktif bertransaksi digital dan mencari pengalaman banking yang seamless',
      roles: ['Millennial', 'Gen Z', 'Digital Native']
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-signal" />,
      title: 'Mahasiswa & Pelajar',
      description:
        'Kaum muda yang ingin belajar mengelola keuangan dengan aplikasi modern',
      roles: ['Mahasiswa', 'Fresh Graduate', 'Young Professional']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % audiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + audiences.length) % audiences.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-signal/30 overflow-hidden"
      aria-labelledby="target-audience-heading"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-signal rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-signal rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            id="target-audience-heading"
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-chrome mb-3 sm:mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-signal">
              Untuk Siapa Acara Ini?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-chrome max-w-3xl mx-auto px-4"
          >
            Seminar ini terbuka untuk semua kalangan yang ingin merasakan pengalaman perbankan digital terdepan
          </motion.p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="hidden lg:grid grid-cols-4 gap-8"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-graphite-2 rounded-xl shadow-lg overflow-hidden border border-chrome/12 hover:shadow-xl transition-all h-full"
              role="region"
              aria-labelledby={`audience-${index}-title`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="p-3 bg-graphite-2 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {audience.icon}
                </div>

                <h3
                  id={`audience-${index}-title`}
                  className="text-xl font-bold text-chrome mb-2"
                >
                  {audience.title}
                </h3>
                <p className="text-chrome mb-4 flex-grow">{audience.description}</p>

                <div className="pt-4 mt-auto border-t border-chrome/12">
                  <h4 className="text-xs font-semibold text-signal uppercase tracking-wider mb-2">
                    Kategori:
                  </h4>
                  <ul className="space-y-2">
                    {audience.roles.map((role, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-signal rounded-full mr-2"></span>
                        <span className="text-sm text-chrome">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet Carousel View (Show 2 cards on tablet) */}
        <div className="lg:hidden relative px-4 sm:px-8">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {audiences.map((audience, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div
                    className="bg-graphite-2 rounded-xl shadow-lg overflow-hidden border border-chrome/12 max-w-md mx-auto h-full"
                    role="region"
                    aria-labelledby={`audience-mobile-${index}-title`}
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="p-3 bg-graphite-2 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                        {audience.icon}
                      </div>

                      <h3
                        id={`audience-mobile-${index}-title`}
                        className="text-lg sm:text-xl font-bold text-chrome mb-2"
                      >
                        {audience.title}
                      </h3>
                      <p className="text-chrome mb-4 flex-grow text-sm sm:text-base">{audience.description}</p>

                      <div className="pt-4 mt-auto border-t border-chrome/12">
                        <h4 className="text-xs font-semibold text-signal uppercase tracking-wider mb-2">
                          Kategori:
                        </h4>
                        <ul className="space-y-2">
                          {audience.roles.map((role, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-2 h-2 bg-signal rounded-full mr-2"></span>
                              <span className="text-xs sm:text-sm text-chrome">{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-graphite-2 rounded-full p-2 shadow-lg text-signal hover:bg-graphite-2 z-10"
            aria-label="Previous audience"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-graphite-2 rounded-full p-2 shadow-lg text-signal hover:bg-graphite-2 z-10"
            aria-label="Next audience"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {audiences.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? 'bg-signal w-6' : 'bg-signal'
                }`}
                aria-label={`Go to audience ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-chrome mb-4 sm:mb-6 px-4">Siapapun Anda, NH All One Bank hadir untuk memudahkan hidup Anda!</p>
          <motion.a
            href="#register"
            title="Daftar Sekarang"
            aria-label="Daftar Sekarang"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-signal to-signal text-chrome font-bold shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-signal text-sm sm:text-base"
          >
            Daftar Sekarang - Gratis!
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;