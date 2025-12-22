// src/config/links.ts

const WORDPRESS_BASE = "https://nmoneurocapacitacionludica.com";

export const EXTERNAL_LINKS = {
    // Talleres
    talleres: `${WORDPRESS_BASE}/talleres/`,
    autoliderazgo: `${WORDPRESS_BASE}/taller-autoliderazgo/`,
    conflictos: `${WORDPRESS_BASE}/taller-resolucion-conflictos/`,
    contable: `${WORDPRESS_BASE}/taller-practicas-contables/`,
    inteligencias: `${WORDPRESS_BASE}/taller-activador-inteligencias/`,
    maestria: `${WORDPRESS_BASE}/taller-maestria-personal/`,

    // Blogs - LINKS REALES
    ludicaCultura: `${WORDPRESS_BASE}/blog-nmo/`,
    ludicaNeurociencia: `${WORDPRESS_BASE}/juego-y-neurociencia/`,

    // Tienda
    tienda: `${WORDPRESS_BASE}/tienda/`,

    // Servicios
    diagnostico: `${WORDPRESS_BASE}/diagnostico-gratuito/`,
    consultoria: `${WORDPRESS_BASE}/consultoria/`,

    // Contacto
    contacto: `${WORDPRESS_BASE}/contacto/`,
} as const;

export const CONTACT_INFO = {
    email: "info@nmolatam.com",
    whatsapp: "https://wa.me/549XXXXXXXXX", // Actualizar con número real
} as const;