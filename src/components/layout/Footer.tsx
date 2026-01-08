import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0f172a] font-inter mt-20 py-8 px-6 text-white w-full">
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
                {/* Column 1 */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 p-2 rounded-md"><LuBuilding2 className="text-lg text-white" /></div>
                        <span className="font-normal text-xl">Gerar Properties</span>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="duration-1000 hover:text-gray-200 text-gray-400 transition-colors"><FaFacebookF className="text-xl" /></a>
                        <a href="#" aria-label="Twitter" className="duration-1000 hover:text-gray-200 text-gray-400 transition-colors"><FaTwitter className="text-xl" /></a>
                        <a href="#" aria-label="Instagram" className="duration-1000 hover:text-gray-200 text-gray-400 transition-colors"><FaInstagram className="text-xl" /></a>
                    </div>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-normal text-lg">Explore</h3>
                    <a href="/properties" className="duration-1000 hover:text-gray-200 text-gray-400 text-sm transition-colors">Find a Home</a>
                    <a href="/contact" className="duration-1000 hover:text-gray-200 text-gray-400 text-sm transition-colors">Sell a Home</a>
                </div>
                {/* Column 3 */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-normal text-lg">Contact Us</h3>
                    <p className="text-gray-400 text-sm">19 Unity Street, Wuse 2, Abuja, Nigeria</p>
                    <p className="text-gray-400 text-sm">+234 801 234 5678</p>
                    <p className="text-gray-400 text-sm">gerarproperties@gmail.com</p>
                </div>
            </div>
            {/* Bottom line */}
            <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Gerar Properties. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer