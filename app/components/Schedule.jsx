'use client';
import { motion } from 'framer-motion';
import { ClockIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const iconMap = {
  clock: ClockIcon,
  check: CheckCircleIcon,
};

const schedule = [
  {
    time: "09:00 - 09:30",
    title: "Registrasi & Welcome Coffee",
    description: "Check-in peserta dan sesi networking informal",
    icon: "check"
  },
  {
    time: "09:30 - 10:15",
    title: "Keynote: Revolusi Digital Banking",
    description: "Pengenalan konsep New & New dalam perbankan modern",
    icon: "clock",
    highlight: true
  },
  {
    time: "10:15 - 11:00",
    title: "Live Demo NH All One App",
    description: "Demonstrasi fitur-fitur unggulan dan cara penggunaan aplikasi",
    icon: "clock"
  },
  {
    time: "11:00 - 11:30",
    title: "Promo & Benefit Eksklusif",
    description: "Penawaran spesial untuk early adopters dan nasabah setia",
    icon: "clock"
  },
  {
    time: "11:30 - 12:00",
    title: "Sesi Q&A & Door Prize",
    description: "Tanya jawab interaktif dan pengundian hadiah menarik",
    icon: "check"
  }
];

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
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Schedule = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-graphite-2 to-graphite overflow-hidden" aria-labelledby="schedule-heading">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-signal rounded-full filter blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-signal rounded-full filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            id="schedule-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-chrome mb-3 sm:mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-signal">
              Rundown Acara
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-signal max-w-3xl mx-auto px-4"
          >
            Jadwal lengkap peluncuran NH All One Bank - New & New
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 bg-graphite-2/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-chrome/12 max-w-2xl mx-auto"
        >
          <div className="flex items-center" aria-label="Tanggal acara">
            <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-signal mr-3" aria-hidden="true" />
            <div>
              <p className="text-xs sm:text-sm text-signal">Tanggal</p>
              <p className="font-bold text-chrome text-sm sm:text-base">15 Desember 2024</p>
            </div>
          </div>
          <div className="flex items-center" aria-label="Waktu acara">
            <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-signal mr-3" aria-hidden="true" />
            <div>
              <p className="text-xs sm:text-sm text-signal">Waktu</p>
              <p className="font-bold text-chrome text-sm sm:text-base">09:00 - 12:00 WIB</p>
            </div>
          </div>
          <div className="flex items-center" aria-label="Durasi acara">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-signal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-xs sm:text-sm text-signal">Durasi</p>
              <p className="font-bold text-chrome text-sm sm:text-base">3 Jam</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-4 sm:left-6 h-full w-0.5 bg-graphite-2" aria-hidden="true"></div>

            {schedule.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative pl-12 sm:pl-16 pb-8 sm:pb-10 ${index === schedule.length - 1 ? '' : 'border-l-2 border-chrome/12'}`}
                >
                  <div
                    className={`absolute top-1 left-4 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center ${item.highlight ? 'bg-signal ring-4 ring-signal' : 'bg-signal'}`}
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-chrome" />
                  </div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className={`p-4 sm:p-6 rounded-xl ${item.highlight ? 'bg-signal text-graphite' : 'bg-graphite-2'} shadow-sm border ${item.highlight ? 'border-signal' : 'border-chrome/12'} transition-all`}
                  >
                    <div className="flex flex-col gap-2 sm:gap-4">
                      <p className={`font-mono font-medium text-xs sm:text-sm ${item.highlight ? 'text-graphite/85' : 'text-signal'}`}>
                        {item.time}
                      </p>
                      <div>
                        <h3 className={`text-base sm:text-lg font-bold ${item.highlight ? 'text-graphite' : 'text-chrome'}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-1 text-xs sm:text-sm ${item.highlight ? 'text-graphite/90' : 'text-chrome-dim'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 bg-graphite-2/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-chrome/12 max-w-3xl mx-auto text-center"
        >
          <p className="text-signal text-xs sm:text-sm">
            <span className="font-bold">Catatan:</span> Peserta yang hadir akan mendapatkan goodie bag eksklusif, welcome kit NH All One Bank, dan kesempatan memenangkan door prize menarik!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;