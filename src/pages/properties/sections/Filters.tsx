import { useState } from "react"
import { IoArrowForward, IoChevronDown, IoSearch } from "react-icons/io5"

type DropdownOption = string

interface DropdownProps {
    label: string
    onChange: (val: string) => void
    options: DropdownOption[]
    value: string
}

const Dropdown: React.FC<DropdownProps> = ({ label, onChange, value, options }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative w-full lg:w-44">
            <button className="bg-white border border-gray-200 flex items-center justify-between px-4 py-3 rounded-md text-gray-700 text-sm transition 
                hover:border-gray-300 hover:shadow-sm w-full" type="button" onClick={() => setIsOpen(prev => !prev)}                
            >
                <span className="truncate">{value || label}</span>
                <IoChevronDown className={`ml-2 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}/>
            </button>
            <ul className={`absolute left-0 top-full mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl z-50 
                transition-all duration-200 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
            >
                {options.map(option => (
                    <li className="cursor-pointer px-4 py-3 text-gray-600 text-sm transition-colors hover:bg-blue-50 hover:text-blue-600" key={option}
                        onClick={() => {
                            onChange(option)
                            setIsOpen(false)
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Filters: React.FC = () => {
    const [query, setQuery] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [beds, setBeds] = useState("")

    const handleSearch = () => {
        console.log({ query, priceRange, propertyType, beds })
    }

    return (
        <div className="bg-white flex flex-col gap-4 max-w-[375px] md:max-w-[1280px] mx-auto p-6 rounded-md shadow-sm w-full md:flex-row lg:items-center">
            {/* Search Input */}
            <div className="flex flex-grow items-center border border-gray-200 rounded-md px-4 py-3 focus-within:ring-1 focus-within:ring-blue-100
                focus-within:border-blue-400 transition-all">
                <IoSearch className="text-gray-400 text-xl" />
                <input className="ml-3 w-full border-none bg-transparent text-gray-700 text-sm focus:outline-none focus:ring-0" onChange={e => setQuery(e.target.value)}
                    placeholder="Search by location, property name..." type="text" value={query}
                />
            </div>
            {/* Filters */}
            <div className="flex flex-col gap-3 w-full md:flex-row lg:gap-3 lg:w-auto">
                <Dropdown
                    label="Price Range"
                    onChange={setPriceRange}
                    options={["Any", "$0-$1k", "$1k-$5k", "$5k+"]}
                    value={priceRange}                    
                />
                <Dropdown
                    label="Property Type"
                    onChange={setPropertyType}
                    options={["Any", "Apartment", "House", "Villa"]}
                    value={propertyType}                    
                />
                <Dropdown
                    label="Beds"
                    onChange={setBeds}
                    options={["Any", "1", "2", "3", "4+"]}
                    value={beds}                    
                />
            </div>
            {/* Search Button */}
            <button className="mt-2 md:mt-0 flex h-12 md:h-11 w-full md:w-12 items-center justify-center rounded-md bg-blue-600 text-white transition
                hover:bg-blue-700 hover:shadow-lg active:scale-95" onClick={handleSearch}>
                <IoArrowForward className="text-2xl" />
            </button>
        </div>
    )
}

export default Filters