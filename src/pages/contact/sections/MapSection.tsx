import React from 'react';

const MapSection: React.FC = () => {
    return (
        <div className="bg-white flex flex-col flex-1 p-6 lg:p-0 w-full">
            <div className="bg-white border border-gray-100 p-4 sm:P-6 rounded-2xl shadow-sm">
                <h2 className="font-bold text-xl text-gray-900">Our location</h2>
                <p className="mb-6 mt-2 text-gray-500 text-sm">Visit our office in the heart of the city.</p>

                <div className="h-64 lg:flex-1 overflow-hidden rounded-xl w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.4752832443664!2d7.328304763374419!3d9.17575006089204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd916057b0e0b%3A0xfd08cba97c7b7ce0!2sGerar%20V%20Computers!5e1!3m2!1sen!2sng!4v1768376051358!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Gerar Properties"
                    />
                </div>
            </div>
        </div>        
    )
}

export default MapSection