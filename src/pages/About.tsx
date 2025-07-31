import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHero, IconUser, IconShieldCheck } from '@/components/UI';
import heroImg from '@/assets/hero.png';

const InfoBlock: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-2xl font-bold font-heading ml-4">{title}</h3>
        </div>
        <p className="text-mamba-text-medium font-sans leading-relaxed">{children}</p>
    </div>
);


export const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>Quiénes Somos | MAMBA Automoción - Tu Concesionario de Ocasión en Asturias</title>
                <meta name="description" content="Conoce al equipo de MAMBA Automoción, líderes en la venta de coches de segunda mano en Asturias. Descubre nuestra misión de transparencia y profesionalidad." />
            </Helmet>

            <PageHero 
                title="¿Quiénes Somos en MAMBA Automoción?" 
                subtitle="Conoce a las personas detrás de tu experiencia de <strong>compra de coche en Asturias</strong>." 
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src={heroImg} alt="Equipo de Mamba Automoción" className="rounded-lg shadow-xl" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading text-mamba-text-dark">Nuestra Misión: Transparencia y Excelencia en Cada Vehículo</h2>
                            <p className="text-lg text-mamba-text-medium font-sans leading-relaxed">
                                En MAMBA Automoción, nuestra pasión es conectar a las personas con el <strong>coche de ocasión</strong> perfecto. Nos dedicamos a ofrecer <strong>vehículos de segunda mano en Asturias</strong> con la máxima transparencia, garantizando calidad, rapidez y un trato cercano. Valoramos tu confianza como nuestro mayor activo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-mamba-gray-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InfoBlock icon={<IconUser className="w-12 h-12 text-mamba-blue" />} title="Tu Equipo Personal en la Compra de Coches">
                           El propietario, Pablo, supervisa cada <strong>vehículo de ocasión</strong> para garantizar la máxima calidad. Laura gestiona la administración con total transparencia. Esta cercanía nos permite ofrecerte la mejor experiencia, sin intermediarios. <strong>Expertos en coches de segunda mano en Asturias</strong>.
                        </InfoBlock>
                         <InfoBlock icon={<IconShieldCheck className="w-12 h-12 text-mamba-blue" />} title="Valoración Justa para tu Coche Usado">
                           En MAMBA Automoción, tratas directamente con nosotros. Esto nos permite ofrecerte <strong>valoraciones justas</strong> y un proceso de <strong>venta ágil y sin complicaciones</strong> para tu vehículo. Tu confianza es nuestro mayor activo.
                        </InfoBlock>
                     </div>
                </div>
            </section>
        </>
    );
};
