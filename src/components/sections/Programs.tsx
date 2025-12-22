// src/components/sections/Programs.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { EXTERNAL_LINKS } from "@/config/links";

const programs = [
    {
        id: "1",
        title: "Autoliderazgo",
        description: "Desarrolla tu capacidad de liderazgo personal y profesional mediante herramientas neurolúdicas.",
        price: "USD $100",
        icon: "🎯",
        url: EXTERNAL_LINKS.autoliderazgo,
    },
    {
        id: "2",
        title: "Resolución Creativa de Conflictos",
        description: "Aprende a gestionar conflictos de manera innovadora utilizando el pensamiento lateral.",
        price: "USD $100",
        icon: "🤝",
        url: EXTERNAL_LINKS.conflictos,
    },
    {
        id: "3",
        title: "Simulando Prácticas Contables",
        description: "Práctica contable mediante simulación neurolúdica y aprendizaje experiencial.",
        price: "USD $100",
        icon: "📊",
        url: EXTERNAL_LINKS.contable,
    },
    {
        id: "4",
        title: "Activador de Inteligencias",
        description: "Potencia tus inteligencias múltiples de forma práctica y vivencial.",
        price: "USD $30",
        icon: "🧠",
        url: EXTERNAL_LINKS.inteligencias,
    },
    {
        id: "5",
        title: "Maestría Personal",
        description: "Alcanza tu máximo potencial de desarrollo personal mediante autoconocimiento.",
        price: "USD $30",
        icon: "⭐",
        url: EXTERNAL_LINKS.maestria,
    },
];

export function Programs() {
    return (
        <>
            <style jsx global>{`
        #programas {
          background-color: rgba(138, 211, 242, 0.05);
        }
        .text-celeste-dark {
          color: #00577d;
        }
        .border-celeste {
          border-color: rgba(138, 211, 242, 0.3);
        }
        .program-card {
          transition: all 0.3s ease;
        }
        .program-card:hover {
          border-color: #8ad3f2;
        }
      `}</style>

            <Section id="programas">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-celeste-dark">
                        Nuestros Programas de Transformación
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Talleres diseñados para tu crecimiento profesional y personal
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border-2 border-celeste rounded-xl p-6 hover:shadow-xl program-card flex flex-col"
                        >
                            <div className="text-4xl mb-4">{program.icon}</div>
                            <h3 className="text-2xl font-semibold text-celeste-dark mb-3">
                                {program.title}
                            </h3>
                            <p className="text-gray-700 mb-6 flex-grow">{program.description}</p>
                            <div className="text-3xl font-bold text-celeste-dark mb-6">
                                {program.price}
                            </div>
                            <Button href={program.url} external className="w-full">
                                Ver Más Información
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button href={EXTERNAL_LINKS.diagnostico} external variant="secondary" size="lg">
                        Solicitar Diagnóstico Gratuito
                    </Button>
                </div>
            </Section>
        </>
    );
}