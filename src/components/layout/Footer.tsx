// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { EXTERNAL_LINKS } from "@/config/links";

const footerLinks = {
    navegacion: [
        { name: "Inicio", href: "#hero" },
        { name: "Metodología", href: "#metodologia" },
        { name: "Programas", href: "#programas" },
        { name: "Libros", href: "#libros" },
        { name: "Contacto", href: "#contacto" },
    ],
    recursos: [
        { name: "Lúdica y Cultura", href: EXTERNAL_LINKS.ludicaCultura, external: true },
        { name: "Lúdica y Neurociencia", href: EXTERNAL_LINKS.ludicaNeurociencia, external: true },
        { name: "Tienda", href: EXTERNAL_LINKS.tienda, external: true },
        { name: "Talleres", href: EXTERNAL_LINKS.talleres, external: true },
    ],
};

export function Footer() {
    return (
        <footer style={{ backgroundColor: '#00577d', color: '#ffffff' }}>
            <Container>
                <div className="py-12 grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        {/* LOGO NMO MÁS GRANDE */}
                        <Image
                            src="/images/logo/nmo.png"
                            alt="NMO Capacitación Neurolúdica"
                            width={220}
                            height={73}
                            className="h-16 w-auto mb-4 brightness-0 invert"
                        />
                        <p
                            className="text-sm max-w-md"
                            style={{ color: 'rgba(138, 211, 242, 0.8)' }}
                        >
                            Capacitación Neurolúdica. Transformando profesionales desde 1995.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Navegación</h3>
                        <ul className="space-y-2">
                            {footerLinks.navegacion.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-200"
                                        style={{ color: 'rgba(138, 211, 242, 0.8)' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(138, 211, 242, 0.8)'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Recursos</h3>
                        <ul className="space-y-2">
                            {footerLinks.recursos.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        className="text-sm transition-colors duration-200"
                                        style={{ color: 'rgba(138, 211, 242, 0.8)' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(138, 211, 242, 0.8)'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t py-6 flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderColor: 'rgba(138, 211, 242, 0.2)' }}
                >
                    <p
                        className="text-sm"
                        style={{ color: 'rgba(138, 211, 242, 0.8)' }}
                    >
                        © 2025 NMO Capacitación Neurolúdica. Todos los derechos reservados.
                    </p>

                    {/* LOGO ASCEND */}
                    <Link
                        href="https://ascendweb.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
                    >
                        <span
                            className="text-sm"
                            style={{ color: 'rgba(138, 211, 242, 0.8)' }}
                        >
                            Desarrollado por
                        </span>

                        {/* OPCIÓN 1: Si tienes logo de Ascend, descomenta esto y comenta la opción 2 */}
                        {/* <Image
              src="/images/logo/ascend-logo.png"
              alt="Ascend"
              width={100}
              height={30}
              className="h-6 w-auto brightness-0 invert"
            /> */}

                        {/* OPCIÓN 2: Mientras tanto, texto estilizado */}
                        <span
                            className="text-lg font-bold"
                            style={{
                                background: 'linear-gradient(135deg, #8ad3f2 0%, #ffffff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            ASCEND
                        </span>
                    </Link>
                </div>
            </Container>
        </footer>
    );
}