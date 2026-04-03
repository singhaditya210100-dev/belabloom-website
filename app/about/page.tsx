import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ValueCard from '@/components/ValueCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About Us | Belabloom Projects & Facility Management',
  description: 'Learn about Belabloom, our mission, team, and commitment to excellence.',
  openGraph: {
    title: 'About Us | Belabloom',
    description: 'Professional facility management and project solutions',
  },
}

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Belabloom"
        subtitle="Managing Projects, Empowering Businesses"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded on April 27, 2021, Belabloom was established on principles of excellence, 
                integrity, and client satisfaction. Each passing day, we bloom further, reaching towards 
                the sky to serve our clients with dedication and professionalism.
              </p>
              <p className="text-gray-600 text-lg">
                We specialize in comprehensive facility management, project solutions, and business 
                services that empower organizations to focus on their core competencies while we 
                handle their operational needs with expertise and care.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg h-96 flex items-center justify-center text-white text-6xl font-bold">
              [Company Image]
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-lg text-gray-600">Projects Completed</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-lg text-gray-600">Reputed Clients</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">20+</div>
              <p className="text-lg text-gray-600">Service Categories</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Belabloom?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ Proven Track Record
              </h3>
              <p className="text-gray-600">
                Years of experience delivering exceptional results for diverse industry sectors
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ Expert Team
              </h3>
              <p className="text-gray-600">
                Dedicated professionals with deep expertise in facility management and project delivery
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ Client-Focused Approach
              </h3>
              <p className="text-gray-600">
                Customized solutions tailored to meet your specific business requirements
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ Continuous Innovation
              </h3>
              <p className="text-gray-600">
                Leveraging latest technologies and methodologies for optimal efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Join Our Growing List of Satisfied Clients"
        subheading="Experience professional facility management like never before"
        buttonText="Contact Our Team"
      />
    </>
  )
}
