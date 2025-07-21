import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHero, CarCard } from '../components/UI';
import heroImg from '../assets/hero.png';
import bmwImg from '../assets/coches/bmw.PNG';
import jeepImg from '../assets/coches/jeep.PNG';
import mitsubishiImg from '../assets/coches/mitsubishi.PNG';

const sampleCars = [
    {
        imageUrl: jeepImg,
        altText: 'JEEP Wrangler Unlimited 2.8 CRD Rubicon 10th Anniversary Auto en venta en MAMBA Automoción',
        title: 'JEEP Wrangler Unlimited 2.8 CRD Rubicon 10th Anniversary Auto',
        price: '41.990 €',
        year: 2013,
        kms: '170.000',
        fuel: 'Diésel',
        link: 'https://www.coches.net/concesionario/mambaautomocion/?embedded=0',
    },
    {
        imageUrl: bmwImg,
        altText: 'BMW Serie 3 320d xDrive en venta en MAMBA Automoción',
        title: 'BMW Serie 3 320d xDrive',
        price: '17.990 €',
        year: 2014,
        kms: '89.000',
        fuel: 'Diésel',
        link: 'https://www.coches.net/concesionario/mambaautomocion/?embedded=0',
    },
    {
        imageUrl: mitsubishiImg,
        altText: 'MITSUBISHI ASX 180 DID ClearTec Motion en venta en MAMBA Automoción',
        title: 'MITSUBISHI ASX 180 DID ClearTec Motion',
        price: '9.490 €',
        year: 2010,
        kms: '143.000',
        fuel: 'Diésel',
        link: 'https://www.coches.net/concesionario/mambaautomocion/?embedded=0',
    },
];

export const VehiclesPage = () => {
    return (
        <>
            <Helmet>
                <title>Coches de Ocasión en Asturias | Todo el Stock de MAMBA Automoción</title>
                <meta name="description" content="Explora la mayor variedad de coches de segunda mano en Asturias. Descubre nuestro stock completo en coches.net y encuentra el vehículo perfecto para ti." />
            </Helmet>

            <PageHero 
                title="Nuestro Completo Stock de Coches de Ocasión" 
                subtitle="Descubre la mayor selección de <strong>vehículos de segunda mano en Asturias</strong> directamente en nuestro perfil de coches.net."
            />

            <section 
                className="py-16 md:py-24 bg-white text-center relative"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-mamba-text-medium max-w-3xl mx-auto mb-8 text-white">
                        En MAMBA Automoción, queremos ofrecerte la experiencia más completa. Por ello, te invitamos a explorar nuestro inventario actualizado de <strong>coches disponibles en Asturias</strong> en el portal líder del sector.
                    </p>
                    <a 
                        href="https://www.coches.net/concesionario/mambaautomocion/?embedded=0" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-mamba-blue text-white font-bold text-xl py-4 px-10 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Ver Todo el Stock Ahora en Coches.net
                    </a>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-mamba-gray-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-10">Un Avance de lo que Encontrarás</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sampleCars.map(car => <CarCard key={car.title} car={car} />)}
                    </div>
                </div>
            </section>
        </>
    );
};
