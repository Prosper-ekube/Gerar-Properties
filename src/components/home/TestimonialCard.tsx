import React from 'react';
import { IoStar } from 'react-icons/io5';

interface TestimonialProps {
    avi: string;
    content: string;
    name: string;
    rating: number;
    role: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
    avi,
    content,
    name,
    rating,
    role,
}) => {
    return (
        <div className="bg-white border border-gray-100 cursor-pointer flex flex-col max-w-[375px] md:max-w-[450px] overflow-hidden p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            {/* Star Rating */}
            <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(rating)].map((_, i) => (
                    <IoStar key={i} />
                ))}
            </div>
            {/* Testimonial Text */}
            <p className="flex-grow leading-relaxed text-gray-600 text-base">{content}</p>
            {/* Client Profile */}
            <div className="flex items-center mt-6">
                <img alt={name} className="h-12 object-cover rounded-full w-12" src={avi} />
                <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                    <p className="text-gray-400 text-xs tracking-wider">{role}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard