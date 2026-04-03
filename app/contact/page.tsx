import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Belabloom Projects & Facility Management',
  description: 'Get in touch with our team. We are ready to help you with your facility management needs.',
  openGraph: {
    title: 'Contact Us | Belabloom',
    description: 'Contact Belabloom for professional facility management services',
  },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We would love to hear from you. Get in touch with our team today."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    📍 Address
                  </h3>
                  <p className="text-gray-600">
                    [Your Company Address]<br />
                    City, State, Country
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    📞 Phone
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:+91XXXXXXXXXX" className="hover:text-primary-600 transition">
                      +91 (XXX) XXX-XXXX
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ✉️ Email
                  </h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@belabloom.com" className="hover:text-primary-600 transition">
                      info@belabloom.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    🕐 Business Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Response Time
                  </h3>
                  <p className="text-gray-600">
                    We typically respond to inquiries within 24 hours during business days.
                    For urgent matters, please call our hotline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Follow Us on Social Media
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">f</div>
              <p className="font-semibold text-gray-900">Facebook</p>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">𝕏</div>
              <p className="font-semibold text-gray-900">Twitter</p>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">📷</div>
              <p className="font-semibold text-gray-900">Instagram</p>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">in</div>
              <p className="font-semibold text-gray-900">LinkedIn</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
