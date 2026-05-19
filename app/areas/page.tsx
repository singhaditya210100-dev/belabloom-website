import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { getLocationsByRegion, regionOrder, Region } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Areas We Serve | Facility Management Across Mumbai & MMR | Belabloom',
  description:
    'Belabloom provides professional facility management, pest control, and housekeeping services across 40+ locations in Mumbai, Navi Mumbai, Thane, and the wider MMR region.',
  keywords: [
    'facility management Mumbai',
    'pest control Mumbai',
    'facility management Navi Mumbai',
    'pest control Thane',
    'housekeeping services MMR',
    'facility management Maharashtra',
  ],
  openGraph: {
    title: 'Areas We Serve | Belabloom Facility Management',
    description:
      'Professional facility management and pest control across 40+ locations in the Mumbai Metropolitan Region.',
    type: 'website',
  },
  alternates: { canonical: '/areas' },
};

const regionColors: Record<Region, { bg: string; border: string; badge: string; dot: string }> = {
  'Central Mumbai':   { bg: 'bg-blue-50',   border: 'border-blue-200',   badge: 'bg-blue-100 text-blue-800',   dot: 'bg-blue-500' },
  'Western Suburbs':  { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-800', dot: 'bg-violet-500' },
  'Mumbai Suburbs':   { bg: 'bg-sky-50',    border: 'border-sky-200',    badge: 'bg-sky-100 text-sky-800',    dot: 'bg-sky-500' },
  'Navi Mumbai':      { bg: 'bg-teal-50',   border: 'border-teal-200',   badge: 'bg-teal-100 text-teal-800',   dot: 'bg-teal-500' },
  'Thane District':   { bg: 'bg-amber-50',  border: 'border-amber-200',  badge: 'bg-amber-100 text-amber-800',  dot: 'bg-amber-500' },
  'Vasai-Virar':      { bg: 'bg-rose-50',   border: 'border-rose-200',   badge: 'bg-rose-100 text-rose-800',   dot: 'bg-rose-500' },
  'Beyond MMR':       { bg: 'bg-green-50',  border: 'border-green-200',  badge: 'bg-green-100 text-green-800',  dot: 'bg-green-500' },
};

export default function AreasPage() {
  const byRegion = getLocationsByRegion();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 text-accent-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            40+ Locations Across Mumbai Metropolitan Region
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Areas We Serve
          </h1>
          <p className="text-primary-200 text-lg lg:text-xl max-w-3xl mx-auto mb-8">
            Belabloom delivers professional facility management, pest control, and housekeeping services across every major locality in Mumbai, Navi Mumbai, Thane, and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick Jump ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-neutral-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {regionOrder.map((region) => {
              if (!byRegion[region]?.length) return null;
              const colors = regionColors[region];
              return (
                <a
                  key={region}
                  href={`#${region.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border ${colors.bg} ${colors.border} ${colors.badge} transition-opacity hover:opacity-80 whitespace-nowrap`}
                >
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  {region}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regions & Locations ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {regionOrder.map((region) => {
          const locs = byRegion[region];
          if (!locs?.length) return null;
          const colors = regionColors[region];

          return (
            <section
              key={region}
              id={region.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-20"
            >
              {/* Region header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${colors.bg} ${colors.border} ${colors.badge}`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                  {region}
                </div>
                <div className="flex-1 h-px bg-neutral-200" />
                <span className="text-sm text-neutral-400 font-medium">
                  {locs.length} {locs.length === 1 ? 'location' : 'locations'}
                </span>
              </div>

              {/* Location cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {locs.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/areas/${loc.slug}`}
                    className={`group block rounded-xl border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${colors.bg} ${colors.border}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${colors.dot.replace('bg-', 'text-')}`} />
                        <h3 className="font-bold text-primary-900 text-base">{loc.name}</h3>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-neutral-500 mb-3 leading-relaxed line-clamp-2">
                      {loc.landmark} · PIN {loc.pin}
                    </p>
                    <div className="text-xs font-medium text-primary-600 group-hover:text-primary-800 transition-colors">
                      View services →
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="bg-primary-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-primary-200 text-lg mb-8">
            We're constantly expanding. Contact us and we'll let you know if we can serve your location — chances are, we can.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
