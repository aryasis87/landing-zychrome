'use client';

import { motion } from 'framer-motion';

/* ============================================================================
   Bagian penanda Zychrome: TITIK INTERAKSI.
   Klaim "interaktif" biasanya berhenti sebagai kata sifat. Di sini dipetakan
   sepanjang garis waktu sesi: menit ke berapa peserta diminta menjawab, dan
   apa bentuk interaksinya — sehingga janjinya bisa diperiksa.
   ========================================================================== */

const titik = [
  { menit: 5, nama: 'Polling pembuka', ket: 'Menakar sejauh mana peserta sudah paham topiknya.' },
  { menit: 18, nama: 'Papan pertanyaan', ket: 'Pertanyaan masuk dan dipilih peserta lewat suara terbanyak.' },
  { menit: 34, nama: 'Kuis singkat', ket: 'Tiga soal untuk mengunci materi yang baru dibahas.' },
  { menit: 52, nama: 'Reaksi langsung', ket: 'Pembicara menyesuaikan tempo dari reaksi yang masuk.' },
  { menit: 70, nama: 'Ruang diskusi kecil', ket: 'Peserta dipecah ke kelompok berisi lima orang.' },
  { menit: 88, nama: 'Tanya jawab terbuka', ket: 'Pertanyaan yang belum terjawab dibereskan di sini.' },
];

const TOTAL = 95;

export default function Interaction() {
  return (
    <section id="interaksi" className="relative overflow-hidden bg-graphite-2 py-20 md:py-28">
      <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="meter-label mb-5 text-signal">Titik Interaksi</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">
            Enam kali Anda diminta menjawab, bukan sekadar menonton
          </h2>
          <p className="mt-5 leading-relaxed text-chrome-dim">
            Ini peta sesi sepanjang 95 menit. Tiap penanda adalah momen peserta ikut menentukan arah
            pembahasan.
          </p>
        </div>

        {/* Garis waktu sesi */}
        <div className="relative mb-12 hidden h-14 md:block">
          <div aria-hidden="true" className="absolute inset-x-0 top-6 h-px bg-chrome/20" />
          {titik.map((t) => (
            <div
              key={t.menit}
              className="absolute -translate-x-1/2"
              style={{ left: `${(t.menit / TOTAL) * 100}%` }}
            >
              <span className="meter-label block text-center text-chrome-dim">{t.menit}′</span>
              <span
                aria-hidden="true"
                className="mx-auto mt-1.5 block h-3 w-3 rounded-full border-2 border-signal bg-graphite-2"
              />
            </div>
          ))}
        </div>

        <ol className="grid gap-px bg-chrome/12 sm:grid-cols-2 lg:grid-cols-3">
          {titik.map((t, i) => (
            <motion.li
              key={t.menit}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-graphite-2 p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="meter-label text-signal">Menit {t.menit}</span>
                <span aria-hidden="true" className="signal-bars h-3">
                  <span /><span /><span />
                </span>
              </div>
              <h3 className="text-lg font-bold text-chrome">{t.nama}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-chrome-dim">{t.ket}</p>
            </motion.li>
          ))}
        </ol>

        <p className="meter-label mt-8 leading-[1.7] text-chrome-dim">
          Susunan interaksi di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  );
}
