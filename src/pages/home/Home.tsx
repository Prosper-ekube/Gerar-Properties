import Navbar from "../../components/layout/Navbar"
import Hero from "./sections/Hero"
import FeaturedProperties from "./sections/FeaturedProperties"
import Testimonials from "./sections/Testimonials"
import Footer from "../../components/layout/Footer"

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProperties />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home