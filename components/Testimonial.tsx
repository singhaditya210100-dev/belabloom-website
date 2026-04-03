interface TestimonialProps {
  quote: string
  author: string
  title: string
}

export default function Testimonial({ quote, author, title }: TestimonialProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
      <div className="mb-4 text-primary-500">
        <span className="text-2xl">"</span>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  )
}
