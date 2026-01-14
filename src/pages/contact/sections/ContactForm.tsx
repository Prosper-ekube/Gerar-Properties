import Button from "../../../components/ui/Button"

const ContactForm: React.FC = () => {
    return (
        <div className="bg-white flex flex-col lg:flex-1 items-center mx-auto p-6 lg:p-0 w-full">
            <div className="bg-white border border-gray-100 p-4 md:p-6 rounded-2xl shadow-sm md:p-10 flex-1 w-full">
                <h2 className="font-bold text-xl md:text-2xl text-gray-900">Send us a message</h2>
                <p className="mb-8 mt-2 text-gray-500 text-xs md:text-sm">Fill out the form and one of our agents will get back to you within one business day.</p>
                <form className="flex flex-col gap-6 h-full">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-700 text-xs md:text-sm">Name</label>
                        <input className="bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 p-4 rounded-xl text-gray-700 transition-all"
                            placeholder="Your name" type="text"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-700 text-xs md:text-sm">Email</label>
                        <input className="bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 p-4 rounded-xl text-gray-700 transition-all"
                            placeholder="Your email address" type="email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-700 text-xs md:text-sm">Message</label>
                        <textarea className="bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 flex-1 min-h-[160px] p-4 rounded-xl text-gray-700 transition-all"
                            placeholder="How can we help you?"
                        />
                    </div>
                    <Button as='button' text='Send message' />
                </form>
            </div>
        </div>
    )
}

export default ContactForm