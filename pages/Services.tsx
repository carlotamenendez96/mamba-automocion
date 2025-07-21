import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHero, ServiceCard, IconCar, IconSparkles, IconWrench } from '../components/UI';
import heroImg from '../assets/hero.png';
import lavadoImg from '../assets/lavado.jpg';
import tallerImg from '../assets/taller.jpg';

const services = [
    {
        icon: <IconCar className="w-8 h-8 text-mamba-blue" />, // Ajusta el tamaño y color si lo deseas
        image: heroImg,
        title: "Compra Venta de Vehículos",
        items: [
            "Venta de vehículos de ocasión",
            "Compra de vehículos con tasación directa"
        ]
    },
    {
        icon: <IconSparkles className="w-8 h-8 text-mamba-blue" />, // Ajusta el tamaño y color si lo deseas
        image: lavadoImg,
        title: "Zona de Lavado",
        items: [
            "Limpiezas integrales",
            "Pulido de carrocería",
            "Restauración de cuero, volantes y asientos"
        ]
    },
    {
        icon: <IconWrench className="w-8 h-8 text-mamba-blue" />, // Ajusta el tamaño y color si lo deseas
        image: tallerImg,
        title: "Taller Mecánico",
        items: [
            "Mecánica rápida (ruedas, frenos)",
            "Revisión pre-ITV y diagnosis",
            "Embragues y distribuciones",
            "Reparación de EGR y FAP",
            "Reparación de abolladuras sin pintar"
        ]
    }
];

export const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>Servicios de MAMBA Automoción | Mantenimiento, Lavado y Compraventa de Coches en Asturias</title>
                <meta name="description" content="Descubre los servicios integrales de MAMBA Automoción: venta de coches de ocasión, lavado profesional y taller mecánico para tu vehículo en Asturias. Cuidamos tu coche." />
            </Helmet>

            <PageHero 
                title="Nuestros Servicios"
                subtitle="Soluciones integrales para tu vehículo"
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => <ServiceCard key={service.title} {...service} />)}
                    </div>
                </div>
            </section>
        </>
    );
};
