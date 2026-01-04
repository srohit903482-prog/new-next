

'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CustomerTestimonials() {

    const testimonials = [
        {
            name: "Sarah Johnson",
            avatar: "/images/sarah-avatar.jpg",
            rating: 5,
            review: "Amazing service! My HP printer was down during an important work deadline. The technician fixed it remotely in just 15 minutes. Lifesavers!",
            verified: "Verified Purchase • HP OfficeJet Pro"
        },
        {
            name: "Mike Chen",
            avatar: "/images/mike-avatar.jpg",
            rating: 5,
            review: "Called for a Brother printer issue. The technician was knowledgeable and patient. Walked me through the entire process. Highly recommend!",
            verified: "Verified Purchase • Brother MFC-L2750DW"
        },
        {
            name: "Emily Davis",
            avatar: "/images/emily-avatar.jpg",
            rating: 4.5,
            review: "Onsite service was fantastic! The technician arrived on time, diagnosed the issue quickly, and had my Canon printer working perfectly. Professional and efficient.",
            verified: "Verified Purchase • Canon PIXMA"
        },
        {
            name: "Robert Martinez",
            avatar: "/images/robert-avatar.jpg",
            rating: 5,
            review: "The live chat support was incredibly helpful. Got my Epson printer working again in minutes. The support agent was patient and knew exactly what to do.",
            verified: "Verified Purchase • Epson EcoTank"
        },
        {
            name: "Lisa Thompson",
            avatar: "/images/lisa-avatar.jpg",
            rating: 4.5,
            review: "Great service overall. The driver download section saved me hours of searching. My Xerox printer is working better than ever!",
            verified: "Verified Purchase • Xerox WorkCentre"
        },
        {
            name: "David Wilson",
            avatar: "/images/david-avatar.jpg",
            rating: 5,
            review: "Called at 2 AM with a printer emergency. They answered immediately and helped me fix the issue. True 24/7 service!",
            verified: "Verified Purchase • Samsung Laser"
        }
    ];

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        return (
            <div className="flex items-center gap-1">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
                {hasHalfStar && <span className="text-yellow-400 text-sm">☆</span>}
            </div>
        );
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Real reviews from real customers who we've helped
                    </p>
                    {/* <div className="flex items-center justify-center gap-2">
                        <div className="flex text-yellow-400 text-xl">
                            ★★★★★
                        </div>
                        <span className="text-xl font-semibold text-gray-800">4.9 out of 5</span>
                    </div> */}
                </div>

                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-3">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                                
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    "{testimonial.review}"
                                </p>
                                
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
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