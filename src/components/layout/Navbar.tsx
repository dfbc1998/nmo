// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EXTERNAL_LINKS } from "@/config/links";
import { Container } from "./Container";
import { HamburgerMenuIcon, Cross1Icon, ChevronDownIcon } from "@radix-ui/react-icons";

const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Programas", href: "#programas" },
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
        <>
            <style jsx global>{`
        .nav-link {
          color: #00577d;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #8ad3f2;
        }
        .border-celeste {
          border-color: rgba(138, 211, 242, 0.3);
        }
        .dropdown-menu {
          background-color: white;
          border: 1px solid rgba(138, 211, 242, 0.3);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>

            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md"
                        : "bg-white/80 backdrop-blur-sm"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Container>
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex-shrink-0">
                            <div className="font-bold text-2xl" style={{ color: '#00577d' }}>
                                NMO
                            </div>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative">
                                    {link.dropdown ? (
                                        <div
                                            onMouseEnter={() => setOpenDropdown(link.name)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                            className="relative"
                                        >
                                            <button className="nav-link font-medium flex items-center gap-1">
                                                {link.name}
                                                <ChevronDownIcon className="w-4 h-4" />
                                            </button>

                                            <AnimatePresence>
                                                {openDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute top-full left-0 mt-2 w-56 dropdown-menu rounded-lg overflow-hidden"
                                                    >
                                                        {link.dropdown.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                target={item.external ? "_blank" : undefined}
                                                                className="block px-4 py-3 nav-link hover:bg-gray-50 transition-colors"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            target={link.external ? "_blank" : undefined}
                                            rel={link.external ? "noopener noreferrer" : undefined}
                                            className="nav-link font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <Button
                                href={EXTERNAL_LINKS.diagnostico}
                                external
                                size="sm"
                            >
                                Diagnóstico Gratuito
                            </Button>
                        </div>

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

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-celeste bg-white"
                        >
                            <Container>
                                <div className="py-4 space-y-3">
                                    {navLinks.map((link) => (
                                        <div key={link.name}>
                                            {link.dropdown ? (
                                                <>
                                                    <div className="py-2 nav-link font-medium">{link.name}</div>
                                                    <div className="pl-4 space-y-2">
                                                        {link.dropdown.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                target={item.external ? "_blank" : undefined}
                                                                className="block py-2 nav-link text-sm"
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
                                                    className="block py-2 nav-link font-medium"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </div>
                                    ))}

                                    <Button
                                        href={EXTERNAL_LINKS.diagnostico}
                                        external
                                        className="w-full"
                                    >
                                        Diagnóstico Gratuito
                                    </Button>
                                </div>
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}