import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import {
  Building2, Wrench, Briefcase, ClipboardCheck,
  Shield, Bug, CheckCircle, ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Belabloom Projects & Facility Management',
  description:
    'End-to-end facility management services — space sourcing, interior setup, housekeeping, pest control, fire safety, audits, and more. Trusted by 500+ companies.',
  openGraph: {
    title: 'Services | Belabloom',
    description:
      'Comprehensive facility management and project solutions for regulated industries.',
    url: 'https://www.belabloom.com/services',
    type: 'website',
  },
}

const SERVICES = [
  {
    id: 'sourcing',
    title: 'Sourcing of Business Spaces',
    tagline: 'Finding the right commercial space can define the future of your business.',
    description:
      'We assist you in identifying, evaluating, and securing business spaces that fit your operational, financial, and strategic needs. Whether it\'s an office, retail outlet, warehouse, or facility — we ensure every location aligns with your vision.',
    items: [
      'Space identification & shortlisting',
      'Site visits & evaluations',
      'Market analysis & pricing insights',
      'Negotiation support',
      'Documentation guidance',
    ],
    icon: <Building2 className="h-8 w-8" />,
    accent: 'bg-blue-50 text-blue-700',
  },
  {
    id: 'interior',
    title: 'Interior Setup & Project Management',
    tagline: 'Transform your space into a functional, aesthetic, and brand-aligned environment.',
    description:
      'Our interior setup and project management solutions take care of the entire lifecycle — from design planning to final execution. We deliver on time and within budget.',
    items: [
      'Concept design & layout planning',
      'Modular furniture & workstation setup',
      'Civil, electrical, and plumbing work',
      'IT infrastructure setup',
      'On-site project supervision',
      'Quality checks & timely delivery',
    ],
    icon: <Wrench className="h-8 w-8" />,
    accent: 'bg-amber-50 text-amber-700',
  },
  {
    id: 'facility',
    title: 'Facility Management',
    tagline: 'Create a workspace that operates smoothly every day.',
    description:
      'Our integrated facility management services ensure operational efficiency, reduced downtime, and a healthy work environment — delivered 24/7 by a dedicated operations team.',
    items: [
      'Housekeeping & cleaning management',
      'Technical maintenance (HVAC, electrical, plumbing, DG sets)',
      'Vendor & asset management',
      'Security & support staff',
      'Soft and hard services management',
    ],
    icon: <Briefcase className="h-8 w-8" />,
    accent: 'bg-green-50 text-green-700',
  },
  {
    id: 'audit',
    title: 'Audit & Processes',
    tagline: 'Improve efficiency with well-defined systems and transparent processes.',
    description:
      'We help organisations streamline workflows through structured audits and actionable process recommendations. Every engagement results in measurable improvements.',
    items: [
      'Operational audits',
      'Facility audits',
      'Compliance checks',
      'Process GAP analysis',
      'SOP creation & implementation',
    ],
    icon: <ClipboardCheck className="h-8 w-8" />,
    accent: 'bg-purple-50 text-purple-700',
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety Equipment',
    tagline: 'Safety is non-negotiable.',
    description:
      'We supply and install certified fire safety equipment that protects your business, employees, and assets from potential hazards — with full regulatory compliance guaranteed.',
    items: [
      'Fire extinguishers (supply & refilling)',
      'Fire alarm systems',
      'Hydrant & sprinkler systems',
      'Emergency exit signage',
      'Annual maintenance contracts (AMC)',
    ],
    icon: <Shield className="h-8 w-8" />,
    accent: 'bg-red-50 text-red-700',
  },
  {
    id: 'pest-control',
    title: 'Pest Control Services',
    tagline: 'Ensure a clean, hygienic, and pest-free environment for your workplace.',
    description:
      'Our professional pest control services are safe, effective, and tailored to your business requirements — with minimal disruption to your daily operations.',
    items: [
      'Cockroach & ant control',
      'Rodent control',
      'Termite treatment (pre & post construction)',
      'Mosquito & fly control',
      'Commercial pest management plans (AMC)',
    ],
    icon: <Bug className="h-8 w-8" />,
    accent: 'bg-teal-50 text-teal-700',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="At Belabloom Projects & Facility Management, we provide end-to-end business solutions designed to streamline operations, enhance workplace efficiency, and create safer, more productive environments."
        ctaPrimaryText="Get Free Assessment"
        ctaPrimaryHref="/contact"
        ctaSecondaryText="Talk to an Expert"
        ctaSecondaryHref="tel:+91"
        trustBadges={[
          { text: '500+ Companies Served' },
          { text: 'ISO Certified' },
          { text: 'Pan-India Coverage' },
        ]}
      />

      {/* Services grid overview */}
      <section className="py-12 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-accent-400 hover:text-accent-600 transition"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl mb-6 ${service.accent}`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-lg font-medium text-accent-600 mb-4">{service.tagline}</p>
                <p className="text-neutral-600 leading-relaxed mb-8">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''} bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm`}>
                <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-5">
                  What we cover
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-accent-500" />
                      </span>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        heading="Ready to Transform Your Facility Operations?"
        subheading="Get Started Today"
        description="Join 500+ companies optimising their operations with Belabloom. Get a free facility assessment and discover your savings potential."
        buttonPrimaryText="Get Free Assessment"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="Speak With an Expert"
        buttonSecondaryHref="tel:+91"
        variant="dark"
      />
    </>
  )
}
