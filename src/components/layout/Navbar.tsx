import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { LuBuilding2 } from "react-icons/lu"

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

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
                    {menuItems.map(item => (
                        <NavLink
                            className={({ isActive }) => `cursor-pointer transition-colors ${isActive ? 'font-semibold text-black' : 'hover:text-blue-500 text-gray-500'}`}
                            key={item.name}
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </ul>
                {/* Mobile toggle */}
                <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}</div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`bg-white duration-300 ease-in-out md:hidden overflow-hidden transition-all w-full ${isOpen ? 'h-screen' : 'h-0'}`}
            >
                <ul className="flex flex-col font-extrabold gap-6 px-10 pt-10">
                    {menuItems.map(item => (
                        <NavLink
                            className={({ isActive }) => `text-3xl transition-colors ${isActive ? 'text-black' : 'hover:text-blue-500 text-gray-700'}`}
                            key={item.name}
                            onClick={() => setIsOpen(false)}
                            to={item.path}                                                        
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar