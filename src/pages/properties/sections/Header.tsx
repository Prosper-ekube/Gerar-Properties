import Filters from "./Filters"

const Header: React.FC = () => {
    return (
        <section className="bg-gray-50 font-inter">
            <div className="mx-auto max-w-7xl pt-24 p-12 px-6">
                {/* Title */}
                <div className="flex flex-col md:items-start">
                    <h2 className="font-semibold text-center text-gray-900 text-2xl md:text-4xl">Browse Properties</h2>
                    <p className="mt-3 text-center text-gray-500 text-sm md:text-lg">Explore our curated list of premium properties available for sale and rent.</p>
                </div>                
                {/* Filters */}
                <div className="mt-10 md:mt-6"><Filters /></div>
            </div>
        </section>
    )
}

export default Header