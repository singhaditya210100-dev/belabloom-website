import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Projects | Belabloom Projects & Facility Management',
  description: 'Explore our portfolio of successful projects across various industries.',
  openGraph: {
    title: 'Our Projects | Belabloom',
    description: 'Portfolio of completed facility management and project solutions',
  },
}

const projects = [
  {
    id: 1,
    title: 'Corporate Office Facility Management',
    category: 'Corporate',
    description: 'Comprehensive facility management for a 50,000 sq ft corporate office.',
    image: '[Project Image 1]',
  },
  {
    id: 2,
    title: 'Retail Store Interior Setup',
    category: 'Retail',
    description: 'Complete interior design and project management for modern retail space.',
    image: '[Project Image 2]',
  },
  {
    id: 3,
    title: 'Pest Control Program Implementation',
    category: 'Services',
    description: 'Integrated pest management system for food manufacturing facility.',
    image: '[Project Image 3]',
  },
  {
    id: 4,
    title: 'Fire Safety Installation',
    category: 'Safety',
    description: 'State-of-the-art fire safety system installation and training.',
    image: '[Project Image 4]',
  },
  {
    id: 5,
    title: 'Healthcare Facility Management',
    category: 'Healthcare',
    description: 'Specialized facility management for multi-specialty hospital complex.',
    image: '[Project Image 5]',
  },
  {
    id: 6,
    title: 'Educational Institution Project',
    category: 'Education',
    description: 'Complete facility setup and management for educational institution.',
    image: '[Project Image 6]',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="Showcasing our successful facility management and project delivery"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Successful projects across diverse industries and sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                  {project.image}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Project Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-gray-600 font-semibold">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600 font-semibold">Happy Clients</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <p className="text-gray-600 font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Start Your Project?"
        subheading="Let our experienced team bring your vision to life"
        buttonText="Discuss Your Project"
      />
    </>
  )
}
