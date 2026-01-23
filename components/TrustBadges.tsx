import React from 'react';
import Image from 'next/image';

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <Image
          src="/images/secure-safe.png"
          alt="Secure & Safe"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      text: 'Secure & Safe',
      subtext: 'SSL Protected'
    },
    {
      icon: (
        <Image
          src="/images/certified-tech.png"
          alt="Certified Techs"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      text: 'Certified Techs',
      subtext: 'Expert Support'
    },
    {
      icon: (
        <Image
          src="/images/same-day-service.png"
          alt="Same Day Service"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      ),
      text: 'Same Day Service',
      subtext: 'Fast Response'
    }
  ];

  return (
    <section className="py-8 -mt-8 bg-gradient-to-b from-soft-blue via-soft-white to-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center gap-12 md:gap-20 flex-wrap">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-4 text-center bg-white px-6 py-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0">{badge.icon}</div>
              <div className="text-left">
                <div className="font-semibold text-gray-800 text-base">{badge.text}</div>
                <div className="text-sm text-gray-600">{badge.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}