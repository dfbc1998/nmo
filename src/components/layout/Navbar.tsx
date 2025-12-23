// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EXTERNAL_LINKS } from "@/config/links";
import { Container } from "./Container";
import { HamburgerMenuIcon, Cross1Icon, ChevronDownIcon } from "@radix-ui/react-icons";

const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Programas", href: "#programas" },
    { name: "Libros", href: "#libros" },
    {
        name: "Blogs",
        href: "#",
        dropdown: [
            { name: "Lúdica y Cultura", href: EXTERNAL_LINKS.ludicaCultura, external: true },
            { name: "Lúdica y Neurociencia", href: EXTERNAL_LINKS.ludicaNeurociencia, external: true },
        ]
    },
    { name: "Tienda", href: EXTERNAL_LINKS.tienda, external: true },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-md"
                : "bg-white/80 backdrop-blur-sm"
                }`}
            style={{ willChange: 'auto' }}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* LOGO */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/images/logo/nmo.png"
                            alt="NMO Capacitación Neurolúdica"
                            width={180}
                            height={60}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                {link.dropdown ? (
                                    <div
                                        onMouseEnter={() => setOpenDropdown(link.name)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                        className="relative"
                                    >
                                        <button
                                            className="font-medium flex items-center gap-1 transition-colors duration-200"
                                            style={{ color: '#00577d' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = '#8ad3f2'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#00577d'}
                                        >
                                            {link.name}
                                            <ChevronDownIcon className="w-4 h-4" />
                                        </button>

                                        {openDropdown === link.name && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg overflow-hidden shadow-lg"
                                                style={{ border: '1px solid rgba(138, 211, 242, 0.3)' }}
                                            >
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        target={item.external ? "_blank" : undefined}
                                                        rel={item.external ? "noopener noreferrer" : undefined}
                                                        className="block px-4 py-3 transition-colors duration-200 hover:bg-gray-50"
                                                        style={{ color: '#00577d' }}
                                                        onMouseEnter={(e) => e.currentTarget.style.color = '#8ad3f2'}
                                                        onMouseLeave={(e) => e.currentTarget.style.color = '#00577d'}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        className="font-medium text-base transition-colors duration-200"
                                        style={{ color: '#00577d' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#8ad3f2'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#00577d'}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <Button
                            href="#contacto"
                            size="sm"
                        >
                            Solicitar Información
                        </Button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden p-2"
                        style={{ color: '#00577d' }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <Cross1Icon className="w-6 h-6" />
                        ) : (
                            <HamburgerMenuIcon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </Container>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <div
                        className="md:hidden bg-white"
                        style={{ borderTop: '1px solid rgba(138, 211, 242, 0.3)' }}
                    >
                        <Container>
                            <div className="py-4 space-y-3">
                                {navLinks.map((link) => (
                                    <div key={`mobile-${link.name}`}>
                                        {link.dropdown ? (
                                            <>
                                                <div
                                                    className="py-2 font-medium"
                                                    style={{ color: '#00577d' }}
                                                >
                                                    {link.name}
                                                </div>
                                                <div className="pl-4 space-y-2">
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={`mobile-dropdown-${item.name}`}
                                                            href={item.href}
                                                            target={item.external ? "_blank" : undefined}
                                                            rel={item.external ? "noopener noreferrer" : undefined}
                                                            className="block py-2 text-sm transition-colors duration-200"
                                                            style={{ color: '#00577d' }}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                target={link.external ? "_blank" : undefined}
                                                rel={link.external ? "noopener noreferrer" : undefined}
                                                className="block py-2 font-medium transition-colors duration-200"
                                                style={{ color: '#00577d' }}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                <Button
                                    href="#contacto"
                                    className="w-full"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Solicitar Información
                                </Button>
                            </div>
                        </Container>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
}