import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

const ContactDetails: React.FC = () => {
    return (
        <div className="bg-white p-6 lg:p-0 w-full">
            <div className="bg-white border border-gray-100 flex flex-col gap-8 p-4 sm:p-8 rounded-2xl shadow-sm">
                <h2 className="font-bold text-xl md:text-2xl text-gray-900">Contact details</h2>
                <div className="flex flex-col gap-6">
                    {/* Office Address */}
                    <div className="flex gap-4">
                        <div className="bg-gray-50 flex shrink-0 h-10 items-center justify-center rounded-lg w-10"><IoLocationOutline className="text-blue-600 text-xl" /></div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Office address</h4>
                            <p className="text-gray-500 text-sm">19 Unity Street, Wuse 2, Abuja, Nigeria</p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex gap-4">
                        <div className="bg-gray-50 flex h-10 items-center justify-center rounded-lg w-10">
                            <IoCallOutline className="text-blue-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Phone</h4>
                            <p className="text-gray-500 text-sm">+234 801 234 5678</p>
                            <p className="text-gray-400 text-xs">Mon-Fri, 9:00am-6:00pm</p>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex gap-4">
                        <div className="bg-gray-50 flex h-10 items-center justify-center rounded-lg w-10">
                            <IoMailOutline className="text-blue-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Email</h4>
                            <p className="text-gray-500 text-sm">gerarproperties@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default ContactDetails