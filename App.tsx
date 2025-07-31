import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ServicesPage } from '@/pages/Services';
import { VehiclesPage } from '@/pages/Vehicles';
import { SellCarPage } from '@/pages/SellCar';
import { ContactPage } from '@/pages/Contact';

function App() {
    return (
        <HelmetProvider>
            <HashRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/quienes-somos" element={<AboutPage />} />
                        <Route path="/servicios" element={<ServicesPage />} />
                        <Route path="/vehiculos" element={<VehiclesPage />} />
                        <Route path="/vender" element={<SellCarPage />} />
                        <Route path="/contacto" element={<ContactPage />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </HelmetProvider>
    );
}

export default App;