import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {  TestimonialCarousel, FeatureCard, IconUser, IconShieldCheck, IconSparkles, IconCar } from '@/components/UI';
import heroImg from '@/assets/hero.png';

// const featuredCars = [
//     { imageUrl: 'https://picsum.photos/seed/jeep1/600/400', altText: 'Jeep Wrangler de segunda mano en Asturias', title: 'JEEP Wrangler Unlimited 2.8 CRD Rubicon', price: '34.990 €', year: 2018, kms: '85.000', fuel: 'Diésel' },
//     { imageUrl: 'https://picsum.photos/seed/audi1/600/400', altText: 'Audi A3 de ocasión en Gijón', title: 'AUDI A3 Sportback 2.0 TDI S line', price: '22.500 €', year: 2019, kms: '110.000', fuel: 'Diésel' },
//     { imageUrl: 'https://picsum.photos/seed/bmw1/600/400', altText: 'BMW Serie 3 en venta en Oviedo', title: 'BMW Serie 3 320d Gran Turismo', price: '25.000 €', year: 2017, kms: '95.000', fuel: 'Diésel' },
//     { imageUrl: 'https://picsum.photos/seed/vw1/600/400', altText: 'Volkswagen Golf de segunda mano en Llanera', title: 'VOLKSWAGEN Golf 1.5 TSI EVO R-Line', price: '21.800 €', year: 2020, kms: '75.000', fuel: 'Gasolina' },
// ];

const testimonials = [
  {
    author: 'Ainhoa Salgado Rguez',
    quote: 'Compramos hace unas semanas el coche aquí y no podemos estar más contentas. La atención y el trato es de 10. Muy amables y atentos Pablo, Laura y el resto del equipo. Lo recomiendo sin duda si estás buscando un coche en Asturias. Muy buenos precios y muy buena calidad.',
    rating: 5,
  },
  {
    author: 'rafa carvalho',
    quote: 'Nos llevaron un tema delicado y fueron muy empaticos y profesionales.Tanto Pablo como Laura se portaron de 10. Seguro tendremos más tratos con ellos.Muchas gracias chicos.',
    rating: 5,
  },
  {
    author: 'DF L',
    quote: 'Les he comprado un coche, vendido dos y el trato por parte de Laura, Pablo y personal de taller ha sido estupendo, siendo transparentes y cumplidores. Es una empresa muy recomendable, sin duda.',
    rating: 5,
  },
  {
    author: 'Borja Fanjul',
    quote: 'Gran servicio de venta de vehículos de segunda mano,taller mecánico muy profesional y lavado de vehículos,el dueño del negocio Pablo muy profesional y sincero ,cosa q en este tipo de negocios se agradece,muy recomendable',
    rating: 5,
  },
  {
    author: 'Tres XL',
    quote: 'Muy buena compra una furgoneta y si tienes un problema te lo soluciona a la primera 100% recomendable',
    rating: 5,
  },
  {
    author: 'Carlota M',
    quote: 'Un servicio y un trato inmejorable. Sin duda si necesitara comprar otro vehículo, volvería allí sin dudarlo. Total confianza en ellos, sobre todo en Pablo, todo un profesional .',
    rating: 5,
  },
];

export const HomePage = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>MAMBA Automoción | Concesionario de Coches de Ocasión en Asturias | Venta y Compra</title>
                <meta name="description" content="Descubre la mejor selección de coches de ocasión en Asturias con MAMBA Automoción. Compra y vende vehículos de segunda mano con total confianza, tasación justa y servicio profesional en Llanera." />
            </Helmet>

            {/* Hero Section */}
            <section
                className="relative h-[60vh] md:h-[80vh] bg-gradient-to-b from-[#f7f8fa] to-[#e9ecef] bg-cover bg-center text-white flex items-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight mb-4 animate-fade-in-down">Tu Próximo Coche de Ocasión Te Espera en Asturias</h1>
                    <p className="text-lg md:text-2xl font-sans font-normal leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Confianza, transparencia y un servicio excepcional en la <strong>compra y venta de vehículos de segunda mano</strong> en Llanera.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a href="https://www.coches.net/concesionario/mambaautomocion/?embedded=0" target="_blank" rel="noopener noreferrer" className="bg-mamba-blue text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Ver Coches Disponibles</a>
                        <Link to="/vender" className="bg-white text-mamba-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Vender Mi Coche</Link>
                    </div>
                </div>
            </section>
            
            {/* Featured Cars Section */}
            {/* <section className="py-16 md:py-24 bg-mamba-gray-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-heading text-mamba-text-dark">Vehículos de Ocasión Destacados en Nuestro Concesionario</h2>
                        <p className="mt-4 text-lg text-mamba-text-medium max-w-2xl mx-auto font-sans leading-relaxed">Explora una selección de nuestros coches de ocasión más populares y recientes. Calidad garantizada en cada modelo.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredCars.map(car => <CarCard key={car.title} car={car} />)}
                    </div>
                    <div className="text-center mt-12">
                        <a href="https://www.coches.net/concesionario/mambaautomocion/?embedded=0" target="_blank" rel="noopener noreferrer" className="bg-mamba-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block">Ver Todo el Stock en Coches.net</a>
                    </div>
                </div>
            </section> */}

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-heading text-mamba-text-dark">MAMBA Automoción: Tu Concesionario de Confianza en Asturias</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                       <FeatureCard icon={<IconUser className="w-10 h-10 text-mamba-blue" />} title="Trato Directo y Personalizado">En MAMBA Automoción, Pablo y Laura te ofrecen un servicio cercano, sin intermediarios. Tu <strong>compra de coche de ocasión</strong> será transparente y ágil.</FeatureCard>
                       <FeatureCard icon={<IconShieldCheck className="w-10 h-10 text-mamba-blue" />} title="Calidad Garantizada">Cada <strong>vehículo de segunda mano</strong> es meticulosamente revisado para asegurar el máximo rendimiento y fiabilidad.</FeatureCard>
                       <FeatureCard icon={<IconCar className="w-10 h-10 text-mamba-blue" />} title="Tasación Justa y Rápida">Valoramos tu coche de forma transparente y ofrecemos las mejores condiciones para la <strong>venta de tu vehículo en Asturias</strong>.</FeatureCard>
                       <FeatureCard icon={<IconSparkles className="w-10 h-10 text-mamba-blue" />} title="Servicios Post-Venta Completos">Desde lavado profesional hasta <strong>taller mecánico</strong>, cuidamos tu coche más allá de la compra.</FeatureCard>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 md:py-24 bg-mamba-gray-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-heading text-mamba-text-dark">Opiniones Reales de Quienes Confiaron en Nosotros</h2>
                        <p className="mt-4 text-lg text-mamba-text-medium max-w-2xl mx-auto font-sans font-semibold leading-relaxed">La satisfacción de nuestros clientes es nuestra mejor garantía en la <strong>venta de vehículos en Asturias</strong>.</p>
                    </div>
                    <TestimonialCarousel testimonials={testimonials} />
                </div>
            </section>
        </>
    );
};