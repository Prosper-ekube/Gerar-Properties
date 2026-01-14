const Header: React.FC = () => {
    return (
        <header className="bg-gray-50 pt-24 lg:pt-32 pb-8 px-6">
            <div className="flex flex-col items-center lg:items-start mx-auto min-[328px]:max-w-[296px] md:max-w-[500px] lg:max-w-7xl text-center lg:text-left">
                <h2 className="font-semibold text-gray-900 text-2xl md:text-4xl">Contact Gerar Properties</h2>
                <p className="mt-3 text-gray-500 text-sm md:text-lg">
                    Reach out to our team for property inquiries, viewing appointments, or <br className="hidden lg:inline" /> any questions about buying and renting.
                </p>
            </div>
        </header>
    )
}

export default Header