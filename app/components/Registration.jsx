'use client';
import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRightIcon, CheckCircleIcon, XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const Registration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const onSubmit = async (data) => {
    // Tampilkan popup demo
    setShowDemoPopup(true);
  };

  const fadeIn = shouldReduceMotion
    ? {}
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <section
      id="register"
      className="py-12 sm:py-16 bg-gradient-to-b from-signal/30 to-white relative overflow-hidden"
      aria-labelledby="register-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-graphite-2 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-signal rounded-full blur-lg"></div>
      </div>

      {/* Demo Popup */}
      <AnimatePresence>
        {showDemoPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDemoPopup(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92%] sm:w-[85%] md:w-[75%] lg:w-[60%] max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-graphite-2 rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowDemoPopup(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-chrome-dim hover:text-chrome-dim transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-full p-1"
                  aria-label="Tutup popup"
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-signal/12 rounded-full flex items-center justify-center">
                    <InformationCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-signal" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-chrome text-center mb-2 sm:mb-3 px-6">
                  Demo Presentation
                </h3>

                {/* Message */}
                <p className="text-chrome-dim text-center mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                  Ini adalah tampilan demo untuk presentasi kepada calon customer. Form pendaftaran ini dapat diintegrasikan dengan berbagai platform seperti:
                </p>

                {/* Integration List */}
                <div className="bg-graphite-2 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {[
                      'Google Forms',
                      'Gmail / Email Notification',
                      'Google Sheets',
                      'WhatsApp Business API',
                      'CRM System',
                      'Database Custom'
                    ].map((platform, index) => (
                      <li key={index} className="flex items-center text-chrome text-xs sm:text-sm md:text-base">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-signal mr-2 sm:mr-3 flex-shrink-0" />
                        {platform}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                <p className="text-chrome-dim text-center text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-5 md:mb-6 italic px-2">
                  Semua data pendaftaran dapat otomatis tersimpan dan terkirim sesuai kebutuhan bisnis Anda.
                </p>

                {/* Close Button */}
                <button
                  onClick={() => setShowDemoPopup(false)}
                  className="w-full bg-gradient-to-r from-signal to-signal text-chrome font-semibold py-2.5 sm:py-3 rounded-lg hover:from-signal hover:to-signal-2 transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-signal text-sm sm:text-base"
                >
                  Mengerti, Tutup
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 id="register-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-chrome mb-2 sm:mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-signal to-signal">
              Daftar Sekarang
            </span>
          </h2>
          <p className="text-base sm:text-lg text-signal px-4">
            Bergabunglah dalam seminar peluncuran NH All One Bank - New & New
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="bg-graphite-2 rounded-2xl shadow-lg p-4 sm:p-6 border border-chrome/12 flex-1"
            role="form"
          >
            <fieldset className="space-y-4 sm:space-y-5">
              <legend className="sr-only">Form Pendaftaran Seminar</legend>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-chrome mb-1">
                  Nama Lengkap <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Nama wajib diisi' })}
                  style={{ color: '#1f2937' }}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                    errors.name ? 'border-red-400' : 'border-chrome/12'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-signal text-sm sm:text-base bg-graphite-2`}
                  placeholder="Nama lengkap sesuai KTP"
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-xs sm:text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-chrome mb-1">
                  Email <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email wajib diisi',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Format email tidak valid' }
                  })}
                  style={{ color: '#1f2937' }}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-400' : 'border-chrome/12'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-signal text-sm sm:text-base bg-graphite-2`}
                  placeholder="email@contoh.com"
                />
                {errors.email && (
                  <p role="alert" className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-chrome mb-1">
                  Nomor WhatsApp <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Nomor wajib diisi',
                    pattern: { value: /^[0-9]+$/, message: 'Hanya angka' },
                    minLength: { value: 10, message: 'Minimal 10 digit' }
                  })}
                  style={{ color: '#1f2937' }}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                    errors.phone ? 'border-red-400' : 'border-chrome/12'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-signal text-sm sm:text-base bg-graphite-2`}
                  placeholder="08xxxxxxxxxx"
                />
                {errors.phone && (
                  <p role="alert" className="mt-1 text-xs sm:text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-chrome mb-1">
                  Status <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <select
                  id="status"
                  {...register('status', { required: 'Pilih status' })}
                  style={{ color: '#1f2937' }}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                    errors.status ? 'border-red-400' : 'border-chrome/12'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-signal text-sm sm:text-base bg-graphite-2`}
                >
                  <option value="">-- Pilih Status --</option>
                  <option value="nasabah">Nasabah NH Bank</option>
                  <option value="calon">Calon Nasabah</option>
                  <option value="umum">Masyarakat Umum</option>
                </select>
                {errors.status && (
                  <p role="alert" className="mt-1 text-xs sm:text-sm text-red-600">{errors.status.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-chrome mb-1">
                  Pilih Paket <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <select
                  id="plan"
                  {...register('plan', { required: 'Pilih paket' })}
                  style={{ color: '#1f2937' }}
                  className={`w-full px-3 sm:px-4 py-2 rounded-lg border ${
                    errors.plan ? 'border-red-400' : 'border-chrome/12'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-signal text-sm sm:text-base bg-graphite-2`}
                >
                  <option value="">-- Pilih Paket --</option>
                  <option value="general">General Admission (Gratis)</option>
                  <option value="vip">VIP Pass</option>
                  <option value="corporate">Corporate Package</option>
                </select>
                {errors.plan && (
                  <p role="alert" className="mt-1 text-xs sm:text-sm text-red-600">{errors.plan.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-chrome mb-1">
                  Catatan / Pertanyaan (Opsional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  {...register('notes')}
                  style={{ color: '#1f2937' }}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-chrome/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal text-sm sm:text-base bg-graphite-2"
                  placeholder="Ada yang ingin ditanyakan?"
                />
              </div>
            </fieldset>

            <motion.button
              type="submit"
              whileHover={!shouldReduceMotion && { scale: 1.02 }}
              whileTap={!shouldReduceMotion && { scale: 0.98 }}
              className="mt-6 w-full flex justify-center items-center px-6 py-2.5 sm:py-3 bg-gradient-to-r from-signal to-signal text-chrome font-bold rounded-lg hover:from-signal hover:to-signal-2 transition-all text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-signal shadow-lg"
            >
              Daftar Sekarang
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
            </motion.button>

            <p className="mt-4 text-xs text-signal text-center">
              Dengan mendaftar, Anda menyetujui syarat & ketentuan NH Bank.
            </p>
          </motion.form>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="bg-signal/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-chrome/12 flex-1"
            aria-labelledby="info-heading"
          >
            <h3 id="info-heading" className="text-xl sm:text-2xl font-bold text-chrome mb-4">Yang Anda Dapatkan</h3>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6" role="list">
              {[
                "Akses ke semua sesi seminar",
                "Goodie bag NH Bank eksklusif",
                "Welcome coffee & snack box",
                "E-certificate partisipasi",
                "Kesempatan door prize",
                "Promo opening account"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-signal mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-chrome text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-graphite-2/80 p-3 sm:p-4 rounded-lg border border-chrome/12 mb-4 sm:mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-chrome mb-2">Lokasi Acara</h4>
              <p className="text-signal text-xs sm:text-sm mb-2">
                <strong>Grand Ballroom NH Hotel</strong><br />
                Jl. Gatot Subroto No. 123, Jakarta Pusat
              </p>
            </div>

            <div className="bg-graphite-2/80 p-3 sm:p-4 rounded-lg border border-chrome/12">
              <blockquote className="italic text-chrome text-xs sm:text-sm">
                "Event yang sangat informatif! Aplikasinya mudah digunakan dan fiturnya lengkap."
              </blockquote>
              <cite className="block mt-2 text-signal font-medium text-xs sm:text-sm">— Budi Santoso, Nasabah NH Bank</cite>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Registration;