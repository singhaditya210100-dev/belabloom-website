import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  ctaPrimaryText?: string
  ctaPrimaryHref?: string
  ctaSecondaryText?: string
  ctaSecondaryHref?: string
  backgroundImage?: string
  trustBadges?: Array<{ text: string; icon?: string }>
  highlightedBenefit?: string
}

export default function Hero({
  title,
  subtitle,
  ctaPrimaryText = 'Get Free Assessment',
  ctaPrimaryHref = '/contact',
  ctaSecondaryText = 'Learn More',
  ctaSecondaryHref = '/services',
  backgroundImage,
  trustBadges,
  highlightedBenefit,
}: HeroProps) {
  return (
    <div
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.85), rgba(8, 145, 178, 0.75)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Background gradient if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600" />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center animate-fade-in">
          {/* Trust badges above headline */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="mb-8 flex items-center justify-center gap-4 flex-wrap">
              {trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
                >
                  <Check className="h-4 w-4 text-accent-500" />
                  {badge.text}
                </div>
              ))}
            </div>
          )}

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Highlighted benefit */}
          {highlightedBenefit && (
            <div className="mb-12 flex items-center justify-center gap-3 text-accent-300">
              <Check className="h-5 w-5" />
              <span className="font-semibold">{highlightedBenefit}</span>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href={ctaPrimaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition transform hover:scale-105 shadow-lg"
            >
              {ctaPrimaryText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={ctaSecondaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/25 border border-white/30 transition"
            >
              {ctaSecondaryText}
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
