interface ProcessStepProps {
  step: number
  title: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
}

interface ProcessSectionProps {
  title: string
  subtitle?: string
  steps: Array<{
    step: number
    title: string
    description: string
    icon: React.ReactNode
  }>
}

export function ProcessStep({ step, title, description, icon, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary-300 to-transparent" />
      )}

      {/* Step number circle with icon */}
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary-900 text-white shadow-lg relative z-10">
        <div className="text-2xl font-bold">{step}</div>
        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-sm">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-neutral-900 mb-2 text-center">{title}</h3>
      <p className="text-neutral-600 text-center max-w-xs">{description}</p>
    </div>
  )
}

export function ProcessSection({ title, subtitle, steps }: ProcessSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, idx) => (
            <ProcessStep
              key={idx}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={idx === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
