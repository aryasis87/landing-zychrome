import { SESI, SITE } from '@/lib/sesi';
import CobaInteraksi from '../components/CobaInteraksi';

export const metadata = {
  title: 'Coba Menjawab',
  description: `Coba dua titik interaksi Zychrome sebelum mendaftar: polling pembuka dan kuis "asli atau palsu?" dari sesi ${SESI.nomor}.`,
  alternates: { canonical: `${SITE}/coba` },
};

export default function Coba() {
  return (
    <main className="bg-graphite pt-16">
      <section className="relative overflow-hidden px-6 pt-16 pb-12">
        <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="signal-glow absolute inset-x-0 top-0 h-80" />
        <div className="relative mx-auto max-w-6xl">
          <p className="meter-label text-signal">Coba sebelum mendaftar</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-bold md:text-5xl">
            Dua dari enam titik interaksi, <span className="text-signal">silakan dijawab</span>
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed">
            Beginilah rasanya ikut sesi Zychrome: Anda menjawab, hasilnya langsung terlihat, dan
            pembicara membahas jawaban yang paling banyak salah. Tidak ada jawaban Anda yang disimpan.
          </p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <CobaInteraksi />
        </div>
      </section>
    </main>
  );
}
