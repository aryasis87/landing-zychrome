'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apakah seminar ini gratis?",
      answer: "Ya, paket General Admission sepenuhnya gratis! Anda hanya perlu mendaftar dan mengkonfirmasi kehadiran."
    },
    {
      question: "Apakah saya harus menjadi nasabah NH Bank untuk hadir?",
      answer: "Tidak harus! Seminar ini terbuka untuk umum. Baik nasabah existing maupun calon nasabah baru sangat kami sambut."
    },
    {
      question: "Apa yang perlu saya bawa saat datang?",
      answer: "Cukup bawa KTP/identitas diri untuk registrasi ulang di lokasi. Kami yang akan menyediakan semua materi dan goodie bag."
    },
    {
      question: "Apakah ada dress code khusus?",
      answer: "Tidak ada dress code khusus. Anda bisa mengenakan pakaian casual atau smart casual yang nyaman."
    },
    {
      question: "Bagaimana jika saya berhalangan hadir setelah mendaftar?",
      answer: "Anda dapat membatalkan atau transfer tiket ke orang lain dengan menghubungi customer service kami minimal 2 hari sebelum acara."
    },
    {
      question: "Apakah ada fasilitas parkir?",
      answer: "Ya, tersedia area parkir gratis untuk peserta seminar. Detail lokasi parkir akan dikirim via email konfirmasi."
    },
    {
      question: "Bisakah saya membuka rekening langsung di acara?",
      answer: "Tentu! Kami akan menyediakan booth khusus untuk pembukaan rekening dengan proses yang sangat mudah dan cepat."
    },
    {
      question: "Apa saja door prize yang akan dibagikan?",
      answer: "Berbagai hadiah menarik seperti smartphone, voucher belanja, tabungan NH Bank, dan merchandise eksklusif akan diundi."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-graphite to-graphite-2 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-chrome mb-3 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-signal">
              Pertanyaan yang Sering Diajukan
            </span>
          </h2>
          <p className="text-base sm:text-lg text-signal max-w-3xl mx-auto px-4">
            Temukan jawaban untuk pertanyaan seputar seminar NH All One Bank
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-chrome/12 bg-graphite-2 transition-shadow"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <span className="text-chrome font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-signal flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-signal flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-signal text-sm sm:text-base">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-signal mb-4 text-sm sm:text-base">Masih ada pertanyaan lain?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-signal text-graphite font-bold hover:bg-signal transition text-sm sm:text-base"
          >
            Hubungi Customer Service
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;