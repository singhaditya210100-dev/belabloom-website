import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import IndustryCard from '@/components/IndustryCard'
import CTABanner from '@/components/CTABanner'
import TrustIndicators from '@/components/TrustIndicators'
import { ProcessSection } from '@/components/ProcessStep'
import Testimonial from '@/components/Testimonial'
import {
  Building2,
  HardHat,
  Shield,
  Layout,
  Wrench,
  BarChart3,
  CheckCircle,
  Zap,
  Award,
  TrendingUp,
  Users,
  Clock,
  Briefcase,
  Building,
  Stethoscope,
  Factory,
  Code,
  Database,
  BarChart4,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Belabloom | Enterprise Facility Management & Project Solutions',
  description:
    'All-in-one facilities partner for regulated industries. Space sourcing, project management, facility operations & compliance. Trusted by 500+ companies.',
  openGraph: {
    title: 'Belabloom - Enterprise Facility Management Solutions',
    description:
      'Facility management, project management & business space sourcing for financial services, tech, healthcare and more',
    url: 'https://www.belabloom.com',
    type: 'website',
  },
  keywords: [
    'facility management',
    'project management',
    'business space sourcing',
    'enterprise facility services',
    'compliance facility management',
  ],
}

const services = [
  {
    title: 'Business Space Sourcing',
    description: 'Find the best office locations aligned with your operational needs and growth plans.',
    benefit1: 'Strategic site evaluation',
    benefit2: 'Negotiation support',
    benefit3: 'Long-term value optimization',
    icon: <Building2 className="h-8 w-8" />,
    href: '#',
  },
  {
    title: 'Interior Setup & Project Management',
    description: 'Transform spaces into functional, inspiring workplaces with precise timeline management.',
    benefit1: 'Vendor coordination',
    benefit2: 'Budget control',
    benefit3: 'Quality assurance',
    icon: <Wrench className="h-8 w-8" />,
    href: '#',
  },
  {
    title: 'Facility Management',
    description: 'Comprehensive 24/7 operations management keeping your facilities efficient and secure.',
    benefit1: '24/7 support available',
    benefit2: 'Proactive maintenance',
    benefit3: 'Cost optimization',
    icon: <HardHat className="h-8 w-8" />,
    href: '#',
  },
  {
    title: 'Fire Safety Equipment',
    description: 'Installation, inspection and maintenance of fire protection systems for complete compliance.',
    benefit1: 'Regulatory certified',
    benefit2: 'Emergency ready',
    benefit3: 'Full compliance assured',
    icon: <Shield className="h-8 w-8" />,
    href: '#',
  },
  {
    title: 'Audit & Process',
    description: 'Strengthen operational efficiency through structured audits and process evaluation.',
    benefit1: 'Gap identification',
    benefit2: 'Workflow improvement',
    benefit3: 'Regulatory compliance',
    icon: <BarChart3 className="h-8 w-8" />,
    href: '#',
  },
  {
    title: 'Insurance Advisory',
    description: 'Tailored insurance support and advisory services protecting your assets and workforce.',
    benefit1: 'Risk mitigation',
    benefit2: 'Suitable coverage',
    benefit3: 'Long-term stability',
    icon: <Briefcase className="h-8 w-8" />,
    href: '#',
  },
  {
    title: 'Pest Control',
    description: 'Professional, environmentally responsible pest management for clean work environments.',
    benefit1: 'Proactive prevention',
    benefit2: 'Safe methods',
    benefit3: 'Disruption-free',
    icon: <Zap className="h-8 w-8" />,
    href: '#',
  },
]

const industries = [
  {
    name: 'Financial Services',
    description: 'NBFC, Wealth Management, Insurance - Compliant workplaces for regulated finance.',
    clientCount: 50,
    icon: <Briefcase className="h-6 w-6" />,
    keyServices: ['Branch Sourcing', 'Compliance', 'Facility Management'],
    href: '#',
  },
  {
    name: 'IT & Technology',
    description: 'SaaS, IT-Enabled Services - Modern, scalable offices powering innovation.',
    clientCount: 45,
    icon: <Code className="h-6 w-6" />,
    keyServices: ['Flexible Offices', 'Maintenance', 'Pest Control'],
    href: '#',
  },
  {
    name: 'Data Centers',
    description: 'Cloud Infrastructure - Critical facility management for uptime & data integrity.',
    clientCount: 12,
    icon: <Database className="h-6 w-6" />,
    keyServices: ['Site Sourcing', 'Fire Safety', 'Audits'],
    href: '#',
  },
  {
    name: 'Healthcare',
    description: 'Clinics & Healthcare IT - Patient-ready, compliant environments and interiors.',
    clientCount: 25,
    icon: <Stethoscope className="h-6 w-6" />,
    keyServices: ['Medical-Grade Mgmt', 'Pest Control', 'Fire Safety'],
    href: '#',
  },
  {
    name: 'Manufacturing',
    description: 'Mining & Minerals - Rugged solutions for remote, capital-intensive operations.',
    clientCount: 18,
    icon: <Factory className="h-6 w-6" />,
    keyServices: ['Site Management', 'Equipment Upkeep', 'Audits'],
    href: '#',
  },
  {
    name: 'Housing Finance',
    description: 'Financial Institutions - Trust-building, efficient branch and office networks.',
    clientCount: 22,
    icon: <Building className="h-6 w-6" />,
    keyServices: ['Branch Design', 'Facility Ops', 'Audit & Safety'],
    href: '#',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Understanding Your Needs',
    description: 'We analyze your specific requirements, challenges, and operational objectives.',
    icon: <Users className="h-5 w-5" />,
  },
  {
    step: 2,
    title: 'Strategic Solution Design',
    description: 'Custom solutions tailored to your industry, scale, and compliance requirements.',
    icon: <Layout className="h-5 w-5" />,
  },
  {
    step: 3,
    title: 'Seamless Implementation',
    description: 'Expert coordination and execution with minimal disruption to your operations.',
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    step: 4,
    title: 'Ongoing Excellence',
    description: '24/7 support, continuous optimization, and regular performance reviews.',
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

const testimonials = [
  {
    quote:
      "Belabloom's integrated approach to sourcing and facility management transformed our operations. Their compliance expertise is unmatched in our industry.",
    author: 'Rajesh Patel',
    title: 'VP Operations, Edelweiss Financial Services',
  },
  {
    quote:
      'From branch sourcing to ongoing management, Belabloom handles everything flawlessly. Reduced our operational costs by 28% in the first year.',
    author: 'Priya Sharma',
    title: 'Operations Head, Nuvama Wealth Management',
  },
  {
    quote:
      'Their fire safety and audit protocols kept us fully compliant during regulatory inspections. Highly professional team, responsive support.',
    author: 'Amit Kumar',
    title: 'Facility Manager, Tata AIG Insurance',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        title="Enterprise Facility Solutions for Growing Companies"
        subtitle="All-in-one facilities partner combining space sourcing, project management, compliance audits, and 24/7 operations. Trusted by 500+ companies across financial services, tech, healthcare, and manufacturing."
        ctaPrimaryText="Get Free Assessment"
        ctaPrimaryHref="/contact"
        ctaSecondaryText="Explore Services"
        ctaSecondaryHref="#services"
        trustBadges={[
          { text: 'Trusted by 500+ Companies' },
          { text: 'ISO Certified Operations' },
          { text: 'Enterprise-Grade Service' },
        ]}
        highlightedBenefit="Reduce operational costs while ensuring full regulatory compliance"
      />

      {/* TRUST INDICATORS */}
      <TrustIndicators
        stats={[
          {
            number: '500+',
            label: 'Companies Served Across Industries',
            icon: <Users className="h-6 w-6" />,
          },
          {
            number: '99.5%',
            label: 'Client Satisfaction Rate',
            icon: <Award className="h-6 w-6" />,
          },
          {
            number: '24/7',
            label: 'Support & Emergency Response',
            icon: <Clock className="h-6 w-6" />,
          },
        ]}
        certifications={['ISO 9001:2015', 'OHSAS 18001', 'Fire Safety Certified', 'Regulatory Compliant']}
        showClientLogos={true}
      />

      {/* WHY BELABLOOM SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Why Industry Leaders Choose Belabloom
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Single vendor for complete facilities management. From sourcing to 24/7 operations, we eliminate complexity while ensuring excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">End-to-End Integration</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Sourcing → Build → Manage — one trusted partner for your complete facility lifecycle. Eliminates vendor complexity.
              </p>
            </div>

            <div className="p-8 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Compliance Expertise</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Deep expertise in regulated industries. Fire safety, audits, insurance, and all compliance needs covered.
              </p>
            </div>

            <div className="p-8 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600 mb-4">
                <BarChart4 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Cost Optimization</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Average 25-30% operational cost reduction through proactive management and process optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Our Comprehensive Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Seven integrated services covering every aspect of enterprise facility management and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition"
            >
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section id="industries" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Specialized expertise across financial services, technology, healthcare, manufacturing, and more. Industry-specific solutions tailored to your compliance and operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition"
            >
              Explore All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <ProcessSection
        title="How We Deliver Excellence"
        subtitle="Our proven 4-step process ensures seamless transformation and lasting results"
        steps={processSteps}
      />

      {/* FEATURED ROI SECTION */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Real Results for Real Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-base">
              <div className="text-4xl font-bold text-accent-500 mb-2">28%</div>
              <p className="text-neutral-600 font-semibold mb-3">Cost Reduction in Year 1</p>
              <p className="text-neutral-500 text-sm">
                Average operational cost savings through proactive facility management and process optimization.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-base">
              <div className="text-4xl font-bold text-accent-500 mb-2">5.2 days</div>
              <p className="text-neutral-600 font-semibold mb-3">Average Space Sourcing</p>
              <p className="text-neutral-500 text-sm">
                From search to contract signature. Strategic sourcing reducing vacancy gaps and relocation delays.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-base">
              <div className="text-4xl font-bold text-accent-500 mb-2">100%</div>
              <p className="text-neutral-600 font-semibold mb-3">Compliance Achievement</p>
              <p className="text-neutral-500 text-sm">
                Zero regulatory violations across 500+ client operations. Audit-ready systems and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-xl text-neutral-600">
              Hear from companies transforming their operations with Belabloom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Testimonial key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION: Enterprise Scale */}
      <CTABanner
        heading="Scale Your Operations with Confidence"
        subheading="For Enterprise & Multi-Site Operations"
        description="Whether managing 1 or 1000+ locations, Belabloom scales with you. Centralized oversight, consistent excellence, unified compliance."
        buttonPrimaryText="Schedule Strategy Call"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="Download Enterprise Guide"
        buttonSecondaryHref="#"
        variant="dark"
        icon={<BarChart3 className="h-6 w-6" />}
      />

      {/* RESOURCES/BLOG PREVIEW */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Industry Insights & Resources
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
              Stay updated with facility management best practices, compliance updates, and industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-base hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-primary-100 to-accent-100" />
                <div className="p-6">
                  <div className="text-sm font-semibold text-accent-600 mb-2 uppercase">Industry Insight</div>
                  <h3 className="text-lg font-bold text-primary-900 mb-3">
                    Coming Soon: Expert Articles & Guides
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Subscribe to our blog for facility management tips, compliance updates, and business insights.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        heading="Ready to Transform Your Facility Operations?"
        subheading="Get Started Today"
        description="Join 500+ companies optimizing their operations with Belabloom. Get a free facility assessment to discover savings potential."
        buttonPrimaryText="Get Free Assessment"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="Speak With an Expert"
        buttonSecondaryHref="tel:+91"
        variant="accent"
        icon={<CheckCircle className="h-6 w-6" />}
      />
    </>
  )
}
