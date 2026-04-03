import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import Testimonial from '@/components/Testimonial'
import {
  Building2,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Award,
} from 'lucide-react'

// Service definitions
const servicesData: Record<string, any> = {
  'business-space-sourcing': {
    title: 'Business Space Sourcing',
    shortTitle: 'Space Sourcing',
    heroSubtitle: 'Find Perfect Office Locations That Align With Your Operational Needs',
    description: 'Strategic site evaluation, negotiation support, and long-term value optimization.',
    benefit1: 'Strategic site evaluation',
    benefit2: 'Negotiation support',
    benefit3: 'Long-term value optimization',
    icon: Building2,
    color: 'from-blue-500 to-blue-700',
    
    challenges: [
      'Finding ideal locations that fit budget and operational requirements',
      'Lengthy negotiation processes delaying expansion plans',
      'Hidden costs and long-term value misalignment',
      'Managing multiple stakeholders and requirements',
    ],
    
    solution: {
      intro: 'We streamline your space sourcing process from search to handover:',
      steps: [
        { title: 'Requirements Analysis', description: 'Deep understanding of your space needs, budget, and strategic objectives' },
        { title: 'Market Research', description: 'Comprehensive market evaluation identifying top opportunities' },
        { title: 'Site Evaluation', description: 'Professional assessment of locations, infrastructure, and compliance' },
        { title: 'Negotiation Support', description: 'Expert negotiation to secure favorable terms and pricing' },
      ],
    },

    benefits: [
      { title: 'Faster Deployment', description: 'Average 5.2 days from search to contract signature' },
      { title: 'Cost Optimization', description: 'Negotiate better rates saving 15-25% on lease costs' },
      { title: 'Risk Mitigation', description: 'Compliance verification prevents future operational issues' },
      { title: 'Strategic Growth', description: 'Locations chosen for long-term business expansion' },
      { title: 'Market Expertise', description: '100+ locations assessed across key business hubs' },
      { title: 'End-to-End Support', description: 'From site finding through lease execution' },
    ],

    industries: [
      'Financial Services (NBFCs, Wealth Management)',
      'IT & Technology (Startups, Established Firms)',
      'Healthcare (Clinics, Diagnostic Centers)',
      'Manufacturing (HQs, Regional Offices)',
    ],

    testimonial: {
      quote: 'Belabloom replaced our 4-month sourcing cycle with a 2-week process. They handled everything - from site evaluation to final lease terms. Saved us ₹40 lakhs annually.',
      author: 'Priya Sharma',
      title: 'VP Operations, Nuvama Wealth Management',
    },

    caseStudy: {
      title: 'Case Study: Rapid NBFC Expansion',
      description: 'Multi-city branch sourcing for a leading NBFC requiring compliance and brand alignment across all locations.',
    },
  },

  'interior-setup-project-management': {
    title: 'Interior Setup & Project Management',
    shortTitle: 'Project Management',
    heroSubtitle: 'Transform Spaces Into Functional, Inspiring Workplaces On Time & Within Budget',
    description: 'Vendor coordination, budget control, quality assurance. Complete project oversight from fit-outs to refurbishments.',
    benefit1: 'Vendor coordination',
    benefit2: 'Budget control',
    benefit3: 'Quality assurance',
    icon: Zap,
    color: 'from-orange-500 to-orange-700',

    challenges: [
      'Managing multiple vendors and contractors causing delays',
      'Budget overruns and scope creep during projects',
      'Quality inconsistencies affecting workspace functionality',
      'Timeline delays impacting business operations',
    ],

    solution: {
      intro: 'Our end-to-end project management ensures flawless execution:',
      steps: [
        { title: 'Planning & Design', description: 'Detailed project planning with stakeholder alignment and design finalization' },
        { title: 'Vendor Management', description: 'Coordinated vendor selection, negotiation, and performance management' },
        { title: 'Quality Control', description: 'Regular inspections and quality audits throughout project execution' },
        { title: 'Timeline Management', description: 'Strict timeline adherence with contingency planning for risks' },
      ],
    },

    benefits: [
      { title: 'On-Time Delivery', description: '95%+ projects completed within agreed timelines' },
      { title: 'Budget Adherence', description: 'Average 8-12% cost savings through vendor negotiation' },
      { title: 'Quality Assured', description: 'Multi-point quality checks ensure premium results' },
        { title: 'Minimal Disruption', description: 'Strategic planning minimizes impact on ongoing operations' },
        { title: 'Single Point Contact', description: 'One coordinator manages all vendors and stakeholders' },
        { title: 'Compliance Ready', description: 'All safety and regulatory requirements met' },
      ],

    industries: [
      'Corporate Offices (Fitouts & Refurbishments)',
      'Retail (Branch Expansions)',
      'Healthcare (Clinical Setup)',
      'Financial (Branch Networks)',
    ],

    testimonial: {
      quote: 'Their project management saved us 3 months and ₹25 lakhs. The coordination was seamless - we barely had to intervene. Professional team.',
      author: 'Rajesh Kumar',
      title: 'Operations Manager, Leading Retail Chain',
    },

    caseStudy: {
      title: 'Case Study: 50-Location Rollout',
      description: 'Coordinated interior setup and fit-out for 50 retail locations across 8 cities with centralized quality control.',
    },
  },

  'facility-management': {
    title: 'Facility Management',
    shortTitle: 'Facility Management',
    heroSubtitle: 'Keep Your Operations Running Flawlessly With 24/7 Professional Facility Management',
    description: 'Comprehensive 24/7 operations management for efficient, secure facilities. Proactive maintenance, emergency response, cost optimization.',
    benefit1: '24/7 support available',
    benefit2: 'Proactive maintenance',
    benefit3: 'Cost optimization',
    icon: Clock,
    color: 'from-green-500 to-green-700',

    challenges: [
      'Unplanned downtime disrupting business operations',
      'Fragmented vendor management increasing costs',
      'Compliance and safety violations during operations',
      'Lack of preventive maintenance causing emergencies',
    ],

    solution: {
      intro: 'Comprehensive facility management with proactive oversight:',
      steps: [
        { title: 'Preventive Maintenance', description: 'Scheduled maintenance preventing breakdowns and emergencies' },
        { title: 'Vendor Coordination', description: 'Centralized management of all facility service vendors' },
        { title: '24/7 Emergency Response', description: 'Round-the-clock support for critical facility issues' },
        { title: 'Compliance Management', description: 'Regular audits ensuring all safety and regulatory standards' },
      ],
    },

    benefits: [
      { title: '99.5% Uptime', description: 'Proactive maintenance minimizes unplanned downtime' },
      { title: '28% Cost Reduction', description: 'Average annual savings through optimization and efficiency' },
      { title: '24/7 Support', description: 'Immediate emergency response and issue resolution' },
      { title: 'Regulatory Compliance', description: '100% audit-ready facilities with zero violations' },
        { title: 'Single Point Accountability', description: 'One vendor manages all facility operations' },
        { title: 'Scalable Solution', description: 'Grows with your multiple locations seamlessly' },
      ],

    industries: [
      'Financial Services (Offices & Branches)',
      'IT Companies (Data Centers & Offices)',
      'Healthcare (Clinical Facilities)',
      'Manufacturing (Plant Operations)',
    ],

    testimonial: {
      quote: 'We went from managing 5 different vendors to one trusted partner. Costs dropped 30%, uptime increased to 99.5%. Best decision we made.',
      author: 'Amit Desai',
      title: 'Facility Director, Tech Company',
    },

    caseStudy: {
      title: 'Case Study: Enterprise Multi-Site Operations',
      description: 'Managing facility operations across 45 locations for a financial services firm, reducing costs while improving compliance.',
    },
  },

  'fire-safety-equipment': {
    title: 'Fire Safety Equipment',
    shortTitle: 'Fire Safety',
    heroSubtitle: 'Protect Your People and Assets With Certified Fire Safety Solutions',
    description: 'Installation, inspection and maintenance of fire protection systems. Full regulatory compliance and emergency readiness.',
    benefit1: 'Regulatory certified',
    benefit2: 'Emergency ready',
    benefit3: 'Full compliance assured',
    icon: Award,
    color: 'from-red-500 to-red-700',

    challenges: [
      'Complex fire safety regulations across different industries',
      'Regular equipment maintenance and inspection requirements',
      'Potential gaps in emergency preparedness',
      'Compliance documentation and audit readiness',
    ],

    solution: {
      intro: 'Complete fire safety solutions ensuring compliance and readiness:',
      steps: [
        { title: 'Safety Audit', description: 'Comprehensive fire safety assessment identifying gaps' },
        { title: 'System Installation', description: 'Professional installation of certified fire protection systems' },
        { title: 'Regular Maintenance', description: 'Scheduled inspections and maintenance keeping systems operational' },
        { title: 'Compliance Documentation', description: 'Complete documentation ensuring regulatory audit readiness' },
      ],
    },

    benefits: [
      { title: 'Full Certification', description: 'All systems installed per ISO and industry standards' },
      { title: 'Regular Inspections', description: 'Monthly/quarterly inspections ensuring equipment functionality' },
      { title: 'Audit Readiness', description: 'Complete compliance documentation for regulatory inspections' },
      { title: 'Emergency Response', description: 'System performance validated for emergency scenarios' },
        { title: 'Staff Training', description: 'Employee training on fire safety procedures' },
        { title: 'Zero Violations', description: 'Compliance history with no regulatory findings' },
      ],

    industries: [
      'Healthcare Facilities',
      'Data Centers',
      'Financial Institutions',
      'Manufacturing Plants',
    ],

    testimonial: {
      quote: 'Their fire safety system kept us fully compliant during a regulatory inspection with zero findings. We trust them completely.',
      author: 'Vikram Singh',
      title: 'Compliance Officer, Tata AIG',
    },

    caseStudy: {
      title: 'Case Study: Healthcare Network Compliance',
      description: 'Fire safety system upgrade across 12 healthcare facilities ensuring regulatory compliance and staff safety.',
    },
  },

  'audit-process': {
    title: 'Audit & Process Optimization',
    shortTitle: 'Audit & Process',
    heroSubtitle: 'Strengthen Operations Through Structured Audits and Process Optimization',
    description: 'Procedural, statutory, and quality compliance audits. Gap identification, workflow improvement, regulatory assurance.',
    benefit1: 'Gap identification',
    benefit2: 'Workflow improvement',
    benefit3: 'Regulatory compliance',
    icon: CheckCircle,
    color: 'from-purple-500 to-purple-700',

    challenges: [
      'Inconsistent operational procedures across locations',
      'Regulatory compliance gaps and violations',
      'Inefficient workflows increasing operational costs',
      'Lack of systematic audit and improvement processes',
    ],

    solution: {
      intro: 'Strategic audit and optimization framework:',
      steps: [
        { title: 'Comprehensive Audit', description: 'Detailed assessment of all operational procedures and compliance areas' },
        { title: 'Gap Analysis', description: 'Identification of gaps between current and required standards' },
        { title: 'Process Redesign', description: 'Development of optimized procedures improving efficiency' },
        { title: 'Implementation & Monitoring', description: 'Rollout of new processes with ongoing performance monitoring' },
      ],
    },

    benefits: [
      { title: 'Compliance Assurance', description: 'Procedures aligned with regulatory and industry requirements' },
      { title: 'Efficiency Gains', description: 'Process optimization reducing operational time by 20-30%' },
      { title: 'Cost Reduction', description: 'Streamlined workflows reducing operational expenses' },
      { title: 'Risk Mitigation', description: 'Systematic processes reducing operational risks' },
        { title: 'Team Capability', description: 'Trained teams executing optimized processes effectively' },
        { title: 'Audit Ready', description: 'Documentation and controls ensuring regulatory audit success' },
      ],

    industries: [
      'Financial Services',
      'Healthcare',
      'Manufacturing',
      'Business Services',
    ],

    testimonial: {
      quote: 'The audit identified 23 compliance gaps we didn\'t know about. Their process optimization saved us ₹15 lakhs annually.',
      author: 'Neha Sharma',
      title: 'Compliance Director, Financial Institution',
    },

    caseStudy: {
      title: 'Case Study: Regulatory Compliance Transformation',
      description: 'Complete operational audit and process redesign for NBFC ensuring full regulatory compliance and operational efficiency.',
    },
  },

  'insurance-advisory': {
    title: 'Insurance Advisory',
    shortTitle: 'Insurance Advisory',
    heroSubtitle: 'Navigate Risk Through Tailored Insurance Support and Advisory Services',
    description: 'Risk mitigation strategy, coverage recommendations, insurance consulting. Protect assets, workforce, and business continuity.',
    benefit1: 'Risk mitigation',
    benefit2: 'Suitable coverage',
    benefit3: 'Long-term stability',
    icon: TrendingUp,
    color: 'from-indigo-500 to-indigo-700',

    challenges: [
      'Identifying appropriate insurance coverage for business risks',
      'Managing claims and policy administration',
      'Ensuring adequate protection against operational exposures',
      'Navigating complex insurance options and requirements',
    ],

    solution: {
      intro: 'Comprehensive insurance advisory and risk management:',
      steps: [
        { title: 'Risk Assessment', description: 'Detailed analysis of business exposures and coverage needs' },
        { title: 'Coverage Planning', description: 'Recommendation of appropriate insurance products' },
        { title: 'Policy Negotiation', description: 'Securing optimal terms and pricing with insurers' },
        { title: 'Ongoing Management', description: 'Claims support and policy administration throughout coverage period' },
      ],
    },

    benefits: [
      { title: 'Risk Identified', description: 'Comprehensive risk assessment identifying all exposures' },
      { title: 'Optimal Coverage', description: 'Appropriately tailored insurance matching business needs' },
      { title: 'Cost Effective', description: 'Negotiated rates ensuring competitive insurance costs' },
      { title: 'Claims Support', description: 'Expert support during claims ensuring maximum recovery' },
        { title: 'Peace of Mind', description: 'Confidence in adequate protection against business risks' },
        { title: 'Regulatory Compliance', description: 'Insurance requirements met for regulatory compliance' },
      ],

    industries: [
      'Corporate Offices',
      'Healthcare Facilities',
      'Manufacturing',
      'Financial Services',
    ],

    testimonial: {
      quote: 'They identified ₹2 crore in coverage gaps and negotiated 20% better rates. Their risk advisory is invaluable.',
      author: 'Sanjay Malhotra',
      title: 'CFO, Manufacturing Firm',
    },

    caseStudy: {
      title: 'Case Study: Risk Coverage Optimization',
      description: 'Comprehensive insurance advisory for multi-location enterprise reducing premiums 25% while increasing coverage.',
    },
  },

  'pest-control': {
    title: 'Pest Control',
    shortTitle: 'Pest Control',
    heroSubtitle: 'Eliminate Risk and Disruption With Professional Pest Management',
    description: 'Proactive, safe pest management using environmentally responsible methods. Maintain clean, compliant work environments.',
    benefit1: 'Proactive prevention',
    benefit2: 'Safe methods',
    benefit3: 'Disruption-free',
    icon: Users,
    color: 'from-teal-500 to-teal-700',

    challenges: [
      'Pest infestations causing operational disruption',
      'Health and safety risks from pest presence',
      'Environmental concern with harsh pest control chemicals',
      'Regular ongoing pest management needs',
    ],

    solution: {
      intro: 'Integrated pest management with preventive approach:',
      steps: [
        { title: 'Comprehensive Inspection', description: 'Detailed assessment identifying pest risks and entry points' },
        { title: 'Prevention Strategy', description: 'Proactive measures preventing infestation development' },
        { title: 'Treatment Plan', description: 'Targeted interventions using safe, eco-friendly methods' },
        { title: 'Ongoing Monitoring', description: 'Regular inspections preventing pest recurrence' },
      ],
    },

    benefits: [
      { title: 'Infestation Prevention', description: 'Proactive management preventing pest-related business disruption' },
      { title: 'Safe Methods', description: 'Environmentally responsible pest control protecting staff health' },
      { title: 'Compliance Assured', description: 'Meets food safety and health facility requirements' },
      { title: 'Cost Efficient', description: 'Prevention reduces emergency pest control costs' },
        { title: 'Documentation', description: 'Complete treatment records for regulatory compliance' },
        { title: 'Professional Team', description: 'Trained technicians ensuring effective pest management' },
      ],

    industries: [
      'Food & Beverage',
      'Healthcare Facilities',
      'Corporate Offices',
      'Manufacturing Plants',
    ],

    testimonial: {
      quote: 'No pests in 18 months. Their environmentally safe approach keeps our team comfortable. Highly professional service.',
      author: 'Dr. Anjali Nair',
      title: 'Facility Manager, Healthcare Chain',
    },

    caseStudy: {
      title: 'Case Study: Multi-Facility Pest Prevention',
      description: 'Comprehensive pest management across 8 healthcare facilities ensuring regulatory compliance and infection prevention.',
    },
  },
}

function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Service Not Found</h1>
          <p className="text-neutral-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="text-accent-500 font-semibold hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <>
      {/* Hero */}
      <Hero
        title={service.title}
        subtitle={service.heroSubtitle}
        ctaPrimaryText="Get Consultation"
        ctaPrimaryHref="/contact"
        ctaSecondaryText="Learn More"
        ctaSecondaryHref={`#benefits`}
        trustBadges={[
          { text: 'Industry-Proven' },
          { text: 'Compliance-Focused' },
          { text: 'Results-Driven' },
        ]}
      />

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Common Challenges</h2>
            <p className="text-xl text-neutral-600 max-w-3xl">
              Organizations struggle with {service.shortTitle.toLowerCase()} without proper expertise and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.challenges.map((challenge: string, idx: number) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-base border-l-4 border-accent-500">
                <p className="text-neutral-700 font-medium">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">How We Solve It</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mb-12">{service.solution.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.solution.steps.map((step: any, idx: number) => (
              <div key={idx} className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent-600 font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">Key Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit: any, idx: number) => (
              <div key={idx} className="p-8 bg-white rounded-lg shadow-base hover:shadow-lg transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">Industries We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.industries.map((industry: string, idx: number) => (
              <div key={idx} className="p-6 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 flex-shrink-0">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <span className="text-neutral-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900">What Our Clients Say</h2>
          </div>

          <Testimonial {...service.testimonial} />
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary-900 to-accent-600 rounded-lg h-80 flex items-center justify-center text-white text-center p-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.caseStudy.title}</h3>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Featured Case Study</h2>
              <p className="text-lg text-neutral-600 mb-6">{service.caseStudy.description}</p>

              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition"
              >
                View Case Studies <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        heading={`Ready to Transform Your ${service.shortTitle}?`}
        subheading="Get Started Today"
        description={`Join hundreds of companies optimizing their ${service.shortTitle.toLowerCase()} operations with Belabloom. Get a free consultation to discuss your specific needs.`}
        buttonPrimaryText="Schedule Consultation"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="Explore Other Services"
        buttonSecondaryHref="/services"
        variant="dark"
        icon={<Icon className="h-6 w-6" />}
      />
    </>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug]

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    }
  }

  return {
    title: `${service.title} | Belabloom Enterprise Solutions`,
    description: service.heroSubtitle,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
    },
  }
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export default ServiceDetailPage
