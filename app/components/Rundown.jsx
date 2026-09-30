import { RUNDOWN, SESI } from '@/lib/sesi';

export default function Rundown() {
  return (
    <section className="relative overflow-hidden bg-graphite py-20 md:py-28">
      <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="meter-label mb-5 text-signal">Rundown · {SESI.hari}</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">95 menit, dari polling uji sampai tanya jawab terakhir</h2>
        </div>
        <ol className="border-t border-chrome/20">
          {RUNDOWN.map(([jam, judul, ket]) => (
            <li key={jam} className="grid gap-2 border-b border-chrome/12 py-5 sm:grid-cols-[6rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-6">
              <span className="meter-label text-signal">{jam}</span>
              <span className="font-bold text-chrome">{judul}</span>
              <span className="text-sm leading-relaxed">{ket}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
