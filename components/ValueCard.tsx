interface ValueCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4 text-primary-600 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
