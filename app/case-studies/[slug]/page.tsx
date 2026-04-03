import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import Testimonial from '@/components/Testimonial'
import { Award, TrendingUp, CheckCircle } from 'lucide-react'

// Case study definitions
const caseStudies: Record<string, any> = {
  'nbfc-rapid-branch-expansion': {
    title: 'NBFC Branch Network Expansion',
    subtitle: 'From 50 to 250 Branches Across India in 18 Months',
    client: 'Leading NBFC (15,000+ employees)',
    industry: 'Financial Services',
    featured: true,

    heroImage: 'bg-gradient-to-br from-blue-900 to-blue-700',

    overview: {
      challenge: 'A rapidly growing NBFC needed to expand its branch network from 50 to 250 locations across India within 18 months as part of their aggressive growth strategy. Each branch required compliance with regulatory standards, brand consistency, and rapid deployment.',
      solution: 'Belabloom managed the complete expansion lifecycle: strategic location sourcing across markets, vendor coordination for interior design and fit-outs, compliance setup, and facility operations handover.',
      results: [
        { metric: '250', description: 'Branches operational on schedule' },
        { metric: '₹28 Cr', description: 'Cost savings through negotiation' },
        { metric: '5.2 Days', description: 'Average branch opening timeline' },
        { metric: '100%', description: 'RBI compliance across all locations' },
      ],
    },

    timeline: [
      { month: 'Month 1-2', title: 'Location Strategy & Sourcing', description: 'Market analysis, location strategy, and sourcing across 25 cities' },
      { month: 'Month 3-6', title: 'Lease Negotiation', description: 'Negotiated favorable lease terms, saving 15-20% on rental costs' },
      { month: 'Month 7-12', title: 'Design & Setup', description: 'Coordinated interior design, vendor management, and branch setup' },
      { month: 'Month 13-18', title: 'Compliance & Launch', description: 'Regulatory compliance, training, and operationalization of all branches' },
    ],

    impact: {
      financial: '₹28 Cr annual savings + 200% growth in branch count',
      operational: 'Reduced branch opening timeline from 60+ days to 5.2 days average',
      strategic: 'Enabled 3-year growth plan while maintaining brand consistency',
    },

    testimonial: {
      quote: 'Belabloom transformed our expansion vision into reality. Managing 250 branches is complex, but their end-to-end approach eliminated coordination headaches. Our team could focus on business growth instead of logistics.',
      author: 'Rajesh Patel',
      title: 'SVP Operations, NBFC',
    },

    keyServices: ['Business Space Sourcing', 'Interior Setup & Project Management', 'Facility Management', 'Audit & Process Optimization'],
  },

  'healthcare-network-compliance': {
    title: 'Multi-Hospital Network Compliance & Upgrade',
    subtitle: 'Simultaneously Upgraded 12 Healthcare Facilities to New Standards',
    client: 'Leading Healthcare Chain (500+ beds)',
    industry: 'Healthcare',
    featured: true,

    heroImage: 'bg-gradient-to-br from-green-900 to-green-700',

    overview: {
      challenge: 'A multi-hospital healthcare network needed to simultaneously upgrade 12 facilities to meet new regulatory compliance standards for patient safety, fire safety, and infection control. Downtime was not an option.',
      solution: 'Belabloom coordinated simultaneous facility upgrades across all 12 hospitals while maintaining operations. This included fire safety system updates, HVAC optimization, waste management systems, and compliance auditing.',
      results: [
        { metric: '12', description: 'Facilities upgraded simultaneously' },
        { metric: '100%', description: 'Regulatory compliance achieved' },
        { metric: '0', description: 'Patient safety incidents' },
        { metric: '18 Months', description: 'Complete transformation' },
      ],
    },

    timeline: [
      { month: 'Month 1-2', title: 'Compliance Audit', description: 'Comprehensive audit of all 12 facilities identifying gaps' },
      { month: 'Month 3-4', title: 'Design & Planning', description: 'Designed facility upgrades maintaining all operations' },
      { month: 'Month 5-16', title: 'Phased Execution', description: 'Coordinated upgrades across all facilities without disruption' },
      { month: 'Month 17-18', title: 'Verification & Certification', description: 'Regulatory inspections and final certifications' },
    ],

    impact: {
      financial: '0% operational downtime achieved',
      operational: 'All facilities passed 100% regulatory inspection',
      strategic: 'Became industry benchmark for safe, compliant healthcare operations',
    },

    testimonial: {
      quote: 'Upgrading 12 hospitals simultaneously could have been a nightmare. Belabloom executed flawlessly - zero downtime, zero patient impact. Their healthcare expertise is exceptional.',
      author: 'Dr. Anjali Nair',
      title: 'Facility Director, Healthcare Chain',
    },

    keyServices: ['Fire Safety Equipment', 'Facility Management', 'Audit & Process Optimization', 'Pest Control'],
  },

  'data-center-operations': {
    title: 'Enterprise Data Center Operations',
    subtitle: 'Achieving 99.99% Uptime Across Critical Infrastructure',
    client: 'Major Enterprise Services Company',
    industry: 'IT & Data Centers',
    featured: false,

    heroImage: 'bg-gradient-to-br from-purple-900 to-purple-700',

    overview: {
      challenge: 'An enterprise with mission-critical data center infrastructure hosting services for 500+ clients needed specialized facility management ensuring 99.99% uptime with zero downtime tolerance.',
      solution: 'Belabloom implemented comprehensive data center facility management including 24/7 operations monitoring, predictive maintenance, redundancy systems, and ISO 27001 compliance.',
      results: [
        { metric: '99.99%', description: 'Uptime achieved (53 mins downtime/year)' },
        { metric: '5-Min', description: 'Maximum alert response time' },
        { metric: '0', description: 'Security incidents or breaches' },
        { metric: '₹500 Cr+', description: 'Infrastructure protected annually' },
      ],
    },

    timeline: [
      { month: 'Month 1', title: 'Assessment & Planning', description: 'Comprehensive infrastructure assessment and management planning' },
      { month: 'Month 2-3', title: 'System Implementation', description: 'Implemented monitoring, redundancy, and response protocols' },
      { month: 'Month 4-6', title: 'Stabilization', description: 'Optimization and team training' },
      { month: 'Month 7+', title: 'Ongoing Operations', description: 'Continuous 24/7 management and optimization' },
    ],

    impact: {
      financial: 'Eliminated downtime risk worth ₹500+ Cr annually',
      operational: 'Improved uptime from 98.5% to 99.99%',
      strategic: 'Became trusted partner for mission-critical infrastructure',
    },

    testimonial: {
      quote: 'Achieving 99.99% uptime is extremely difficult. Belabloom\'s technical expertise and obsessive attention to detail makes it possible. They\'re indispensable to our operations.',
      author: 'Vikram Menon',
      title: 'CTO, Enterprise Services',
    },

    keyServices: ['Facility Management', 'Fire Safety Equipment', 'Audit & Process Optimization'],
  },

  'fintech-rapid-scaling': {
    title: 'Fintech Company 5X Expansion',
    subtitle: 'Scaled From 50 to 500 People While Maintaining Culture and Profitability',
    client: 'Leading Fintech Startup (Now 500+ employees)',
    industry: 'IT & Technology',
    featured: true,

    heroImage: 'bg-gradient-to-br from-orange-900 to-orange-700',

    overview: {
      challenge: 'A high-growth fintech startup needed to expand from 1 office (50 people) to 5 offices (500 people) in 12 months. Managing rapid expansion while maintaining culture and controlling costs was critical.',
      solution: 'Belabloom sourced and set up all 5 offices, managing location selection, interior design, facility setup, and ongoing operations. This allowed the company to focus entirely on product and growth.',
      results: [
        { metric: '5', description: 'New offices opened on schedule' },
        { metric: '500', description: 'Employees accommodated seamlessly' },
        { metric: '18%', description: 'Per-employee facility cost reduction' },
        { metric: '2 Weeks', description: 'Average office setup timeline' },
      ],
    },

    timeline: [
      { month: 'Month 1-2', title: 'Location Strategy', description: 'Identified key tech hubs for office locations' },
      { month: 'Month 3-4', title: 'Space Sourcing', description: 'Sourced 5 prime locations with employee recruitment in mind' },
      { month: 'Month 5-8', title: 'Design & Setup', description: 'Designed agile-friendly workspaces and managed fit-outs' },
      { month: 'Month 9-12', title: 'Operations', description: 'Transitioned to ongoing facility management' },
    ],

    impact: {
      financial: '₹1.5 Cr+ savings through negotiation and optimization',
      operational: 'Seamless scaling with 18% lower per-employee costs',
      strategic: 'Maintained company culture across expanding locations',
    },

    testimonial: {
      quote: 'Scaling 10x is hard enough without worrying about facilities. Belabloom handled everything - location selection, buildout, operations. Our leadership team remained focused on product. Best decision we made.',
      author: 'Priya Sharma',
      title: 'CFO, Fintech Startup',
    },

    keyServices: ['Business Space Sourcing', 'Interior Setup & Project Management', 'Facility Management'],
  },

  'manufacturing-optimization': {
    title: 'Manufacturing Plant Efficiency Transformation',
    subtitle: 'Reduced Operational Costs by 30% While Increasing Uptime',
    client: 'Mid-Size Manufacturing Firm (200+ employees)',
    industry: 'Manufacturing',
    featured: false,

    heroImage: 'bg-gradient-to-br from-amber-900 to-amber-700',

    overview: {
      challenge: 'A manufacturing plant was experiencing high unplanned downtime (18% annually), rising operational costs, and regulatory compliance challenges. Production was losing ₹5+ lakhs per hour during outages.',
      solution: 'Belabloom implemented comprehensive facility management with proactive maintenance, process optimization, cost reduction initiatives, and compliance auditing. Transformed operations from reactive to preventive.',
      results: [
        { metric: '95%+', description: 'Uptime achieved (18% to 4% downtime)' },
        { metric: '30%', description: 'Operational cost reduction' },
        { metric: '₹20 Cr+', description: 'Annual production value protected' },
        { metric: '₹6 Cr+', description: 'Annual cost savings' },
      ],
    },

    timeline: [
      { month: 'Month 1', title: 'Operations Audit', description: 'Comprehensive assessment of plant operations and inefficiencies' },
      { month: 'Month 2-3', title: 'Process Redesign', description: 'Designed optimized maintenance and operational processes' },
      { month: 'Month 4-6', title: 'Implementation', description: 'Rolled out new processes, training, and systems' },
      { month: 'Month 7+', title: 'Continuous Improvement', description: 'Ongoing optimization and performance monitoring' },
    ],

    impact: {
      financial: '₹6 Cr+ annual savings through efficiency improvements',
      operational: 'Increased uptime from 82% to 95%+',
      strategic: 'Became highly profitable and competitive',
    },

    testimonial: {
      quote: 'Our plant was hemorrhaging money with downtime and inefficiency. Belabloom identified root causes and implemented lasting solutions. 30% cost reduction while improving production. Exceptional results.',
      author: 'Suresh Desai',
      title: 'Plant Manager, Manufacturing Firm',
    },

    keyServices: ['Facility Management', 'Audit & Process Optimization', 'Fire Safety Equipment'],
  },
}

function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Case Study Not Found</h1>
          <p className="text-neutral-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies" className="text-accent-500 font-semibold hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <Hero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        ctaPrimaryText="Get Consultation"
        ctaPrimaryHref="/contact"
        ctaSecondaryText="View Other Cases"
        ctaSecondaryHref="/case-studies"
      />

      {/* Client Info */}
      <section className="py-8 md:py-12 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-accent-600 font-semibold uppercase tracking-wider mb-1">Client</p>
              <p className="text-2xl font-bold text-primary-900">{caseStudy.client}</p>
            </div>
            <div>
              <p className="text-sm text-accent-600 font-semibold uppercase tracking-wider mb-1">Industry</p>
              <p className="text-2xl font-bold text-primary-900">{caseStudy.industry}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">The Challenge</h2>
              <p className="text-neutral-700 leading-relaxed">
                {caseStudy.overview.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Solution</h2>
              <p className="text-neutral-700 leading-relaxed">
                {caseStudy.overview.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 to-accent-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Results Achieved</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.overview.results.map((result: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{result.metric}</div>
                <p className="text-blue-100">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">Project Timeline</h2>

          <div className="space-y-8">
            {caseStudy.timeline.map((phase: any, idx: number) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                <div className="md:col-span-1">
                  <p className="font-bold text-accent-600">{phase.month}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{phase.title}</h3>
                  <p className="text-neutral-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">Business Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Financial</p>
              <p className="text-2xl font-bold text-primary-900">{caseStudy.impact.financial}</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Operational</p>
              <p className="text-2xl font-bold text-primary-900">{caseStudy.impact.operational}</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <Award className="h-8 w-8 text-purple-600 mb-4" />
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Strategic</p>
              <p className="text-2xl font-bold text-primary-900">{caseStudy.impact.strategic}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 bg-white rounded-lg shadow-lg border-t-4 border-accent-500">
            <p className="text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed mb-8">
              "{caseStudy.testimonial.quote}"
            </p>

            <div>
              <p className="font-bold text-primary-900 text-lg">{caseStudy.testimonial.author}</p>
              <p className="text-neutral-600">{caseStudy.testimonial.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8">Services Delivered</h2>

          <div className="flex flex-wrap gap-4">
            {caseStudy.keyServices.map((service: string, idx: number) => (
              <div key={idx} className="px-6 py-3 bg-primary-100 border border-primary-300 rounded-full text-primary-900 font-medium">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <CTABanner
        heading="Ready to Transform Your Operations?"
        subheading="Let's Discuss Your Specific Challenges"
        description="Schedule a free consultation with our experts to understand how we can deliver similar results for your organization."
        buttonPrimaryText="Schedule Consultation"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="View Other Cases"
        buttonSecondaryHref="/case-studies"
        variant="dark"
      />
    </>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The case study you are looking for does not exist.',
    }
  }

  return {
    title: `${caseStudy.title} | Belabloom Case Studies`,
    description: `${caseStudy.subtitle} - Learn how ${caseStudy.client} achieved results with Belabloom.`,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.subtitle,
      type: 'website',
    },
  }
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export default CaseStudyPage
