
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function CustomerTestimonials() {

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Amazing service! My HP printer was down during an important work deadline. The technician fixed it remotely in just 15 minutes. Lifesavers!",
      verified: "Verified Purchase • HP OfficeJet Pro"
    },
    {
      name: "Mike Chen",
      rating: 5,
      review:
        "Called for a Brother printer issue. The technician was knowledgeable and patient. Walked me through the entire process. Highly recommend!",
      verified: "Verified Purchase • Brother MFC-L2750DW"
    },
    {
      name: "Emily Davis",
      rating: 4.5,
      review:
        "Onsite service was fantastic! The technician arrived on time, diagnosed the issue quickly, and had my Canon printer working perfectly.",
      verified: "Verified Purchase • Canon PIXMA"
    },
    {
      name: "Robert Martinez",
      rating: 5,
      review:
        "The live chat support was incredibly helpful. Got my Epson printer working again in minutes.",
      verified: "Verified Purchase • Epson EcoTank"
    },
    {
      name: "Lisa Thompson",
      rating: 4.5,
      review:
        "Great service overall. The driver download section saved me hours of searching.",
      verified: "Verified Purchase • Xerox WorkCentre"
    },
    {
      name: "David Wilson",
      rating: 5,
      review:
        "Called at 2 AM with a printer emergency. They answered immediately and helped me fix the issue.",
      verified: "Verified Purchase • Samsung Laser"
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex gap-1 text-yellow-400 text-sm">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        {hasHalfStar && <span>☆</span>}
      </div>
    );
  };

  const sliderSettings = {
    mobileFirst: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from customers we’ve helped
          </p>
        </div>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="bg-white h-full rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  {testimonial.verified}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
