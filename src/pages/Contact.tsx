import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHero, IconMapPin, IconPhone, IconMail, FormInput, FormTextarea } from '@/components/UI';
import { useForm, ValidationError } from '@formspree/react';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex">
        <div className="flex-shrink-0 mr-4 mt-1">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold font-sans">{title}</h3>
            <p className="text-mamba-text-medium">{children}</p>
        </div>
    </div>
);

export const ContactPage = () => {
    const [state, handleSubmit] = useForm("xqalerkk");

    return (
        <>
            <Helmet>
                <title>Contacto MAMBA Automoción | Concesionario de Coches en Llanera, Asturias</title>
                <meta name="description" content="Contacta con MAMBA Automoción en Llanera, Asturias. Visítanos o envíanos un mensaje para consultas sobre compra, venta o mantenimiento de tu coche." />
            </Helmet>

            <PageHero
                title="Contáctanos: Estamos Aquí Para Ayudarte"
                subtitle="Resuelve tus dudas sobre la <strong>compra de coches de ocasión en Asturias</strong> o nuestros servicios. ¡Te esperamos!"
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Info & Map */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold font-sans mb-6">Nuestra Ubicación e Información de Contacto</h2>
                                <div className="space-y-6">
                                    <ContactInfoItem icon={<IconMapPin className="w-6 h-6 text-mamba-blue"/>} title="Dirección">Pol. Ind Asipo, Calle A, Parc. 84 Nave 3, 33428 Llanera (Asturias), España.</ContactInfoItem>
                                    <ContactInfoItem icon={<IconPhone className="w-6 h-6 text-mamba-blue"/>} title="Teléfono">682 407 482</ContactInfoItem>
                                    <ContactInfoItem icon={<IconMail className="w-6 h-6 text-mamba-blue"/>} title="Email">administracion@mambaautomocion.com</ContactInfoItem>
                                </div>
                            </div>
                            <div className="h-96 rounded-lg overflow-hidden shadow-md relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.563098314115!2d-5.87972868451156!3d43.4005859791307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368c0053913075%3A0xe5a713b19280145c!2sMAMBA%20AUTOMOCI%C3%93N!5e0!3m2!1ses!2ses!4v1678886400000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de Mamba Automoción"
                                ></iframe>
                                <div className="absolute left-4 bottom-4 bg-white/90 rounded-lg shadow px-4 py-2 flex items-center gap-2">
                                    <IconMapPin className="w-6 h-6 text-mamba-blue flex-shrink-0" />
                                    <span className="text-mamba-text-dark font-sans text-sm">Pol. Ind Asipo, Calle A, Parc. 84 Nave 3, 33428 Llanera (Asturias), España.</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-mamba-gray-light p-8 rounded-lg shadow-md">
                            <h2 className="text-3xl font-bold font-sans mb-2">Envíanos un Mensaje Directamente</h2>
                            <p className="text-mamba-text-medium mb-6">Utiliza este formulario para cualquier consulta general sobre nuestros <strong>coches de segunda mano</strong> o servicios. Te responderemos lo antes posible.</p>
                            {state.succeeded ? (
                                <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">¡Mensaje enviado con éxito! Gracias por contactarnos.</div>
                            ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <FormInput label="Nombre" id="nombre-contacto" name="nombre" type="text" placeholder="Tu nombre" required />
                                <FormInput label="Email" id="email-contacto" name="email" type="email" placeholder="tu.email@ejemplo.com" required />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                                <FormInput label="Teléfono (opcional)" id="telefono-contacto" name="telefono" type="tel" placeholder="Tu teléfono" />
                                <FormTextarea label="Mensaje" id="mensaje-contacto" name="mensaje" placeholder="Escribe aquí tu consulta..." required />
                                <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
                                <div className="flex items-center">
                                    <input id="privacidad-contacto" name="privacidad" type="checkbox" required className="h-4 w-4 text-mamba-blue focus:ring-mamba-blue border-gray-300 rounded" />
                                    <label htmlFor="privacidad-contacto" className="ml-2 block text-sm text-mamba-text-medium">He leído y acepto la <a href="#" className="underline font-medium hover:text-mamba-blue">Política de Privacidad</a>.</label>
                                </div>
                                <button type="submit" disabled={state.submitting} className="w-full bg-mamba-blue text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400">
                                    {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            
                                <p className="text-xs text-gray-500 text-center">Para que el formulario funcione, reemplaza el ID de Formspree en el código por el tuyo propio.</p>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
