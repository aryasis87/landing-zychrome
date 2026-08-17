'use client';

import { motion } from 'framer-motion';

const bacaan = [
  ['92%', 'Peserta ikut menjawab polling'],
  ['3,4 menit', 'Rata-rata pertanyaan terjawab'],
  ['6', 'Titik interaksi tiap sesi'],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite pt-28 pb-20 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="signal-glow absolute inset-x-0 top-0 h-96" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3"
            >
              <span aria-hidden="true" className="signal-bars">
                <span /><span /><span /><span /><span />
              </span>
              <span className="meter-label text-signal">Zychrome · Sesi interaktif</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[2.5rem] leading-[1.02] font-bold sm:text-5xl lg:text-[3.8rem]"
            >
              Webinar yang bisa
              <br />
              <span className="text-signal">membalas Anda.</span>
            </motion.h1>

            {/* Paragraf pembuka sengaja tanpa kunci opacity: kalau animasinya
                gagal berjalan, isinya tetap terbaca. */}
            <motion.p className="mt-7 max-w-lg leading-relaxed text-chrome-dim">
              Enam titik interaksi di sepanjang sesi: polling, kuis, papan pertanyaan, dan reaksi
              langsung. Kami mengukur keterlibatannya, bukan sekadar menghitung jumlah penonton.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#daftar"
                className="inline-flex items-center justify-center bg-signal px-8 py-4 text-sm font-bold text-graphite transition-colors duration-300 hover:bg-signal-2"
              >
                Daftar Sesi
              </a>
              <a
                href="#interaksi"
                className="inline-flex items-center justify-center border border-chrome/25 px-8 py-4 text-sm font-bold text-chrome transition-colors duration-300 hover:border-chrome/60"
              >
                Lihat Titik Interaksi
              </a>
            </motion.div>

            <dl className="mt-14 grid gap-8 border-t border-chrome/12 pt-8 sm:grid-cols-3">
              {bacaan.map(([n, k]) => (
                <div key={k}>
                  <dt className="sr-only">{k}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-chrome">{n}</span>
                    <span className="meter-label mt-2.5 block text-chrome-dim">{k}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Panel pembacaan langsung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-chrome/12 bg-graphite-2 p-7 sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between border-b border-chrome/12 pb-4">
              <span className="meter-label text-chrome-dim">Panel Keterlibatan</span>
              <span aria-hidden="true" className="signal-bars">
                <span /><span /><span /><span /><span />
              </span>
            </div>

            <dl className="space-y-6">
              {[
                ['Polling terjawab', 92],
                ['Pertanyaan masuk', 74],
                ['Reaksi langsung', 61],
                ['Kuis diselesaikan', 88],
              ].map(([label, nilai]) => (
                <div key={label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-chrome/90">{label}</dt>
                    <dd className="meter-label text-signal">{nilai}%</dd>
                  </div>
                  <div className="mt-2.5 h-1.5 w-full bg-chrome/10">
                    <div className="h-full bg-signal" style={{ width: `${nilai}%` }} />
                  </div>
                </div>
              ))}
            </dl>

            <p className="meter-label mt-7 border-t border-chrome/12 pt-5 leading-[1.7] text-chrome-dim">
              Angka contoh dari sesi purwarupa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
