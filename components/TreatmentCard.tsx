import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceCategory } from '../types';
import { Link } from 'react-router-dom';

interface TreatmentCardProps {
    service: ServiceCategory;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ service }) => {
    return (
        <Link
            to={`/services/${service.id}`}
            className="group relative bg-white border-2 border-black rounded-[20px] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer block h-[480px] flex flex-col"
        >
            {/* Image Section - 60-65% of card */}
            <div className="relative h-[65%] overflow-hidden">
                <img
                    src={service.imageUrl || 'https://via.placeholder.com/600x400'}
                    alt={`${service.title} treatment at Eunoia Homeopathy Clinic`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Section - 35-40% of card */}
            <div className="flex-1 p-6 flex flex-col justify-between bg-white">
                <div>
                    {/* Treatment Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                        {service.title}
                    </h3>

                    {/* Single Descriptive Line */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {service.description}
                    </p>
                </div>

                {/* Read More Button */}
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-rose-700 transition-colors group/button">
                    <span>Read More</span>
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                </button>
            </div>
        </Link>
    );
};

export default TreatmentCard;
