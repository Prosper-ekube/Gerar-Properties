import type { Property } from "../../types/property"
import { IoBedOutline, IoExpandOutline, IoLocationOutline } from "react-icons/io5"
import { PiBathtubThin } from "react-icons/pi"

const PropertyCard: React.FC<Property> = ({ beds, baths, image, location, price, sqft, status, title }) => {
    return (
        <div className="bg-white border border-gray-100 cursor-pointer flex flex-col max-w-[375px] overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            {/* Image Container */}
            <div className="h-64 relative w-full">
                <img alt={title} className="h-full object-cover w-full" src={image} />
                <div className="absolute backdrop-blur-md bg-black/30 font-medium left-4 px-3 py-1 rounded-lg text-white text-xs top-4">{status}</div>
            </div>
            {/* Details Container */}
            <div className="flex flex-col p-2 min-[320px]:p-6">
                <div className="flex items-baseline">
                    <span className="font-bold text-2xl text-gray-900">{price}</span>
                    {status === 'For Rent' && (
                        <span className="font-medium ml-1 text-gray-500 text-sm">/ yr</span>
                    )}
                </div>
                <h3 className="font-semibold mt-2 text-gray-800 text-lg">{title}</h3>
                <div className="flex items-center mt-2 text-gray-400 text-sm">
                    <IoLocationOutline className="mr-1" />
                    <span>{location}</span>
                </div>
                {/* Divider and Specs */}
                <div className="border-gray-100 border-t flex items-center justify-between mt-6 pt-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                        <IoBedOutline className="text-gray-400 text-lg" />
                        <span>{beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <PiBathtubThin className="text-gray-400 text-lg" />
                        <span>{baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoExpandOutline className="text-gray-400 text-lg" />
                        <span>{sqft} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard