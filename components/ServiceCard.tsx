import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  benefit1?: string
  benefit2?: string
  benefit3?: string
  icon: React.ReactNode
  href: string
}

export default function ServiceCard({
  title,
  description,
  benefit1,
  benefit2,
  benefit3,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group h-full p-8 bg-white rounded-lg shadow-base hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-l-4 border-accent-500">
        {/* Icon with background */}
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 mb-4 text-base leading-relaxed">{description}</p>

        {/* Benefits as bullet points */}
        {(benefit1 || benefit2 || benefit3) && (
          <ul className="space-y-2 mb-6">
            {benefit1 && (
              <li className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success-50 mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{benefit1}</span>
              </li>
            )}
            {benefit2 && (
              <li className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success-50 mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{benefit2}</span>
              </li>
            )}
            {benefit3 && (
              <li className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success-50 mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{benefit3}</span>
              </li>
            )}
          </ul>
        )}

        {/* CTA Link */}
        <div className="flex items-center text-primary-600 font-semibold group-hover:text-accent-500 transition">
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </Link>
  )
}
