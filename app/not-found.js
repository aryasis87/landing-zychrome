import Link from "next/link";

export const metadata = { title: "Sinyal hilang" };

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center overflow-hidden bg-graphite px-6 pt-16">
      <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-2xl">
        <p className="meter-label text-warn">404 · Sinyal hilang</p>
        <h1 className="mt-5 text-4xl font-bold md:text-5xl">Halaman ini tidak memancarkan apa pun</h1>
        <p className="mt-4 leading-relaxed">Alamatnya mungkin salah, atau halamannya sudah dipindah.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="bg-signal px-6 py-3.5 text-sm font-bold text-graphite hover:bg-signal-2">Ke beranda</Link>
          <Link href="/papan-hasil" className="border border-chrome/25 px-6 py-3.5 text-sm font-bold text-chrome hover:border-signal hover:text-signal">Papan hasil</Link>
        </div>
      </div>
    </main>
  );
}
