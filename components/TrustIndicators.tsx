import { Award, Shield, TrendingUp } from 'lucide-react'
import ClientLogoCarousel from '@/components/ClientLogoCarousel'

interface Stat {
  number: string
  label: string
  icon: React.ReactNode
}

interface TrustIndicatorsProps {
  stats?: Stat[]
  certifications?: string[]
  showClientLogos?: boolean
}

const defaultStats: Stat[] = [
  {
    number: '500+',
    label: 'Companies Served',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    number: '20+',
    label: 'Years Combined Expertise',
    icon: <Award className="h-6 w-6" />,
  },
  {
    number: '99.5%',
    label: 'Client Satisfaction',
    icon: <Shield className="h-6 w-6" />,
  },
]

export default function TrustIndicators({
  stats = defaultStats,
  certifications,
  showClientLogos = false,
}: TrustIndicatorsProps) {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">{stat.number}</div>
              <p className="text-neutral-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="border-t border-neutral-200 pt-12 md:pt-16">
            <h3 className="text-center text-neutral-600 font-semibold mb-8 uppercase tracking-wide">
              Certified & Compliant
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {certifications.map((cert, idx) => (
                <div key={idx} className="px-4 py-2 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <span className="font-medium text-neutral-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Logo Carousel */}
        {showClientLogos && (
          <div className="border-t border-neutral-200 pt-12 md:pt-16">
            <h3 className="text-center text-neutral-600 font-semibold mb-8 uppercase tracking-wide">
              Trusted By Industry Leaders
            </h3>
            <ClientLogoCarousel />
          </div>
        )}
      </div>
    </section>
  )
}
