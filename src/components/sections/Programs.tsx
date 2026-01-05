// src/components/sections/Programs.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { EXTERNAL_LINKS } from "@/config/links";

const programs = [
    {
        title: "Área Educativa",
        description: "Expertos en Capacitación Neurolúdica para docentes y estudiantes de Ciencias de la Educación. Desarrollo de competencias pedagógicas innovadoras.",
        icon: "🎓",
        duration: "1 mes",
        features: [
            "Estrategias didácticas innovadoras: Neurolúdica",
            "Neurocontabilidad: un cambio de paradigma",
            "Técnicas creativas para aplicar en el aula",
        ],
    },
    {
        title: "Área Empresarial",
        description: "Programa de desarrollo ejecutivo que integra neurociencias y gestión del talento humano para líderes y equipos de alto rendimiento.",
        icon: "💼",
        duration: "1 mes",
        features: [
            "Autoliderazgo y Resolución creativa de conflictos",
            "Habilidades de negociación empática",
            "Toma de decisiones: las funciones ejecutivas",
            "Smart Thinking: neurociencias de las emociones",
            "Gestión del Cambio organizacional",
        ],
    },
    {
        title: "Área Pública",
        description: "Formación de funcionarios públicos expertos en gestión, liderazgo y transformación organizacional basada en neurociencias.",
        icon: "🏛️",
        duration: "1 mes",
        features: [
            "Gamificación para la Gestión Pública",
            "Liderazgo transformacional",
            "Empleabilidad pública",
        ],
    },
    {
        title: "Público en General",
        description: "Talleres y seminarios abiertos de desarrollo personal y profesional utilizando la metodología N.M.O para potenciar capacidades.",
        icon: "🌟",
        duration: "Flexible",
        features: [
            "Del trabajo a la empleabilidad",
            "Autogestión y desarrollo personal",
            "Aprender a emprender",
        ],
    },
];

export function Programs() {
    return (
        <Section id="programas" className="bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl font-bold mb-4"
                        style={{ color: '#00577d' }}
                    >
                        Nuestros Programas
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Formación especializada en Capacitación Neurolúdica para diferentes ámbitos
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2"
                            style={{ borderColor: 'rgba(138, 211, 242, 0.2)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#8ad3f2';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(138, 211, 242, 0.2)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div className="text-5xl mb-4">{program.icon}</div>
                            <h3
                                className="text-2xl font-bold mb-3"
                                style={{ color: '#00577d' }}
                            >
                                {program.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {program.description}
                            </p>
                            <div
                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                                style={{
                                    backgroundColor: 'rgba(138, 211, 242, 0.2)',
                                    color: '#00577d'
                                }}
                            >
                                Duración: {program.duration}
                            </div>
                            <ul className="space-y-3 mb-6">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span
                                            className="mt-1 flex-shrink-0"
                                            style={{ color: '#00577d' }}
                                        >
                                            ✓
                                        </span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={EXTERNAL_LINKS.talleres}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all"
                                style={{ backgroundColor: '#00577d' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#8ad3f2';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#00577d';
                                }}
                            >
                                Más Información
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}