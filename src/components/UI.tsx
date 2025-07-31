import React, { useState, useEffect, useCallback } from 'react';

// SVG Icon Components
export const IconPhone = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
export const IconMail = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;
export const IconMapPin = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
export const IconFacebook = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
export const IconInstagram = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>;
export const IconMenu = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>;
export const IconX = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>;
export const IconChevronLeft = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"></path></svg>;
export const IconChevronRight = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"></path></svg>;
export const IconStar = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
export const IconCar = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 16.5 19 12l-1-4-4 1-5-5-2 1v3l-2 4h3l2-2h4l2 2Z"></path><path d="M5 18h14"></path><circle cx="6.5" cy="18.5" r="2.5"></circle><circle cx="17.5" cy="18.5" r="2.5"></circle></svg>;
export const IconUser = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
export const IconShieldCheck = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>;
export const IconSparkles = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9L12 16l1.9-4.8 4.8-1.9-4.8-1.9L12 3z"></path><path d="M5 22v-5"></path><path d="M19 22v-5"></path><path d="M3 15h4"></path><path d="M17 15h4"></path></svg>;
export const IconWrench = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
export const IconCheck = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 6 9 17l-5-5"></path></svg>;
export const IconWhatsApp = ({ className = '' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className={className}><path fillRule="evenodd" d="M18.413 5.587A9.943 9.943 0 0 0 12 2.057a9.947 9.947 0 0 0-9.943 9.943c0 2.24.743 4.31 2.03 5.99L2 22l4.133-2.067a9.922 9.922 0 0 0 5.867 1.98h.004c5.49 0 9.943-4.453 9.943-9.943a9.93 9.93 0 0 0-2.534-6.423zM12.004 22.06c-1.9 0-3.7-.52-5.26-1.46l-.37-.22-3.9 1.95 1.98-3.82-.24-.39c-1.05-1.7-1.6-3.7-1.6-5.8 0-4.4 3.58-7.98 7.98-7.98s7.98 3.58 7.98 7.98-3.58 7.98-7.98 7.98zm4.4-7.4c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.01-.37.11-.49.1-.1.22-.26.33-.39.12-.12.16-.2.24-.34.08-.14.04-.26 0-.38-.04-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.55-.42-.14 0-.3 0-.44 0-.14 0-.38.06-.58.3-.2.24-.76.74-.76 1.8 0 1.06.78 2.1.88 2.24.12.14 1.54 2.36 3.74 3.3.52.22.94.34 1.26.44.5.14.94.12 1.3.08.4-.04 1.42-.58 1.62-1.14.2-.54.2-1.02.14-1.14-.08-.12-.22-.18-.46-.3z" clipRule="evenodd"></path></svg>;

// Car Card Component
interface Car {
    imageUrl: string;
    altText: string;
    title: string;
    price: string;
    year: number;
    kms: string;
    fuel: string;
}

export const CarCard: React.FC<{ car: Car }> = ({ car }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
        <div className="relative">
            <img src={car.imageUrl} alt={car.altText} className="w-full h-56 object-cover" loading="lazy" />
             <div className="absolute top-0 right-0 bg-mamba-blue text-white text-lg font-bold py-2 px-4 rounded-bl-lg">{car.price}</div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold font-sans text-mamba-text-dark mb-2 h-14">{car.title}</h3>
            <div className="flex justify-around text-mamba-text-medium border-t pt-4 mt-4">
                <div className="text-center">
                    <div className="font-bold">{car.year}</div>
                    <div className="text-sm">Año</div>
                </div>
                <div className="text-center">
                    <div className="font-bold">{car.kms}</div>
                    <div className="text-sm">KM</div>
                </div>
                 <div className="text-center">
                    <div className="font-bold">{car.fuel}</div>
                    <div className="text-sm">Combustible</div>
                </div>
            </div>
             <a href="https://www.coches.net/concesionario/mambaautomocion/?embedded=0" target="_blank" rel="noopener noreferrer" className="mt-6 block w-full text-center bg-mamba-text-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-mamba-blue transition-colors duration-300">
                Ver en Coches.net
            </a>
        </div>
    </div>
);


// Testimonial Carousel
interface Testimonial {
    quote: string;
    author: string;
}

export const TestimonialCarousel: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, [testimonials.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);


    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden relative h-64">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col items-center justify-center h-full text-center p-4">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => <IconStar key={i} className="w-6 h-6 text-yellow-400" />)}
                            </div>
                            <blockquote className="text-lg md:text-xl font-body italic text-mamba-text-medium mb-4">"{testimonial.quote}"</blockquote>
                            <cite className="font-bold font-sans text-mamba-text-dark">- {testimonial.author}</cite>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition">
                <IconChevronLeft className="w-6 h-6 text-mamba-text-dark" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition">
                <IconChevronRight className="w-6 h-6 text-mamba-text-dark" />
            </button>
        </div>
    );
};


// Feature Card
export const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
        <div className="inline-block p-4 bg-mamba-blue/10 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-sans mb-2">{title}</h3>
        <p className="text-mamba-text-medium font-body">{children}</p>
    </div>
);


// Service Card
export const ServiceCard: React.FC<{ icon: React.ReactNode; image: string; title: string; items: string[] }> = ({ icon, image, title, items }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <div className="relative h-56">
            <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy"/>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 {icon}
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold font-sans mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start font-body">
                        <IconCheck className="w-5 h-5 text-mamba-green mr-3 mt-1 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


// Page Hero
export const PageHero: React.FC<{ title: string; subtitle: string; }> = ({ title, subtitle }) => (
    <div className="bg-mamba-gray-light py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-mamba-text-dark mb-4" dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className="text-lg md:text-xl text-mamba-text-medium max-w-3xl mx-auto font-body" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
    </div>
);

// Form related components
export const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, id, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-mamba-text-medium mb-1">{label}</label>
        <input id={id} {...props} className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-mamba-blue focus:border-mamba-blue transition" />
    </div>
);

export const FormTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, id, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-mamba-text-medium mb-1">{label}</label>
        <textarea id={id} {...props} rows={5} className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-mamba-blue focus:border-mamba-blue transition"></textarea>
    </div>
);