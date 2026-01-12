import TestimonialCard from "../../../components/home/TestimonialCard"
import customer_a from "../../../assets/images/customer_a.png"
import customer_b from "../../../assets/images/customer_b.png"
import customer_c from "../../../assets/images/customer_c.png"

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            avi: customer_a,
            content: "Gerar Properties made finding our first home incredible. The team was supportive, knowledgeable, and patient throughout the entire process.",
            name: "Adebayo Olufunmilayo",
            rating: 5,
            role: "Buyer",
        },
        {
            avi: customer_b,
            content: "Professionalism at its finest. They sold our property in less than a week for a price we didn't think was possible. Highly recommended!",
            name: "Okwor Chukwuemeka",
            rating: 5,
            role: "Buyer",
        },
        {
            avi: customer_c,
            content: "The attention to detail and personal care we received was outstanding. I won't use anyone else for my real estate needs.",
            name: "Okolo Martins",
            rating: 5,
            role: "Buyer",
        },
    ]

    return (
        <section className="bg-gray-50 px-6 lg:px-8 py-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 text-center">
                    <h2 className="font-semibold text-center text-gray-900 text-2xl md:text-4xl">What Our Clients Say</h2>
                    <p className="mt-3 mx-auto max-w-[322px] md:max-w-[600px] text-gray-500 text-sm md:text-lg">
                        We pride ourselves on providing exceptional service and finding the perfect match for every client.
                    </p>
                </div>
                {/* Testimonials */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;