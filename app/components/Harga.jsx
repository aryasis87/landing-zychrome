import { HARGA } from '@/lib/sesi';

export default function Harga() {
  return (
    <section id="harga" className="scroll-mt-16 bg-graphite py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="meter-label mb-5 text-signal">Harga</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">Ikut menjawabnya gratis. Rekaman dan papan hasilnya berbayar.</h2>
        </div>
        <ul className="grid gap-6 lg:grid-cols-3">
          {HARGA.map((h) => (
            <li key={h.nama} className={`flex flex-col border p-7 ${h.unggulan ? 'border-signal bg-graphite-2' : 'border-chrome/12 bg-graphite-2'}`}>
              <p className="meter-label text-signal">{h.nama}{h.unggulan && ' · paling banyak dipilih'}</p>
              <p className="mt-4 text-3xl font-bold text-chrome">
                {h.harga} <span className="text-sm font-normal text-chrome-dim">{h.satuan}</span>
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-chrome/12 pt-6 text-sm">
                {h.dapat.map((d) => (
                  <li key={d} className="flex gap-3 text-chrome">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={`/?paket=${encodeURIComponent(h.nama)}#daftar`}
                className={`mt-8 inline-flex justify-center py-3.5 text-sm font-bold ${h.unggulan ? 'bg-signal text-graphite hover:bg-signal-2' : 'border border-chrome/25 text-chrome hover:border-signal hover:text-signal'}`}
              >
                Pilih {h.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
