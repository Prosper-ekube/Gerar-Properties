import { IoChevronDown } from "react-icons/io5"
import PropertyCard from "../../../components/property/PropertyCard"
import property_a from "../../../assets/images/property_a.png"
import property_b from "../../../assets/images/property_b.png"
import property_c from "../../../assets/images/property_c.png"

const propertyList = [
    {
        id: 'a',
        beds: 5,
        baths: 4,
        image: property_a,
        location: 'Asokoro, Abuja',
        price: '₦420,000,000',
        sqft: '4,200',
        status: 'For Sale' as const,
        title: '5-Bedroom Fully Detached Residence',
    },
    {
        id: 'b',
        beds: 2,
        baths: 2,
        image: property_c,
        location: 'Lekki Phase 1, Lagos',
        price: '₦280,000,000',
        sqft: '1,500',
        status: 'For Sale' as const,
        title: '4-Bedroom Detached Duplex',
    },
    {
        id: 'c',
        beds: 4,
        baths: 3,
        image: property_b,
        location: 'Ikoyi, Lagos',
        price: '₦650,000,000',
        sqft: '2,800',
        status: 'For Rent' as const,
        title: 'Luxury 5-Bedroom Waterfront Apartment',
    },
    {
        id: 'd',
        beds: 5,
        baths: 3,
        image: property_b,
        location: 'Maitama, Abuja',
        price: '₦520,000,000',
        sqft: '2,100',
        status: 'For Sale' as const,
        title: 'High-End 4-Bedroom Terrace',
    },
    {
        id: 'e',
        beds: 3,
        baths: 2,
        image: property_a,
        location: 'Oniru Estate, Victoria Island, Lagos',
        price: '₦310,000,000',
        sqft: '1,200',
        status: 'For Sale' as const,
        title: '3-Bedroom Smart Apartment',
    },
    {
        id: 'f',
        beds: 2,
        baths: 2,
        image: property_c,
        location: 'Gwarinpa, Abuja',
        price: '₦480,000,000',
        sqft: '1,200',
        status: 'For Rent' as const,
        title: '4-Bedroom Contemporary Duplex',
    },
]

const PropertyList: React.FC = () => {
    return (
        <>
            <section className="bg-white pb-24 pt-16">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Meta */}
                    <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm font-medium text-gray-600">Showing 1–{propertyList.length} of {propertyList.length} properties</p>
                        <button className="group flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-blue-600" type="button">
                            <span>Sort by:</span>
                            <span className="font-semibold">Newest</span>
                            <IoChevronDown />
                        </button>
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                        {propertyList.map(property => (
                            <PropertyCard key={property.id} {...property} />
                        ))}
                    </div>
                    {/* Load more */}
                    <div className="mt-16 flex justify-center">
                        <button className="rounded-lg border border-gray-200 bg-white px-8 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 hover:shadow-sm">
                            Load More Properties
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyList