import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { IconPhone, IconMail, IconMapPin, IconFacebook, IconInstagram, IconMenu, IconX, IconWhatsApp } from './UI';
import logo from '../assets/logo.png';

const MambaLogo = () => (
  <Link to="/" className="font-sans tracking-tighter" aria-label="MAMBA Automoción - Volver al inicio">
    <img src={logo} alt="Mamba Automoción" style={{ height: 48 }} />
  </Link>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClasses = "px-4 py-2 text-mamba-text-dark hover:text-mamba-blue transition-colors duration-300";
    const activeLinkClasses = "text-mamba-blue";

    const navItems = [
        { path: "/quienes-somos", label: "Quiénes Somos" },
        { path: "/servicios", label: "Nuestros Servicios" },
        { path: "/vehiculos", label: "Vehículos Disponibles" },
        { path: "/contacto", label: "Contacto" },
    ];

    console.log('isOpen', isOpen);

    return (
        <>
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <MambaLogo />
                        <nav className="hidden lg:flex items-center space-x-2">
                            {navItems.map(item => (
                                <NavLink key={item.path} to={item.path} className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="hidden lg:block">
                            <Link to="/vender" className="bg-mamba-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                                Vende Tu Coche
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
                                <IconMenu className="w-8 h-8 text-mamba-text-dark" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Overlay y menú móvil fuera del header y container */}
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            ></div>
            {/* Menú lateral */}
            <div
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-[9999] transform transition-transform lg:hidden duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <MambaLogo />
                    <button onClick={() => setIsOpen(false)} aria-label="Cerrar menú">
                        <IconX className="w-8 h-8 text-mamba-text-dark" />
                    </button>
                </div>
                <nav className="flex flex-col items-center space-y-0 p-8">
                    {navItems.map((item, idx) => (
                        <React.Fragment key={item.path}>
                            <NavLink to={item.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `text-xl w-full text-center py-4 ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
                                {item.label}
                            </NavLink>
                            {idx < navItems.length - 1 && <hr className="w-2/3 mx-auto border-mamba-gray-light" />}
                        </React.Fragment>
                    ))}
                    <hr className="w-2/3 mx-auto border-mamba-gray-light my-4" />
                    <Link to="/vender" onClick={() => setIsOpen(false)} className="bg-mamba-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 w-full text-center text-lg mt-4">
                        Vende Tu Coche
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