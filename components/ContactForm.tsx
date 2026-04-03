'use client'

import { useState, FormEvent } from 'react'
import { AlertCircle, CheckCircle, Mail, Phone, Building2 } from 'lucide-react'

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

interface FormErrors {
  [key: string]: string
}

const INDUSTRIES = [
  'Financial Services',
  'IT & Technology',
  'Data Centers',
  'Healthcare',
  'Manufacturing',
  'Housing Finance',
  'Other',
]

const SERVICES = [
  'Business Space Sourcing',
  'Interior Setup & Project Management',
  'Facility Management',
  'Fire Safety Equipment',
  'Audit & Process Optimization',
  'Insurance Advisory',
  'Pest Control',
  'Multiple Services',
]

const BUDGETS = [
  'Less than ₹10L',
  '₹10L - ₹50L',
  '₹50L - ₹1Cr',
  '₹1Cr - ₹5Cr',
  '₹5Cr+',
]

export default function ContactForm() {
  const [step, setStep] = useState<'info' | 'details' | 'confirmation'>(
    'info'
  )
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    serviceInterest: [] as string[],
    challenge: '',
    budget: '',
    timeline: 'Immediate',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceInterest: prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter((s) => s !== service)
        : [...prev.serviceInterest, service],
    }))
  }

  const validateStep = (step: 'info' | 'details'): boolean => {
    const newErrors: FormErrors = {}

    if (step === 'info') {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    } else if (step === 'details') {
      if (!formData.company.trim()) newErrors.company = 'Company name is required'
      if (!formData.industry) newErrors.industry = 'Please select your industry'
      if (formData.serviceInterest.length === 0) {
        newErrors.serviceInterest = 'Please select at least one service'
      }
      if (!formData.challenge.trim()) {
        newErrors.challenge = 'Please describe your challenge'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep('info')) {
      setStep('details')
    }
  }

  const handlePrev = () => {
    setStep('info')
    setErrors({})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateStep('details')) {
      return
    }

    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStep('confirmation')
        setFormState({
          status: 'success',
          message: 'Thank you! Our team will get back to you within 24 hours.',
        })
        // Reset form after brief delay
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            industry: '',
            serviceInterest: [],
            challenge: '',
            budget: '',
            timeline: 'Immediate',
            message: '',
          })
          setStep('info')
        }, 2000)
      } else {
        setFormState({
          status: 'error',
          message: 'Something went wrong. Please try again.',
        })
      }
    } catch {
      setFormState({
        status: 'error',
        message: 'An error occurred. Please try again later.',
      })
    }
  }

  // Confirmation screen
  if (step === 'confirmation' && formState.status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Request Submitted Successfully!
        </h2>
        <p className="text-neutral-600 mb-6">
          Thank you, {formData.name}. Our team will review your request and contact you
          within 24 hours at {formData.email}.
        </p>
        <button
          onClick={() => {
            setStep('info')
            setFormState({ status: 'idle', message: '' })
          }}
          className="px-6 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition font-semibold"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-8 pb-8 border-b border-neutral-200">
        <div className="flex items-center gap-4 flex-1">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition ${
              step === 'info' || step === 'details'
                ? 'bg-accent-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            1
          </div>
          <span className="font-medium text-primary-900">Contact Info</span>
        </div>
        <div className={`flex-1 h-1 mx-4 ${step !== 'info' ? 'bg-accent-500' : 'bg-neutral-200'}`} />
        <div className="flex items-center gap-4 flex-1">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition ${
              step === 'details' ? 'bg-accent-500 text-white' : 'bg-neutral-200 text-neutral-600'
            }`}
          >
            2
          </div>
          <span className={step === 'details' ? 'font-medium text-primary-900' : 'text-neutral-600'}>
            Project Details
          </span>
        </div>
      </div>

      {/* Step 1: Contact Information */}
      {step === 'info' && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-neutral-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" /> {errors.name}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-neutral-400 pointer-events-none" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-neutral-300'
                  }`}
                  placeholder="john@company.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                Phone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-neutral-400 pointer-events-none" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-neutral-300'
                  }`}
                  placeholder="+91 98765 43210"
                />
              </div>
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition"
          >
            Continue to Project Details
          </button>
        </div>
      )}

      {/* Step 2: Project Details */}
      {step === 'details' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-primary-900 mb-2">
                Company Name *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-neutral-400 pointer-events-none" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition ${
                    errors.company ? 'border-red-500 bg-red-50' : 'border-neutral-300'
                  }`}
                  placeholder="Your Company Name"
                />
              </div>
              {errors.company && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" /> {errors.company}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-primary-900 mb-2">
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition ${
                  errors.industry ? 'border-red-500 bg-red-50' : 'border-neutral-300'
                }`}
              >
                <option value="">Select your industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              {errors.industry && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" /> {errors.industry}
                </p>
              )}
            </div>
          </div>

          {/* Service Interest */}
          <div>
            <label className="block text-sm font-semibold text-primary-900 mb-3">
              Services You're Interested In *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                    formData.serviceInterest.includes(service)
                      ? 'border-accent-500 bg-accent-50'
                      : 'border-neutral-200 hover:border-accent-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.serviceInterest.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-5 h-5 accent-accent-500 rounded"
                  />
                  <span className="font-medium text-neutral-700">{service}</span>
                </label>
              ))}
            </div>
            {errors.serviceInterest && (
              <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" /> {errors.serviceInterest}
              </p>
            )}
          </div>

          {/* Challenge Description */}
          <div>
            <label htmlFor="challenge" className="block text-sm font-semibold text-primary-900 mb-2">
              Your Primary Challenge *
            </label>
            <textarea
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition resize-none ${
                errors.challenge ? 'border-red-500 bg-red-50' : 'border-neutral-300'
              }`}
              placeholder="Describe the main challenge or opportunity you'd like to discuss..."
            />
            {errors.challenge && (
              <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" /> {errors.challenge}
              </p>
            )}
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-primary-900 mb-2">
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition"
              >
                <option value="">Select budget range</option>
                {BUDGETS.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-primary-900 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition"
              >
                <option value="Immediate">Immediate (0-1 month)</option>
                <option value="Short-term">Short-term (1-3 months)</option>
                <option value="Medium-term">Medium-term (3-6 months)</option>
                <option value="Long-term">Long-term (6+ months)</option>
              </select>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Any additional details or questions..."
            />
          </div>

          {formState.message && (
            <div
              className={`p-4 rounded-lg flex items-center gap-3 ${
                formState.status === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {formState.status === 'success' ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <span>{formState.message}</span>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="flex-1 px-6 py-3 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:border-neutral-400 transition"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={formState.status === 'loading'}
              className="flex-1 px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 disabled:bg-gray-400 transition"
            >
              {formState.status === 'loading' ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </div>
      )}
    </form>
  )
}
