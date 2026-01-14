import Navbar from "../../components/layout/Navbar"
import ContactForm from "./sections/ContactForm"
import MapSection from "./sections/MapSection"
import Footer from "../../components/layout/Footer"
import Header from "./sections/Header"
import ContactDetails from "./sections/ContactDetails"

const Contact: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="flex flex-col font-inter">
                <Header />
                <section className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between lg:gap-7 w-full max-w-7xl mx-auto py-10 lg:py-20 lg:px-6"> 
                    <ContactForm />
                    <div className="flex flex-col lg:flex-1 lg:gap-7 w-full">
                        <ContactDetails />
                        <MapSection />
                    </div>                    
                </section>
            </main>            
            <Footer />
        </>
    )
}

export default Contact