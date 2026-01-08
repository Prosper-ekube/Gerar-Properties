import { useState } from "react"
import { useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { LuBuilding2 } from "react-icons/lu"

const Navbar: React.FC = () => {
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Properties', path: '/properties' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <nav className="bg-white fixed font-inter left-0 shadow-md top-0 w-full z-10">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
                <div className={`flex-row gap-2 items-center ${isOpen ? 'invisible' : 'flex'}`}>
                    <div className="bg-blue-600 p-2 rounded-md"><LuBuilding2 className="text-lg text-white" /></div>
                    <span className="font-bold text-base text-black">Gerar Properties</span>
                </div>
                {/* Desktop Menu */}
                <ul className="font-medium hidden md:flex space-x-8">
                    {menuItems.map(item => {
                        const isActive = location.pathname === item.path
                        return (
                            <li className={`cursor-pointer transition-colors ${isActive ? 'font-semibold text-black' : 'hover:text-blue-500 text-gray-500'}`} key={item.name}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
                {/* Mobile toggle menu */}
                <div className={`md:hidden ${isOpen ? 'flex items-end' : ''}`} onClick={toggleMenu}>{isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}</div>
            </div>
            {/* Mobile Menu */}
            <div className={`bg-white duration-3000 ease-in-out md:hidden overflow-hidden transition-all w-full ${isOpen ? 'h-screen' : 'h-0'}`}>
                <ul className="flex flex-col font-extrabold gap-3 px-10 space-y-4">
                    {menuItems.map(item => (
                        <li className="hover:text-blue-500 text-3xl text-gray-700" key={item.name} onClick={() => setIsOpen(false)} >{item.name}</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar