// src/components/sections/Methodology.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const pillars = [
    {
        icon: "🎯",
        title: "Mejorar Competencias",
        description: "Potenciarlas desde las neurociencias conductuales, articulando habilidades, destrezas, conocimientos y valores en la práctica.",
    },
    {
        icon: "🧠",
        title: "Autogestión",
        description: "Explorar y desarrollar nuevas formas de gestionar el conocimiento.",
    },
    {
        icon: "💡",
        title: "Potenciar Dimensiones",
        description: "Cognitivas y afecto-motivacionales como base del desarrollo personal.",
    },
    {
        icon: "⚡",
        title: "Toma de Decisiones",
        description: "Optimizar los procesos para empoderar los talentos personales.",
    },
    {
        icon: "🌟",
        title: "Calidad de Vida",
        description: "Promoverla integrando creatividad, innovación, desarrollo y ética",
    },
    {
        icon: "🚀",
        title: "Inteligencia Ejecutiva",
        description: "Potenciar funciones ejecutivas para conducta dirigida a objetivos",
    },
];

const benefits = [
    "Impulsa el éxito entre profesionales",
    "Ayuda a resistir distracciones",
    "Refuerza la agilidad mental",
    "Genera ideas y soluciones originales",
    "Mejora el autocontrol y modulación de emociones",
    "Potencia la dinámica del cerebro",
];

export function Methodology() {
    return (
        <Section id="metodologia" className="bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        ¿Qué es <span style={{ color: '#8ad3f2' }}>N.M.O</span>?
                    </h2>
                    <p
                        className="text-xl font-semibold max-w-4xl mx-auto mb-4"
                        style={{ color: '#00577d' }}
                    >
                        Necesidad - Motivación - Oportunidad
                    </p>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Un enfoque holístico que integra las neurociencias conductuales con la lúdica.
                        Utilizamos la actividad creativa, espontánea y original para potenciar
                        y desarrollar el talento humano mediante la inteligencia ejecutiva.
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3
                        className="text-2xl font-bold text-center mb-12"
                        style={{ color: '#00577d' }}
                    >
                        Objetivos del Programa
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-xl p-6 border-2 hover:shadow-lg transition-all"
                                style={{ borderColor: 'rgba(138, 211, 242, 0.2)' }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8ad3f2'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(138, 211, 242, 0.2)'}
                            >
                                <div className="text-4xl mb-4">{pillar.icon}</div>
                                <h4
                                    className="text-lg font-semibold mb-2"
                                    style={{ color: '#00577d' }}
                                >
                                    {pillar.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why NMO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl p-12"
                    style={{
                        background: 'linear-gradient(135deg, rgba(138, 211, 242, 0.1) 0%, rgba(0, 87, 125, 0.05) 100%)'
                    }}
                >
                    <h3
                        className="text-3xl font-bold text-center mb-12"
                        style={{ color: '#00577d' }}
                    >
                        ¿Por qué el N.M.O?
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <div
                                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                                    style={{ backgroundColor: '#00577d' }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Funciones Ejecutivas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div
                        className="bg-white rounded-2xl p-8 border-2 shadow-sm"
                        style={{ borderColor: 'rgba(138, 211, 242, 0.2)' }}
                    >
                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: '#00577d' }}
                        >
                            Funciones Ejecutivas e Inteligencia Ejecutiva
                        </h3>
                        <p className="text-gray-600 max-w-4xl mx-auto">
                            Las funciones ejecutivas son procesos cognitivos integradores que determinan
                            la conducta dirigida a un objetivo. Nuestro programa ha demostrado éxito
                            formando profesionales para resistir distracciones, reforzar la agilidad
                            mental y generar soluciones originales.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}