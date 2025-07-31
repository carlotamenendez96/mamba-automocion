import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { IconPhone, IconMail, IconMapPin, IconFacebook, IconMenu, IconX, IconWhatsApp } from './UI';
import logo from '@/assets/logo.png';

const MambaLogo = () => (
  <Link to="/" className="font-sans tracking-tighter" aria-label="MAMBA Automoción - Volver al inicio">
    <img src={logo} alt="Mamba Automoción" style={{ height: 48 }} />
  </Link>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll para cambiar el estilo del header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: "/quienes-somos", label: "Quiénes Somos" },
        { path: "/servicios", label: "Nuestros Servicios" },
        { path: "/vehiculos", label: "Vehículos Disponibles" },
        { path: "/contacto", label: "Contacto" },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
                    : 'bg-white/80 backdrop-blur-sm'
            }`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <MambaLogo />
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map(item => (
                                <NavLink 
                                    key={item.path} 
                                    to={item.path} 
                                    className={({ isActive }) => `
                                        relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 group
                                        ${isActive 
                                            ? 'text-mamba-blue bg-blue-50 shadow-sm' 
                                            : 'text-mamba-text-dark hover:text-mamba-blue hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {/* Efecto hover */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </NavLink>
                            ))}
                        </nav>

                        {/* CTA Button Desktop */}
                        <div className="hidden lg:block">
                            <Link 
                                to="/vender" 
                                className="relative bg-gradient-to-r from-mamba-blue to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group overflow-hidden"
                            >
                                <span className="relative z-10">Vende Tu Coche</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button 
                                onClick={() => setIsOpen(!isOpen)} 
                                aria-label="Abrir menú"
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                                <IconMenu className="w-6 h-6 text-mamba-text-dark" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Spacer para el contenido debajo del header fijo */}
            <div className="h-20"></div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity lg:hidden ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-[60] transform transition-transform lg:hidden duration-300 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <MambaLogo />
                    <button 
                        onClick={() => setIsOpen(false)} 
                        aria-label="Cerrar menú"
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        <IconX className="w-6 h-6 text-mamba-text-dark" />
                    </button>
                </div>
                
                <nav className="flex flex-col p-6 space-y-2">
                    {navItems.map((item, idx) => (
                        <React.Fragment key={item.path}>
                            <NavLink 
                                to={item.path} 
                                onClick={() => setIsOpen(false)} 
                                className={({ isActive }) => `
                                    relative px-4 py-4 rounded-lg font-semibold transition-all duration-200 group
                                    ${isActive 
                                        ? 'text-mamba-blue bg-blue-50 shadow-sm' 
                                        : 'text-mamba-text-dark hover:text-mamba-blue hover:bg-gray-50'
                                    }
                                `}
                            >
                                <span className="relative z-10">{item.label}</span>
                            </NavLink>
                            {idx < navItems.length - 1 && (
                                <hr className="border-gray-100" />
                            )}
                        </React.Fragment>
                    ))}
                    
                    <hr className="border-gray-100 my-4" />
                    
                    <Link 
                        to="/vender" 
                        onClick={() => setIsOpen(false)} 
                        className="relative bg-gradient-to-r from-mamba-blue to-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-center group overflow-hidden"
                    >
                        <span className="relative z-10">Vende Tu Coche</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </Link>
                </nav>
            </div>
        </>
    );
};

const Footer = () => {
    return (
       <footer className="bg-mamba-text-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="space-y-4">
                       <div className="inline-block"><img src={logo} alt="Mamba Automoción" style={{ height: 48, filter: 'invert(1)' }} /></div>
                        <p className="text-gray-300 text-sm font-body">
                           Tu socio de confianza para <strong>vehículos de ocasión en Asturias</strong>. Calidad, transparencia y atención personalizada en cada <strong>compra y venta de coches</strong>.
                        </p>
                    </div>
                    {/* Center Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-sans">Navegación</h3>
                        <ul className="space-y-2 font-body">
                            <li><Link to="/quienes-somos" className="hover:text-mamba-blue transition">Quiénes Somos</Link></li>
                            <li><Link to="/servicios" className="hover:text-mamba-blue transition">Nuestros Servicios</Link></li>
                            <li><Link to="/vehiculos" className="hover:text-mamba-blue transition">Vehículos Disponibles</Link></li>
                             <li><Link to="/contacto" className="hover:text-mamba-blue transition">Contacto</Link></li>
                             <li><Link to="/vender" className="hover:text-mamba-blue transition">Vende Tu Coche</Link></li>
                        </ul>
                    </div>
                    {/* Right Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-sans">Contacto</h3>
                        <ul className="space-y-3 font-body text-sm">
                            <li className="flex items-start">
                                <IconMapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>Pol. Ind Asipo, Calle A, Parc. 84 Nave 3, 33428 Llanera, Asturias, España.</span>
                            </li>
                            <li className="flex items-center">
                                <IconPhone className="w-5 h-5 mr-3" />
                                <span>682 407 482</span>
                            </li>
                            <li className="flex items-center">
                                <IconMail className="w-5 h-5 mr-3" />
                                <span>administracion@mambaautomocion.com</span>
                            </li>
                        </ul>
                         <div className="flex space-x-4 mt-6">
                            <a href="https://www.facebook.com/p/MaMba-Automocion-100077819027982/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Mamba Automoción" className="text-gray-400 hover:text-white transition"><IconFacebook className="w-6 h-6" /></a>
                            {/* <a href="#" aria-label="Instagram de Mamba Automoción" className="text-gray-400 hover:text-white transition"><IconInstagram className="w-6 h-6" /></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black/20 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-400 font-body">
                    © {new Date().getFullYear()} MAMBA Automoción. Todos los derechos reservados. | <a href="#" className="underline hover:text-white">Aviso Legal</a> | <a href="#" className="underline hover:text-white">Política de Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/34682407482?embedded=0" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-mamba-green text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-30 flex items-center justify-center" aria-label="Contactar por WhatsApp">
            <IconWhatsApp className="w-8 h-8" />
        </a>
    );
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};