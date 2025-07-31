import { Helmet } from 'react-helmet-async';
import { PageHero, FormInput, FormTextarea } from '@/components/UI';
import { useForm, ValidationError } from '@formspree/react';

export const SellCarPage = () => {
    const [state, handleSubmit] = useForm("xqalerkk");

    return (
        <>
            <Helmet>
                <title>Vender Coche en Asturias | Tasación Gratuita y Rápida con MAMBA Automoción</title>
                <meta name="description" content="Vende tu coche de segunda mano en Asturias de forma fácil y segura. Obtén una tasación justa y sin compromiso con MAMBA Automoción. ¡Contáctanos hoy!" />
            </Helmet>

            <PageHero 
                title="Vende Tu Coche Rápido y al Mejor Precio en Asturias"
                subtitle="Recibe una tasación justa y sin compromiso para tu <strong>vehículo de ocasión</strong>. Rellena nuestro formulario y nos pondremos en contacto contigo en breve."
            />

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="bg-mamba-gray-light p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl md:text-3xl font-bold font-sans text-mamba-text-dark mb-2">Solicita tu Tasación Gratuita Ahora</h2>
                        <p className="text-mamba-text-medium mb-8">Cuanta más información nos facilites, más precisa será nuestra valoración de tu <strong>coche usado</strong>.</p>
                        {state.succeeded ? (
                            <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.</div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput label="Nombre Completo" id="nombre-completo" name="nombreCompleto" type="text" placeholder="Tu nombre y apellidos" required />
                                <FormInput label="Teléfono" id="telefono-venta" name="telefono" type="tel" placeholder="Tu número de teléfono" required />
                            </div>
                            <FormInput label="Email" id="email-venta" name="email" type="email" placeholder="tu.email@ejemplo.com" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <FormInput label="Marca" id="marca-coche" name="marca" type="text" placeholder="Ej: BMW" />
                               <FormInput label="Modelo" id="modelo-coche" name="modelo" type="text" placeholder="Ej: Serie 3" />
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <FormInput label="Año de Matriculación" id="ano-matriculacion" name="ano" type="number" placeholder="Ej: 2018" />
                                <FormInput label="Kilometraje" id="kilometraje-coche" name="kilometraje" type="number" placeholder="Ej: 95000" />
                                <FormInput label="Matrícula" id="matricula-coche" name="matricula" type="text" placeholder="Ej: 1234 ABC" />
                            </div>
                    
                            <FormTextarea label="Mensaje" id="mensaje-venta" name="mensaje" placeholder="Añade cualquier información relevante sobre tu coche: estado general, extras, historial, etc." />
                            <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
                            <div className="flex items-center">
                                <input id="privacidad-venta" name="privacidad" type="checkbox" required className="h-4 w-4 text-mamba-blue focus:ring-mamba-blue border-gray-300 rounded" />
                                <label htmlFor="privacidad-venta" className="ml-2 block text-sm text-mamba-text-medium">He leído y acepto la <a href="#" className="underline font-medium hover:text-mamba-blue">Política de Privacidad</a>.</label>
                            </div>
                            <div>
                                <button type="submit" disabled={state.submitting} className="w-full bg-mamba-blue text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400">
                                    {state.submitting ? 'Enviando...' : 'Enviar Solicitud de Tasación'}
                                </button>
                            </div>
                   
                            <p className="text-xs text-gray-500 text-center">Para que el formulario funcione, reemplaza el ID de Formspree en el código por el tuyo propio.</p>
                        </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
