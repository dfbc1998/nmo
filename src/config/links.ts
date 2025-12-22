// src/config/links.ts

/**
 * URLs al sitio WordPress actual
 * Se usarán temporalmente hasta migración completa
 */
const WORDPRESS_BASE = "https://nmoneurocapacitacionludica.com";

export const EXTERNAL_LINKS = {
    // Talleres
    talleres: `${WORDPRESS_BASE}/talleres/`,
    autoliderazgo: `${WORDPRESS_BASE}/taller-autoliderazgo/`,
    conflictos: `${WORDPRESS_BASE}/taller-resolucion-conflictos/`,
    contable: `${WORDPRESS_BASE}/taller-practicas-contables/`,
    inteligencias: `${WORDPRESS_BASE}/taller-activador-inteligencias/`,
    maestria: `${WORDPRESS_BASE}/taller-maestria-personal/`,

    // Servicios
    diagnostico: `${WORDPRESS_BASE}/diagnostico-gratuito/`,
    consultoria: `${WORDPRESS_BASE}/consultoria/`,

    // Blog
    blog: `${WORDPRESS_BASE}/blog/`,
    ludicaCultura: `${WORDPRESS_BASE}/category/ludica-cultura/`,
    ludicaNeurociencia: `${WORDPRESS_BASE}/category/ludica-neurociencia/`,

    // Tienda
    tienda: `${WORDPRESS_BASE}/tienda/`,

    // Contacto
    contacto: `${WORDPRESS_BASE}/contacto/`,
} as const;

export const SOCIAL_LINKS = {
    facebook: "https://facebook.com/nmo", // Actualizar con real
    instagram: "https://instagram.com/nmo",
    linkedin: "https://linkedin.com/company/nmo",
    whatsapp: "https://wa.me/549XXXXXXXXX", // Número de Daniel
} as const;

export const CONTACT_INFO = {
    email: "contacto@nmolatam.com",
    phone: "+54 9 XXX XXX XXXX", // Actualizar
    address: "Buenos Aires, Argentina",
} as const;