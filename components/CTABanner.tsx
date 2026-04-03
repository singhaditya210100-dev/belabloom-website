import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  heading: string
  subheading?: string
  description?: string
  buttonPrimaryText?: string
  buttonPrimaryHref?: string
  buttonSecondaryText?: string
  buttonSecondaryHref?: string
  variant?: 'dark' | 'accent'
  icon?: React.ReactNode
}

export default function CTABanner({
  heading,
  subheading,
  description,
  buttonPrimaryText = 'Get Started Now',
  buttonPrimaryHref = '/contact',
  buttonSecondaryText = 'Learn More',
  buttonSecondaryHref = '/services',
  variant = 'dark',
  icon,
}: CTAProps) {
  const isDark = variant === 'dark'

  return (
    <section
      className={`relative py-16 md:py-24 overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700' : 'bg-gradient-to-br from-accent-500 to-accent-600'
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-accent-500/10' : 'bg-white/10'}`} />
        <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-primary-500/10' : 'bg-white/10'}`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Icon if provided */}
        {icon && (
          <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg ${
            isDark ? 'bg-accent-500/20 text-accent-300' : 'bg-white/20 text-white'
          }`}>
            {icon}
          </div>
        )}

        {/* Subheading */}
        {subheading && (
          <div className={`mb-3 font-semibold uppercase tracking-wide text-sm ${isDark ? 'text-accent-300' : 'text-white/80'}`}>
            {subheading}
          </div>
        )}

        {/* Main heading */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-white'}`}>
          {heading}
        </h2>

        {/* Description */}
        {description && (
          <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${isDark ? 'text-gray-200' : 'text-white/90'}`}>
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonPrimaryHref}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-lg transition transform hover:scale-105 ${
              isDark
                ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg'
                : 'bg-white text-accent-600 hover:bg-gray-100'
            }`}
          >
            {buttonPrimaryText}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href={buttonSecondaryHref}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-lg transition ${
              isDark
                ? 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            {buttonSecondaryText}
          </Link>
        </div>
      </div>
    </section>
  )
}
