'use client'

const CLIENT_IMAGES = [
  '/images/WhatsApp-Image-2025-07-25-at-7.28.59-PM.jpeg',
  '/images/WhatsApp-Image-2025-07-25-at-7.28.59-PM-1.jpeg',
  '/images/WhatsApp-Image-2025-07-25-at-7.29.00-PM.jpeg',
  '/images/WhatsApp-Image-2025-07-25-at-7.29.00-PM-1.jpeg',
  '/images/WhatsApp-Image-2025-07-25-at-7.29.01-PM.jpeg',
  '/images/WhatsApp-Image-2025-07-26-at-5.47.40-PM.jpeg',
]

export default function ClientLogoCarousel() {
  // Duplicate the array so the marquee loops seamlessly
  const images = [...CLIENT_IMAGES, ...CLIENT_IMAGES, ...CLIENT_IMAGES]

  return (
    <div className="w-full overflow-hidden" aria-label="Our clients">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track gap-6 items-center">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 h-16 w-32 md:h-20 md:w-40 bg-white rounded-lg border border-neutral-200 flex items-center justify-center p-3 mx-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Client logo"
              className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
