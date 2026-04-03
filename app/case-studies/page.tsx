import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { ArrowRight, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    slug: 'nbfc-rapid-branch-expansion',
    title: 'NBFC Branch Network Expansion',
    subtitle: 'From 50 to 250 Branches Across India in 18 Months',
    industry: 'Financial Services',
    impact: '₹28 Cr Savings + 250 Branches',
    featured: true,
  },
  {
    slug: 'healthcare-network-compliance',
    title: 'Multi-Hospital Network Compliance',
    subtitle: 'Simultaneously Upgraded 12 Healthcare Facilities to New Standards',
    industry: 'Healthcare',
    impact: '12 Facilities + 100% Compliance',
    featured: true,
  },
  {
    slug: 'fintech-rapid-scaling',
    title: 'Fintech Company 5X Expansion',
    subtitle: 'Scaled From 50 to 500 People While Maintaining Culture',
    industry: 'IT & Technology',
    impact: '5 Offices + 18% Cost Reduction',
    featured: true,
  },
  {
    slug: 'data-center-operations',
    title: 'Enterprise Data Center Operations',
    subtitle: 'Achieving 99.99% Uptime Across Critical Infrastructure',
    industry: 'IT & Data Centers',
    impact: '99.99% Uptime + ₹500Cr Protected',
    featured: false,
  },
  {
    slug: 'manufacturing-optimization',
    title: 'Manufacturing Plant Efficiency',
    subtitle: 'Reduced Operational Costs by 30% While Increasing Uptime',
    industry: 'Manufacturing',
    impact: '30% Cost Reduction + 95% Uptime',
    featured: false,
  },
]

export const metadata: Metadata = {
  title: 'Case Studies | Belabloom Enterprise Solutions',
  description: 'Real client success stories showing how we solve enterprise facility and operational challenges. Financial services, healthcare, technology, and manufacturing results.',
  openGraph: {
    title: 'Case Studies | Belabloom',
    description: 'Real client success stories and business transformation results.',
    type: 'website',
  },
}

export default function CaseStudiesPage() {
  const featuredCases = caseStudies.filter((cs) => cs.featured)
  const allCases = caseStudies

  return (
    <>
      {/* Hero */}
      <Hero
        title="Success Stories"
        subtitle="Real Results From Organizations Like Yours"
        ctaPrimaryText="Get Consultation"
        ctaPrimaryHref="/contact"
        ctaSecondaryText="Learn More"
        ctaSecondaryHref="#featured"
        trustBadges={[
          { text: '50+ Clients' },
          { text: 'Proven Results' },
          { text: '100% Satisfaction' },
        ]}
      />

      {/* Featured Cases */}
      <section id="featured" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary-900">Featured Case Studies</h2>
            <p className="text-xl text-neutral-600 mt-4">Transformational results across multiple industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCases.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="group"
              >
                <div className="h-full p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg border border-primary-100 hover:shadow-lg hover:border-accent-300 transition-all duration-300">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500 text-white mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-2 line-clamp-2">
                    {caseStudy.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {caseStudy.subtitle}
                  </p>

                  <div className="mb-4 flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded border border-primary-100 mb-4">
                    <p className="text-sm font-semibold text-primary-900">{caseStudy.impact}</p>
                  </div>

                  <div className="flex items-center gap-2 text-accent-600 font-semibold group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">All Case Studies</h2>

          <div className="space-y-4">
            {allCases.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="block"
              >
                <div className="p-6 md:p-8 bg-white rounded-lg border border-neutral-200 hover:border-accent-300 hover:shadow-lg transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-primary-900 group-hover:text-accent-600 transition">
                          {caseStudy.title}
                        </h3>
                        {caseStudy.featured && (
                          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-bold rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>

                      <p className="text-neutral-600 mb-3">{caseStudy.subtitle}</p>

                      <div className="flex flex-wrap gap-3">
                        <span className="text-sm font-medium text-neutral-500">{caseStudy.industry}</span>
                        <span className="text-sm font-bold text-accent-600">{caseStudy.impact}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-accent-600 font-semibold group-hover:translate-x-2 transition-transform">
                      View <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-accent-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Organizations Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">₹200Cr+</div>
              <p className="text-blue-100">In Client Savings</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">Our Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', description: 'Deep understanding of challenges and goals' },
              { step: '2', title: 'Strategy', description: 'Tailored solution design and planning' },
              { step: '3', title: 'Execution', description: 'Expert implementation with accountability' },
              { step: '4', title: 'Success', description: 'Continuous improvement and optimization' },
            ].map((item) => (
              <div key={item.step} className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        heading="Ready to Achieve Your Results?"
        subheading="Let's Start Your Success Story"
        description="Schedule a free consultation to discuss your challenges and explore how we can deliver similar breakthrough results for your organization."
        buttonPrimaryText="Schedule Consultation"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="Explore Services"
        buttonSecondaryHref="/services"
        variant="dark"
      />
    </>
  )
}
