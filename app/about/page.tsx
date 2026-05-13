import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Belabloom Projects & Facility Management',
  description:
    'Belabloom was built to fix the vendor fragmentation problem — one accountable partner for your entire facility lifecycle. Learn our story, values, and vision.',
  openGraph: {
    title: 'About Belabloom',
    description: 'One accountable infrastructure partner for growing businesses.',
    url: 'https://www.belabloom.com/about',
    type: 'website',
  },
}

const STATS = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '7',    label: 'Service Verticals' },
  { number: '98%',  label: 'Client Retention Rate' },
  { number: '40%',  label: 'Avg. Ops Cost Reduction' },
]

const VALUES = [
  { icon: '🎯', title: 'Ownership',       desc: 'We don\'t pass the buck. When we commit to something, we see it through — on time, on budget, to the standard we promised.' },
  { icon: '🔍', title: 'Transparency',    desc: 'No hidden costs. No vague timelines. No post-project surprises. We communicate clearly at every stage of engagement.' },
  { icon: '💡', title: 'Efficiency',      desc: 'We obsess over better ways to do things — for our clients and within our own operations. Efficiency is our product.' },
  { icon: '🤝', title: 'Partnership',     desc: "We're not vendors. We're partners. Our success is directly tied to how well our clients operate, grow, and scale." },
  { icon: '🌱', title: 'Scalability',     desc: "Whether you're a 10-person startup or a 1,000-person enterprise, our model adapts to where you are and where you're going." },
  { icon: '🔒', title: 'Compliance-First',desc: 'We never cut corners on safety and compliance. Every engagement is designed to be audit-ready from day one.' },
]

const VISION_POINTS = [
  'Be the default infrastructure partner for India\'s growing businesses',
  'Build technology that makes facility management transparent and proactive',
  'Expand from metro cities to Tier 2 markets by 2027',
  'Evolve into a SaaS + services hybrid platform',
]

const MISSION_POINTS = [
  'Reduce vendor fragmentation for every client we serve',
  'Deliver cost-efficient, compliant, and scalable solutions',
  'Bring technology, services, and execution under one umbrella',
  'Help businesses focus on what they do best — their core',
]

const TEAM = [
  {
    initials: 'AS',
    name: 'Aditya Singh',
    role: 'Founder & CEO',
    bio: 'Operations strategist with deep expertise in facility management and business infrastructure. Obsessed with building systems that scale.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    initials: 'PM',
    name: 'Projects & Operations',
    role: 'PM & Execution Team',
    bio: 'Our on-ground project managers and operations specialists ensure every setup and every FM contract runs like clockwork.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    initials: 'CS',
    name: 'Client Success',
    role: 'Account Management',
    bio: 'Dedicated account managers who proactively manage your needs, not just react to them. Your first and last call for anything.',
    color: 'bg-green-100 text-green-700',
  },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Built to Fix the Fragmentation Problem"
        subtitle="Belabloom was born from a frustration every ops team knows too well — chasing five vendors for five things that should come from one place. We decided to be that one place."
        ctaPrimaryText="Work With Us"
        ctaPrimaryHref="/contact"
        ctaSecondaryText="View Our Services"
        ctaSecondaryHref="/services"
      />

      {/* Stats */}
      <section className="py-12 bg-primary-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-accent-400 mb-1">{s.number}</div>
                <div className="text-sm text-primary-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">The Problem We Solve</h2>
            <p className="text-xl text-neutral-500">Businesses deserve better than vendor chaos.</p>
          </div>
          <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed space-y-5">
            <p>
              When a business sets up a new office or tries to manage an existing one, they typically end up coordinating
              with a real estate broker, an interior contractor, a housekeeping agency, a pest control company, a fire
              safety vendor, and an insurance advisor — all separately, all with misaligned incentives, and none of them
              talking to each other.
            </p>
            <p className="font-semibold text-primary-900">
              The result? Cost overruns, compliance gaps, maintenance failures, and ops teams stretched thin across things
              that have nothing to do with their actual job.
            </p>
            <p>
              Belabloom was built to change that. We aggregate the entire infrastructure lifecycle under one roof — with
              one account manager, one SLA, and full end-to-end ownership. When something needs to be done, we do it.
              When something breaks, we fix it. You never have to wonder who to call.
            </p>
            <blockquote className="border-l-4 border-accent-500 pl-6 py-1 my-8 italic text-xl text-primary-800">
              "The future of business operations isn't about more vendors. It's about fewer, better, accountable ones."
            </blockquote>
            <p>
              We're not a marketplace or a referral platform. We are operationally accountable — we hold vendor contracts,
              we supervise execution, and we sign off on quality. That's the Belabloom difference.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">What We Stand For</h2>
            <p className="text-xl text-neutral-500">Our Core Values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{v.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-accent-600 uppercase tracking-widest mb-2">Direction</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-primary-200 mb-6 text-sm">The one-stop platform for business infrastructure in India.</p>
              <ul className="space-y-3">
                {VISION_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-accent-100 mb-6 text-sm">Simplify operations. Unlock growth.</p>
              <ul className="space-y-3">
                {MISSION_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-accent-50">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-accent-600 uppercase tracking-widest mb-2">The People</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">Meet the team behind Belabloom</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold mb-4 ${member.color}`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-primary-900">{member.name}</h3>
                <p className="text-sm text-accent-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition"
            >
              Want to work with us? Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Transform Your Facility Operations?"
        subheading="Join 500+ growing businesses"
        description="Get a free facility assessment and see how much you could save by consolidating your vendors under one accountable partner."
        buttonPrimaryText="Get Free Assessment"
        buttonPrimaryHref="/contact"
        buttonSecondaryText="View Services"
        buttonSecondaryHref="/services"
        variant="accent"
      />
    </>
  )
}
