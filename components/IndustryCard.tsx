import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface IndustryCardProps {
  name: string
  description: string
  clientCount: number
  keyServices: string[]
  href: string
  icon?: React.ReactNode
}

export default function IndustryCard({
  name,
  description,
  clientCount,
  keyServices,
  href,
  icon,
}: IndustryCardProps) {
  return (
    <Link href={href}>
      <div className="group relative h-full overflow-hidden rounded-lg shadow-base hover:shadow-xl transition-all duration-300 bg-white cursor-pointer">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Icon or number indicator */}
          {icon ? (
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 group-hover:bg-accent-100 group-hover:text-accent-600 transition">
              {icon}
            </div>
          ) : (
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600 font-bold">
              {clientCount}+
            </div>
          )}

          {/* Industry name */}
          <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition">
            {name}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{description}</p>

          {/* Key services */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Key Services</p>
            <div className="flex flex-wrap gap-2">
              {keyServices.slice(0, 3).map((service, idx) => (
                <span key={idx} className="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Client count and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
            <span className="text-sm font-medium text-neutral-600">
              Serving {clientCount}+ companies
            </span>
            <ArrowRight className="h-4 w-4 text-primary-600 group-hover:text-accent-600 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </div>
    </Link>
  )
}
