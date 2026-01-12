import type { Property } from "../../../types/property"
import { Link } from "react-router-dom"
import { IoArrowForward } from "react-icons/io5"
import PropertyCard from "../../../components/property/PropertyCard"
import property_a from "../../../assets/images/property_a.png"
import property_b from "../../../assets/images/property_b.png"
import property_c from "../../../assets/images/property_c.png"

const FeaturedProperties: React.FC = () => {
    const propertyData: Property[] = [
        {
            beds: 5,
            baths: 4,
            image: property_a,
            location: "Lekki Phase 1, Lagos",
            price: "₦480,000,000",
            sqft: "4,200",
            status: "For Sale",
            title: "Modern Waterfront Residence",
        },
        {
            beds: 2,
            baths: 2,
            image: property_b,
            location: "Ikoyi, Lagos",
            price: "₦395,000,000",
            sqft: "1,500",
            status: "For Sale",
            title: "Luxury City Apartment",
        },
        {
            beds: 4,
            baths: 3,
            image: property_c,
            location: "Independence Layout, Enugu",
            price: "₦2,500,000",
            sqft: "2,800",
            status: "For Rent",
            title: "Contemporary Family Home",
        },
    ]

    return (
        <section className="bg-white py-20">
            <div className="container max-w-[400px] md:max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-4 justify-between mb-4 lg:mb-12 md:items-end">
                    <div className="flex flex-col items-center md:items-start justify-center">
                        <h2 className="font-semibold text-center text-gray-900 text-2xl md:text-4xl">Featured Properties</h2>
                        <p className="mt-3 text-center text-gray-500 text-sm md:text-lg">Handpicked selection of our finest real estate.</p>
                    </div>
                    <Link to='/properties' className="cursor-pointer flex font-semibold items-center text-blue-600 transition-colors hover:text-blue-700 text-sm md:text-lg">
                        View all properties
                        <IoArrowForward className="ml-2" />
                    </Link>
                </div>
                {/* Properties */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {propertyData.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProperties