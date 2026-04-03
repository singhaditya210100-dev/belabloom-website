import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import Testimonial from '@/components/Testimonial'

// Industry definitions
const industriesData: Record<string, any> = {
  'financial-services': {
    title: 'Financial Services',
    subtitle: 'Secure, Compliant Operations for Banks, NBFCs, and Financial Institutions',
    heroSubtitle: 'Tailored Solutions for Banking, Wealth Management, Insurance, and Fintech',
    description: 'Specialized facilities, rigorous compliance, and operational excellence for financial institutions.',
    
    stats: [
      { number: '50+', label: 'Financial Institutions Served' },
      { number: '₹500Cr+', label: 'Assets Protected' },
      { number: '99.9%', label: 'Compliance Score' },
    ],

    painPoints: [
      {
        title: 'Regulatory Compliance Complexity',
        description: 'Banking regulations (RBI, SEBI) require continuous compliance with stringent facility and operational standards. Non-compliance results in penalties and operational restrictions.',
      },
      {
        title: 'Operational Continuity Risk',
        description: 'Banking operations cannot afford downtime. Facility failures, security breaches, or process gaps can result in regulatory action and customer impact.',
      },
      {
        title: 'Multi-Location Management',
        description: 'Managing thousands of branches across cities requires standardized processes, quality control, and compliance auditing at every location.',
      },
      {
        title: 'Security and Risk Management',
        description: 'Financial institutions require robust security protocols, access controls, and risk mitigation across facilities and operations.',
      },
    ],

    solution: {
      intro: 'We provide comprehensive solutions ensuring compliance, security, and operational excellence:',
      services: [
        { title: 'Business Space Sourcing', benefit: 'Secure, compliant branch locations in prime areas' },
        { title: 'Interior Setup & Project Management', benefit: 'Branch rollouts maintaining brand consistency' },
        { title: 'Facility Management', benefit: '24/7 operations monitoring ensuring zero downtime' },
        { title: 'Fire Safety Equipment', benefit: 'Full regulatory compliance and emergency readiness' },
        { title: 'Audit & Process Optimization', benefit: 'Continuous compliance and efficiency improvement' },
        { title: 'Insurance Advisory', benefit: 'Comprehensive risk coverage and protection' },
      ],
    },

    achievements: [
      { metric: '₹100+ Cr', description: 'Annual lease cost saved through negotiation' },
      { metric: '28% Reduction', description: 'In operational facility costs' },
      { metric: '100% Compliance', description: 'Zero regulatory violations across clients' },
      { metric: '5.2 Days', description: 'Average branch opening timeline' },
    ],

    testimonial: {
      quote: 'Belabloom manages our 250-branch network seamlessly. Their compliance expertise and 24/7 support ensures we meet every regulatory requirement. They\'re embedded in our operations team.',
      author: 'Rajesh Patel',
      title: 'VP Facilities & Administration, Leading NBFC',
    },

    relatedIndustries: ['IT Technology', 'Healthcare'],
  },

  'it-technology': {
    title: 'IT & Technology',
    subtitle: 'Scalable Facilities and Operations for Startups to Enterprise Tech Companies',
    heroSubtitle: 'From Startup Offices to Enterprise Data Centers - Complete Facility Solutions',
    description: 'Build, scale, and operate world-class technology workplaces with our integrated solutions.',

    stats: [
      { number: '45+', label: 'Tech Companies Served' },
      { number: '10,000+', label: 'Employees in Our Facilities' },
      { number: '350+ Ms Qft', label: 'Managed Facility Space' },
    ],

    painPoints: [
      {
        title: 'Rapid Scaling Challenges',
        description: 'Tech companies need to expand quickly - finding spaces, setting up offices, and maintaining quality becomes operationally overwhelming.',
      },
      {
        title: 'Operational Infrastructure Complexity',
        description: 'Complex facility needs including data centers, secure infrastructure, emergency power, and 24/7 operations management.',
      },
      {
        title: 'Cost Optimization Pressure',
        description: 'High real estate costs and operational expenses in major tech hubs require strategic cost management without quality compromise.',
      },
      {
        title: 'Vendor Fragmentation',
        description: 'Managing multiple vendors for space, fit-out, facilities, and services creates coordination overhead and inconsistent quality.',
      },
    ],

    solution: {
      intro: 'We provide end-to-end facility solutions enabling tech companies to focus on product:',
      services: [
        { title: 'Business Space Sourcing', benefit: 'Prime tech hub locations for startups and enterprises' },
        { title: 'Interior Setup & Project Management', benefit: 'Modern, agile-friendly workspace design and delivery' },
        { title: 'Facility Management', benefit: 'World-class operations ensuring 99.9% uptime' },
        { title: 'Audit & Process Optimization', benefit: 'Streamlined operations reducing overhead' },
        { title: 'Fire Safety Equipment', benefit: 'Code-compliant facilities meeting all standards' },
        { title: 'Insurance Advisory', benefit: 'Comprehensive coverage for high-tech assets' },
      ],
    },

    achievements: [
      { metric: '20+ Companies', description: 'Expanded from 1 to 5+ offices in 12 months' },
      { metric: '18% Reduction', description: 'In per-employee facility costs through optimization' },
      { metric: '15-20% Savings', description: 'Negotiated lease rates versus market rates' },
      { metric: '2 Weeks', description: 'Average new office setup timeline' },
    ],

    testimonial: {
      quote: 'As we scaled from 50 to 500 people, Belabloom handled all our facility expansion. They sourced offices, managed fit-outs, and now run daily operations. We couldn\'t have done it without them.',
      author: 'Priya Sharma',
      title: 'CFO, Leading Fintech Startup',
    },

    relatedIndustries: ['Financial Services', 'Data Centers'],
  },

  'data-centers': {
    title: 'Data Centers',
    subtitle: 'Mission-Critical Facility Management for Digital Infrastructure',
    heroSubtitle: 'Ensure Maximum Uptime and Compliance for Critical Data Infrastructure',
    description: 'Specialized facility management for data centers ensuring 99.99% uptime, security, and regulatory compliance.',

    stats: [
      { number: '12+', label: 'Data Centers Managed' },
      { number: '99.99%', label: 'Average Uptime' },
      { number: '₹200+ Cr ', label: 'Annual Infrastructure Value Protected' },
    ],

    painPoints: [
      {
        title: 'Mission-Critical Uptime Requirements',
        description: 'Data center downtime costs ₹5+ lakhs per minute. Any facility failure - power, cooling, security - causes catastrophic business impact.',
      },
      {
        title: 'Complex Environmental Management',
        description: 'Critical temperature, humidity, and power management requiring 24/7 monitoring and instant response to deviations.',
      },
      {
        title: 'Regulatory and Compliance Burden',
        description: 'Data centers must meet ISO 27001, TIER standards, fire safety requirements, and industry-specific regulations (fintech, healthcare).',
      },
      {
        title: 'Security and Access Control',
        description: 'Strict physical and logical security requiring biometric access, CCTV monitoring, visitor management, and audit trails.',
      },
    ],

    solution: {
      intro: 'We provide specialized data center facility management ensuring maximum availability:',
      services: [
        { title: 'Facility Management', benefit: '24/7 specialized operations with proactive monitoring' },
        { title: 'Fire Safety Equipment', benefit: 'Advanced fire suppression systems protecting critical assets' },
        { title: 'Audit & Process Optimization', benefit: 'ISO 27001 compliance and continuous process improvement' },
        { title: 'Business Space Sourcing', benefit: 'Secure, resilient locations with redundancy options' },
        { title: 'Insurance Advisory', benefit: 'Specialized coverage for high-value IT infrastructure' },
      ],
    },

    achievements: [
      { metric: '99.99% Uptime', description: 'Maintained across all managed data centers' },
      { metric: 'Zero Security', description: 'Breaches or unauthorized access incidents' },
      { metric: '100% ISO', description: '27001 compliance across all facilities' },
      { metric: '5-Minute', description: 'Maximum response time to facility alerts' },
    ],

    testimonial: {
      quote: 'They run our data center like we would run it ourselves - incredibly proactive, incredibly reliable. Their technical expertise and 24/7 presence gives us complete confidence.',
      author: 'Vikram Menon',
      title: 'CTO, Leading Enterprise Services',
    },

    relatedIndustries: ['Financial Services', 'IT Technology'],
  },

  'healthcare': {
    title: 'Healthcare',
    subtitle: 'Compliant, Safe, and Hygienic Facility Management for Healthcare Providers',
    heroSubtitle: 'Ensure Patient Safety and Regulatory Compliance Across Clinical Facilities',
    description: 'Specialized facility management for hospitals, clinics, and diagnostic centers meeting health, safety, and regulatory standards.',

    stats: [
      { number: '25+', label: 'Healthcare Facilities Served' },
      { number: '100%', label: 'Regulatory Compliance' },
      { number: '0', label: 'Health Code Violations' },
    ],

    painPoints: [
      {
        title: 'Patient Safety and Infection Control',
        description: 'Healthcare facilities must maintain sterile environments preventing hospital-acquired infections. Any facility failure - cleanliness, water quality, HVAC - impacts patient safety.',
      },
      {
        title: 'Complex Regulatory Requirements',
        description: 'Healthcare facilities face stringent regulations from health departments, fire safety, bio-waste management, lab standards, and infection control protocols.',
      },
      {
        title: 'Emergency Preparedness',
        description: 'Hospitals must have backup power, water, medical gases availability ensuring continuous operations during emergencies.',
      },
      {
        title: 'Specialized Infrastructure Needs',
        description: 'Medical equipment, clean rooms, diagnostic labs require specialized maintenance and operational protocols.',
      },
    ],

    solution: {
      intro: 'We provide comprehensive healthcare facility management ensuring safe, compliant operations:',
      services: [
        { title: 'Facility Management', benefit: 'Specialized healthcare operations with infection control protocols' },
        { title: 'Fire Safety Equipment', benefit: 'Emergency preparedness and life safety system maintenance' },
        { title: 'Audit & Process Optimization', benefit: 'Regulatory compliance and operational efficiency' },
        { title: 'Pest Control', benefit: 'Safe pest management protecting patient environments' },
        { title: 'Interior Setup & Project Management', benefit: 'Clinical space design and renovation management' },
      ],
    },

    achievements: [
      { metric: '100% Compliance', description: 'Across all health and safety regulations' },
      { metric: 'Zero Hospital', description: 'Acquired infections linked to facility issues' },
      { metric: '98% Patient', description: 'Satisfaction with clinical facility experiences' },
      { metric: '24/7 Emergency', description: 'Response for critical facility issues' },
    ],

    testimonial: {
      quote: 'Healthcare facility management is critical. Belabloom understands the regulatory complexity and patient safety implications. Their team is completely aligned with our clinical standards.',
      author: 'Dr. Anjali Nair',
      title: 'Facility Director, Multi-Specialty Hospital Chain',
    },

    relatedIndustries: ['Manufacturing', 'Financial Services'],
  },

  'manufacturing': {
    title: 'Manufacturing',
    subtitle: 'Operational Excellence for Manufacturing Plants and Production Facilities',
    heroSubtitle: 'Optimize Manufacturing Operations Through Superior Facility Management',
    description: 'Plant operations, process optimization, and facility management maximizing uptime and productivity.',

    stats: [
      { number: '18+', label: 'Manufacturing Plants Managed' },
      { number: '95%+', label: 'Production Uptime' },
      { number: '30%', label: 'Average Operational Cost Reduction' },
    ],

    painPoints: [
      {
        title: 'Production Downtime Costs',
        description: 'Manufacturing facilities lose ₹10+ lakhs per hour during unplanned downtime. Equipment failures, maintenance delays, or utility issues halt production.',
      },
      {
        title: 'Compliance and Safety',
        description: 'Manufacturing plants must meet workplace safety, fire safety, environmental, and labor standards with strict auditing and documentation.',
      },
      {
        title: 'Preventive Maintenance Complexity',
        description: 'Managing maintenance for complex equipment requires specialized expertise, spares management, and predictive maintenance capabilities.',
      },
      {
        title: 'Operational Cost Control',
        description: 'Energy costs, waste management, and resource optimization require continuous process improvement and cost management.',
      },
    ],

    solution: {
      intro: 'We provide specialized facility management maximizing manufacturing productivity:',
      services: [
        { title: 'Facility Management', benefit: 'Proactive maintenance preventing production downtime' },
        { title: 'Audit & Process Optimization', benefit: 'Operational efficiency improvements reducing costs' },
        { title: 'Fire Safety Equipment', benefit: 'Workplace safety and emergency preparedness' },
        { title: 'Pest Control', benefit: 'Safe pest management protecting production areas' },
        { title: 'Interior Setup & Project Management', benefit: 'Plant expansion and facility upgrades' },
      ],
    },

    achievements: [
      { metric: '95%+ Uptime', description: 'Reduced unplanned downtime by 70%' },
      { metric: '30% Cost', description: 'Reduction in total facility operating costs' },
      { metric: '100% Safety', description: 'Compliance with all workplace standards' },
      { metric: '₹20Cr+', description: 'Gross production value protected annually' },
    ],

    testimonial: {
      quote: 'Our production uptime increased from 82% to 96% after partnering with Belabloom. Their preventive maintenance approach eliminated unexpected shutdowns. Huge impact on profitability.',
      author: 'Suresh Desai',
      title: 'Plant Manager, Leading Manufacturing Firm',
    },

    relatedIndustries: ['Healthcare', 'Financial Services'],
  },

  'housing-finance': {
    title: 'Housing Finance',
    subtitle: 'Specialized Solutions for Housing Finance Companies and Real Estate Operations',
    heroSubtitle: 'Support Your Lending Operations With Secure, Compliant Facilities',
    description: 'Dedicated facilities and operational support for housing finance institutions and real estate businesses.',

    stats: [
      { number: '22+', label: 'HFCs & Real Estate Companies' },
      { number: '₹1,000+ Cr', label: 'Loan Portfolio Risk Protected' },
      { number: '100%', label: 'Regulatory Audit Passes' },
    ],

    painPoints: [
      {
        title: 'Regulatory and Compliance Requirements',
        description: 'HFCs face stringent RBI regulations requiring secure facilities, data protection, process compliance, and regular auditing.',
      },
      {
        title: 'Multi-Office Coordination',
        description: 'HFCs operate multiple branches across cities requiring standardized processes, quality control, and compliance at every location.',
      },
      {
        title: 'Data Security and Risk Management',
        description: 'Loan documents, borrower data, and financial records require Fort Knox-level security and access controls.',
      },
      {
        title: 'Operational Efficiency Under Regulation',
        description: 'Meeting regulatory requirements while optimizing costs and operational efficiency requires specialized expertise.',
      },
    ],

    solution: {
      intro: 'We provide tailored solutions for HFCs ensuring compliance and operational excellence:',
      services: [
        { title: 'Business Space Sourcing', benefit: 'Secure branches in prime customer locations' },
        { title: 'Facility Management', benefit: '24/7 operations with data security protocols' },
        { title: 'Audit & Process Optimization', benefit: 'RBI compliance and process improvement' },
        { title: 'Fire Safety Equipment', benefit: 'Document protection and emergency preparedness' },
        { title: 'Insurance Advisory', benefit: 'Loan portfolio and operational risk coverage' },
      ],
    },

    achievements: [
      { metric: '100% Compliance', description: 'Across all RBI and regulatory requirements' },
      { metric: 'Zero Data', description: 'Security incidents or breaches' },
      { metric: '5.2 Days', description: 'Average new branch opening timeline' },
      { metric: '15-20%', description: 'Lease cost savings negotiated' },
    ],

    testimonial: {
      quote: 'For HFCs, compliance is non-negotiable. Belabloom ensures our branches meet every regulatory requirement while running efficiently. They understand our business deeply.',
      author: 'Kavya Sharma',
      title: 'VP Operations, Leading HFC',
    },

    relatedIndustries: ['Financial Services', 'IT Technology'],
  },
}

function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industriesData[params.slug]

  if (!industry) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Industry Not Found</h1>
          <p className="text-neutral-600 mb-8">The industry page you're looking for doesn't exist.</p>
          <Link href="/industries" className="text-accent-500 font-semibold hover:underline">
            ← Back to Industries
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <Hero
        title={industry.title}
        subtitle={industry.heroSubtitle}
        ctaPrimaryText="Get Consultation"
        ctaPrimaryHref="/contact"
        ctaSecondaryText="Learn More"
        ctaSecondaryHref="#solution"
        trustBadges={[
          { text: 'Industry Expertise' },
          { text: 'Proven Track Record' },
          { text: '100% Compliance' },
        ]}
      />

      {/* Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-accent-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.stats.map((stat: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">Industry Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.painPoints.map((point: any, idx: number) => (
              <div key={idx} className="p-8 bg-white rounded-lg shadow-base border-l-4 border-accent-500">
                <h3 className="text-xl font-bold text-primary-900 mb-3">{point.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Belabloom Solutions</h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl">{industry.solution.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solution.services.map((svc: any, idx: number) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg border border-primary-100 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-primary-900 mb-2">{svc.title}</h3>
                <p className="text-neutral-600 mb-4">{svc.benefit}</p>
                <Link href={`/services/${svc.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-accent-600 font-semibold text-sm hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 mb-12">Our Track Record</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industry.achievements.map((achievement: any, idx: number) => (
              <div key={idx} className="p-8 bg-white rounded-lg shadow-base text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">{achievement.metric}</div>
                <p className="text-neutral-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-900 text-center mb-12">What {industry.title} Clients Say</h2>
          <Testimonial {...industry.testimonial} />
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-900 mb-8">Also Serving</h2>

          <div className="flex flex-wrap gap-4">
            {industry.relatedIndustries.map((rel: string, idx: number) => (
              <Link
                key={idx}
                href={`/industries/${rel.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 bg-white rounded-lg border-2 border-primary-200 hover:border-accent-500 hover:bg-accent-50 transition font-medium text-neutral-700"
              >
                {rel} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        heading={`Ready to Optimize Your ${industry.title} Operations?`}
        subheading="Partner With Experts Who Understand Your Industry"
        description={`Get a free consultation to discuss how we're helping ${industry.title} companies achieve their facility excellence and compliance goals.`}
        buttonPrimaryText="Schedule Consultation"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="Explore Services"
        buttonSecondaryHref="/services"
        variant="dark"
      />
    </>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industriesData[params.slug]

  if (!industry) {
    return {
      title: 'Industry Not Found',
      description: 'The industry page you are looking for does not exist.',
    }
  }

  return {
    title: `${industry.title} | Belabloom Enterprise Solutions`,
    description: industry.heroSubtitle,
    openGraph: {
      title: industry.title,
      description: industry.description,
      type: 'website',
    },
  }
}

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }))
}

export default IndustryPage
