'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  Services: [
    { name: 'Facility Management', href: '#' },
    { name: 'Business Space Sourcing', href: '#' },
    { name: 'Project Management', href: '#' },
    { name: 'Fire Safety', href: '#' },
    { name: 'Pest Control', href: '#' },
    { name: 'Audit & Process', href: '#' },
  ],
  Industries: [
    { name: 'Financial Services', href: '#' },
    { name: 'IT & Tech', href: '#' },
    { name: 'Healthcare', href: '#' },
    { name: 'Manufacturing', href: '#' },
    { name: 'Data Centers', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog & Insights', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-neutral-100">
      {/* Main footer content */}
      <div className="border-b border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-2xl font-bold text-white">Belabloom</span>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Enterprise facilities management solutions for 500+ companies across regulated industries.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 rounded-lg bg-primary-800 hover:bg-accent-500 text-neutral-300 hover:text-white transition flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Services</h4>
              <ul className="space-y-3">
                {footerLinks.Services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-accent-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Industries</h4>
              <ul className="space-y-3">
                {footerLinks.Industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-accent-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Company</h4>
              <ul className="space-y-3">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-accent-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Get in Touch</h4>
              <div className="space-y-4">
                <a href="mailto:info@belabloom.com" className="flex items-start gap-3 text-neutral-400 hover:text-accent-400 transition group">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-accent-400" />
                  <span className="text-sm break-all">info@belabloom.com</span>
                </a>
                <a href="tel:+91" className="flex items-start gap-3 text-neutral-400 hover:text-accent-400 transition group">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:text-accent-400" />
                  <span className="text-sm">+91 (XXX) XXX-XXXX</span>
                </a>
                <div className="flex items-start gap-3 text-neutral-400">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">India-based Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} Belabloom. All rights reserved. | Serving enterprise needs with excellence.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.Legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-accent-400 transition text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
