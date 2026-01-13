import Navbar from "../../components/layout/Navbar"
import Header from "./sections/Header"
import PropertyList from "./sections/PropertyList"
import Footer from "../../components/layout/Footer"

const Properties: React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <PropertyList />
            </main>
            <Footer />
        </>
    )
}

export default Properties