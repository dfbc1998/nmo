// src/components/sections/ClientsCarousel.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import Image from "next/image";

const clients = [
    { name: "ANSES", logo: "/images/clients/anses.png" },
    { name: "Senado de la Nación", logo: "/images/clients/senado.png" },
    { name: "Universidad de Buenos Aires", logo: "/images/clients/uba.png" },
    { name: "Universidad Nacional de Luján", logo: "/images/clients/unlu.png" },
    { name: "CPCE Catamarca", logo: "/images/clients/cpce-catamarca.png" },
    { name: "CPCE Salta", logo: "/images/clients/cpce-salta.png" },
    { name: "Universidad de Morón", logo: "/images/clients/umoron.png" },
    { name: "South Consulting", logo: "/images/clients/south.png" },
];

export function ClientsCarousel() {
    return (
        <>
            <style jsx global>{`
        .text-celeste-dark {
          color: #00577d;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

            <Section className="bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-celeste-dark">
                            Han confiado en nosotros
                        </h3>
                        <p className="text-gray-600">
                            Instituciones y empresas que han transformado su potencial con NMO
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll">
                                {[...clients, ...clients].map((client, index) => (
                                    <div
                                        key={`${client.name}-${index}`}
                                        className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                                    >
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={180}
                                            height={80}
                                            className="max-w-full max-h-full object-contain"
                                            onError={(e) => {
                                                // Fallback si no hay logo
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = `<div class="text-center font-semibold text-gray-400">${client.name}</div>`;
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gradientes a los lados */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </Section>
        </>
    );
}