import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Properties from "../pages/properties/Properties"
import Contact from "../pages/contact/Contact"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='properties/' element={<Properties />} />
                <Route path='contact/' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes