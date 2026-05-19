import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLocationBySlug, locations } from '@/lib/locations';
import {
  CheckCircle,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Building2,
  Bug,
  Sparkles,
  Wrench,
  Users,
  Leaf,
} from 'lucide-react';

// ─── Static params for Next.js SSG ──────────────────────────────────────────
export async function generateStaticParams() {
  return locations.map((loc) => ({ location: loc.slug }));
}

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) return { title: 'Not Found' };

  const title = `Facility Management & Pest Control in ${loc.name} | Belabloom`;
  const description = `Professional facility management services in ${loc.name} — pest control, housekeeping, security, and AMC. Trusted by 500+ clients. Get a free quote today.`;

  return {
    title,
    description,
    keywords: [
      `pest control ${loc.name}`,
      `facility management ${loc.name}`,
      `housekeeping services ${loc.name}`,
      `AMC services ${loc.name}`,
      `${loc.name} pest control company`,
      `${loc.name} facility management company`,
      `termite control ${loc.name}`,
      `cockroach control ${loc.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `/areas/${loc.slug}`,
    },
  };
}

// ─── Services offered ────────────────────────────────────────────────────────
const services = [
  {
    icon: Bug,
    title: 'Pest Control',
    description:
      'Termite, cockroach, rodent, bed bugs, mosquito, lizard, and bird control using government-approved treatments.',
    href: '/services/pest-control',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping',
    description:
      'Daily, weekly, and one-time deep cleaning for offices, housing societies, hospitals, and commercial spaces.',
    href: '/services/housekeeping',
  },
  {
    icon: ShieldCheck,
    title: 'Security Services',
    description:
      'Trained and verified security personnel for residential societies, corporate campuses, and events.',
    href: '/services/security',
  },
  {
    icon: Wrench,
    title: 'Annual Maintenance Contracts',
    description:
      'Comprehensive AMC packages covering electrical, plumbing, civil, and mechanical maintenance.',
    href: '/services/amc',
  },
  {
    icon: Building2,
    title: 'Facility Management',
    description:
      'End-to-end integrated facility management for offices, hospitals, malls, and industrial premises.',
    href: '/services',
  },
  {
    icon: Leaf,
    title: 'Herbal & Eco Treatments',
    description:
      'Child-safe, pet-friendly herbal pest treatments for sensitive environments like schools and hospitals.',
    href: '/services/pest-control',
  },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '40+', label: 'Locations Served' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
];

const whyUs = [
  { icon: ShieldCheck, text: 'Maharashtra Govt. Licensed & Certified' },
  { icon: Clock, text: 'Available 24×7, same-day response' },
  { icon: Star, text: 'ISO-compliant processes and trained staff' },
  { icon: Users, text: 'Dedicated account manager for every client' },
  { icon: CheckCircle, text: 'Transparent pricing, no hidden charges' },
  { icon: Leaf, text: 'Eco-friendly & herbal treatment options' },
];

const pestTypes = [
  'Termites', 'Cockroaches', 'Rodents', 'Bed Bugs',
  'Mosquitoes', 'Lizards', 'Honey Bees', 'Flies',
  'Ants', 'Birds', 'Dog Ticks', 'Wood Borers',
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) notFound();

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Belabloom Facility Management – ${loc.name}`,
    description: loc.description,
    url: `https://belabloom.com/areas/${loc.slug}`,
    telephone: '+91-XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.name,
      addressRegion: 'Maharashtra',
      postalCode: loc.pin,
      addressCountry: 'IN',
    },
    areaServed: loc.name,
    serviceType: 'Facility Management & Pest Control',
    priceRange: '₹₹',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-800/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-primary-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/areas" className="hover:text-white transition-colors">Areas</Link>
              <span>/</span>
              <span className="text-white">{loc.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 text-accent-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              {loc.region}
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Facility Management &amp; Pest Control in{' '}
              <span className="text-accent-400">{loc.name}</span>
            </h1>

            <p className="text-lg lg:text-xl text-primary-200 leading-relaxed mb-8 max-w-2xl">
              {loc.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 px-4 lg:px-8 text-center">
                <div className="text-3xl font-bold text-primary-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mt-3 mb-4">
              Our Services in {loc.name}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              From a single pest treatment to a full integrated facility management contract — we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{service.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-accent-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pest Types ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Pest Control</span>
              <h2 className="text-3xl font-bold text-primary-900 mt-3 mb-4">
                All Pest Types Treated in {loc.name}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our certified technicians handle every kind of pest infestation using government-approved chemicals and eco-friendly herbal alternatives — safe for your family, pets, and the environment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book Pest Control in {loc.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pestTypes.map((pest) => (
                  <div
                    key={pest}
                    className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3"
                  >
                    <CheckCircle className="w-4 h-4 text-success-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-700 font-medium">{pest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Belabloom ────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              The Belabloom Difference in {loc.name}
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              We don't just manage facilities — we become your trusted long-term partner.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <p className="text-primary-200 font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl font-bold text-primary-900 mt-3">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Contact Us', desc: `Fill our quick form or call us. Tell us about your property in ${loc.name} and the service you need.` },
              { step: '02', title: 'Free Inspection', desc: 'Our expert visits your premises, assesses the situation, and recommends the most effective treatment plan.' },
              { step: '03', title: 'Service & Follow-up', desc: 'We carry out the service at your convenience and follow up to ensure 100% satisfaction.' },
            ].map((step) => (
              <div key={step.step} className="relative bg-white rounded-xl p-8 border border-neutral-200 text-center">
                <div className="text-6xl font-bold text-primary-100 mb-4 select-none">{step.step}</div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-10 lg:p-14 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started in {loc.name}?
            </h2>
            <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ clients who trust Belabloom for their facility management needs. Get a free, no-obligation quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91-XXXXXXXXXX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nearby Areas ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">
            Also Serving Nearby Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {locations
              .filter((l) => l.slug !== loc.slug && l.region === loc.region)
              .slice(0, 8)
              .map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 hover:border-primary-400 hover:text-primary-700 text-neutral-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {nearby.name}
                </Link>
              ))}
            <Link
              href="/areas"
              className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 hover:bg-primary-100 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              View all areas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
