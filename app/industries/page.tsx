import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { Building2, Zap, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries | Belabloom Projects & Facility Management',
  description: 'Serving diverse industries with tailored facility management and project solutions.',
  openGraph: {
    title: 'Industries We Serve | Belabloom',
    description: 'expert facility management across multiple sectors',
  },
}

const industries = [
  {
    icon: <Building2 className="h-12 w-12" />,
    title: 'Corporate & Office Spaces',
    description: 'Professional facility management for corporate offices, co-working spaces, and business centers.',
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    title: 'Retail & Commercial',
    description: 'Comprehensive services for retail outlets, shopping centers, and commercial establishments.',
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: 'Manufacturing & Industrial',
    description: 'Specialized solutions for manufacturing plants, warehouses, and industrial facilities.',
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: 'Education & Institutions',
    description: 'Complete facility management for schools, colleges, and educational institutions.',
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: 'Healthcare & Wellness',
    description: 'Specialized services for hospitals, clinics, and healthcare facilities.',
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    title: 'Hospitality & Restaurants',
    description: 'Professional management for hotels, restaurants, and hospitality businesses.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Industries We Serve"
        subtitle="Expert facility management solutions across diverse sectors"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sector Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with organizations across industries, providing customized facility management 
              and project solutions tailored to sector-specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition border-2 border-gray-200 hover:border-primary-500"
              >
                <div className="text-primary-600 mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Industry-Specific Solutions
          </h2>

          <div className="space-y-8">
            {industries.map((industry, index) => (
              <div key={industry.title} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-primary-600">{index + 1}.</span>
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Customized facility management plans</li>
                  <li>Regular maintenance and inspections</li>
                  <li>Emergency response protocols</li>
                  <li>Compliance and regulatory adherence</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Tailored Solutions for Your Industry"
        subheading="Let's discuss how we can serve your organization better"
        buttonText="Get Industry-Specific Proposal"
      />
    </>
  )
}
