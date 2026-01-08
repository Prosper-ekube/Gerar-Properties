import Navbar from "../../components/layout/Navbar"
import Hero from "./sections/Hero"
import FeaturedProperties from "./sections/FeaturedProperties"
import Footer from "../../components/layout/Footer"

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProperties />
            <Footer />
        </>
    )
}

export default Home