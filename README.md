# MAMBA Automoción

Proyecto web para el concesionario de vehículos de ocasión **MAMBA Automoción** en Asturias.

## Descripción

Sitio web moderno y responsive para la gestión y promoción de vehículos de segunda mano, servicios, contacto y venta de coches. Incluye integración con Formspree para formularios, testimonios reales, menú móvil avanzado y diseño premium.

## Tecnologías principales
- React 18 + Vite
- TypeScript
- TailwindCSS (vía CDN, con configuración personalizada)
- React Router DOM
- Formspree (formularios de contacto y tasación)
- Google Fonts: Montserrat (títulos), Open Sans (texto)

## Estructura del proyecto

```
assets/           # Imágenes y logotipos
components/       # Componentes reutilizables (Layout, UI, etc)
hooks/            # Custom hooks
pages/            # Páginas principales (Home, About, Services, Vehicles, Contact, SellCar)
public/           # Archivos estáticos (si se usan)
```

## Instalación y uso

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre el navegador en [http://localhost:5173](http://localhost:5173)

## Configuración de formularios
- Los formularios usan [Formspree](https://formspree.io/). Cambia el ID de formulario en los archivos de las páginas de contacto y tasación por el tuyo propio.

## Personalización
- Cambia imágenes en `assets/` para personalizar vehículos, logotipos y fondos.
- Modifica los colores y fuentes en el script de configuración de Tailwind en `index.html`.

## Redes sociales
- Facebook: [MAMBA Automoción](https://www.facebook.com/p/MaMba-Automocion-100077819027982/)
- Instagram: (añadir enlace si lo tienes)

## Licencia
Proyecto privado para uso exclusivo de MAMBA Automoción.
