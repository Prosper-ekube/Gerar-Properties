import Button from "../../../components/ui/Button"
import hero_img from "../../../assets/images/hero_img.png"

const Hero: React.FC = () => {
    return (
        <section className="bg-gray-50 w-full">
            <div className="flex flex-col-reverse sm:flex-col-reverse lg:flex-row gap-10 items-center mx-auto px-4 pt-28 pb-12 lg:px-6 lg:py-32 md:gap-16 
                            lg:gap-0 xl:w-[1280px]">
                {/* Left Text Section */}
                <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left w-full">
                    <h1 className="font-semibold lg:font-bold leading-tight max-w-[335px] md:max-w-[600px] lg:max-w-[390px] text-gray-900 text-3xl md:text-5xl">
                        Find Your Dream Home with Gerar Properties
                    </h1>
                    <p className="max-w-[299px] md:max-w-[340px] lg:max-w-[420px] text-base md:text-lg text-gray-500">
                        Discover exclusive listings, luxury apartments, and modern homes tailored to your lifestyle. Your perfect space awaits.
                    </p>
                    <div className="flex flex-col min-[360px]:flex-row gap-4 min-[360px]:gap-2 items-center sm:justify-start">
                        <Button as='link' text='Browse Properties' to='/properties' />
                        <Button as='link' text='Contact Agent' to='/contact' variant='secondary' />
                    </div>
                </div>
                {/* Right Image + Stats Card */}
                <div className="flex items-center justify-center mb-[20px] relative w-full min-[500px]:w-[469px] lg:w-full xl:w-[1200px]">
                    <img alt='Hero' className="object-cover rounded-lg w-full min-[500px]:w-[450px] lg:w-full" src={hero_img} />
                    {/* Stats Card */}
                    <div className="absolute bg-white -bottom-10 md:-bottom-12 flex flex-row gap-4 items-center justify-center lg:-left-6 px-2 py-5 rounded-md shadow-xl 
                                    text-blue-500 w-[240px] sm:w-[300px]">
                        <div className="flex flex-col">
                            <span className="font-bold text-xl sm:text-2xl">120+</span>
                            <span className="text-gray-500 text-xs sm:text-sm">Premium Listings</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl sm:text-2xl">15k+</span>
                            <span className="text-gray-500 text-xs sm:text-sm">Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero