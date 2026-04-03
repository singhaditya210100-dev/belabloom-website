import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ValueCard from '@/components/ValueCard'
import CTABanner from '@/components/CTABanner'
import Testimonial from '@/components/Testimonial'
import { 
  Briefcase, 
  Wrench, 
  Building2, 
  ClipboardCheck,
  Shield,
  Bug,
  Award,
  Users,
  TrendingUp,
  Handshake,
  Leaf
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Belabloom Projects & Facility Management',
  description: 'Professional facility management, pest control, interior setup, and project management services.',
  openGraph: {
    title: 'Services | Belabloom',
    description: 'Professional facility management and project solutions',
  },
}

const services = [
  {
    title: 'Sourcing of Business Spaces',
    description: 'Find the perfect office or commercial space tailored to your business needs.',
    icon: <Building2 className="h-8 w-8" />,
    href: '/services#sourcing',
  },
  {
    title: 'Interior Setup & Project Management',
    description: 'End-to-end project management and interior solutions for your workspace.',
    icon: <Wrench className="h-8 w-8" />,
    href: '/services#interior',
  },
  {
    title: 'Facility Management',
    description: 'Comprehensive facility management to keep your operations running smoothly.',
    icon: <Briefcase className="h-8 w-8" />,
    href: '/services#facility',
  },
  {
    title: 'Audit & Processes',
    description: 'Professional audits and process optimization for operational excellence.',
    icon: <ClipboardCheck className="h-8 w-8" />,
    href: '/services#audit',
  },
  {
    title: 'Fire Safety Equipment',
    description: 'Installation and maintenance of comprehensive fire safety systems.',
    icon: <Shield className="h-8 w-8" />,
    href: '/services#fire-safety',
  },
  {
    title: 'Pest Control Services',
    description: 'Professional pest control and prevention services for safe environments.',
    icon: <Bug className="h-8 w-8" />,
    href: '/services#pest-control',
  },
]

const values = [
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in all operations',
    icon: '⭐',
  },
  {
    title: 'Integrity',
    description: 'Conducting business with honesty and transparency',
    icon: '✋',
  },
  {
    title: 'Client-Centric',
    description: 'Prioritizing client needs and satisfaction',
    icon: '🎯',
  },
  {
    title: 'Collaboration',
    description: 'Fostering teamwork and cooperation',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and solutions',
    icon: '💡',
  },
  {
    title: 'Accountability',
    description: 'Taking responsibility for outcomes',
    icon: '📋',
  },
  {
    title: 'Safety',
    description: 'Prioritizing health and well-being',
    icon: '🛡️',
  },
  {
    title: 'Sustainability',
    description: 'Integrating eco-friendly practices',
    icon: '🌱',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions for all your facility management and project needs"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed to solve your unique business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Transform Your Facility Management?"
        subheading="Let our expert team help you achieve operational excellence"
        buttonText="Schedule a Consultation"
      />
    </>
  )
}
