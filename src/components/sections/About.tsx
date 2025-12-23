// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import Image from "next/image";

const credentials = [
    "Contador Público (UBA)",
    "MBA - Maestría en Administración",
    "5 Maestrías en Reiki",
    "Diplomado en Juego",
    "Especialista en Logoterapia",
    "30+ años profesor universitario (UBA, UNLu, U. Morón)",
    "Ex-Director Senado de la Nación Argentina",
    "Autor: 'Contabilidad del Ser' (Editorial Almaluz, 2023)",
];

const timeline = [
    { year: "1995", event: "Fundación de NMO" },
    { year: "2000", event: "South Consulting Group" },
    { year: "2023", event: "Publicación 'Contabilidad del Ser'" },
    { year: "2024", event: "Expansión a Paraguay y Chile" },
];

export function About() {
    return (
        <Section id="sobre-nosotros" className="bg-gray-50 overflow-hidden">
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
                        Fundador de <span style={{ color: '#8ad3f2' }}>N.M.O</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Pionero de la Capacitación Neurolúdica en Argentina
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
                    {/* FOTO DE DANIEL - INTEGRADA CON EFECTOS */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative max-w-md mx-auto">
                            {/* CÍRCULOS DECORATIVOS DIFUMINADOS - DETRÁS */}
                            <div
                                className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl opacity-30 -z-10"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full blur-3xl opacity-25 -z-10"
                                style={{ backgroundColor: '#00577d' }}
                            />

                            {/* FORMAS GEOMÉTRICAS DECORATIVAS */}
                            <div
                                className="absolute top-20 -right-8 w-20 h-20 rounded-full opacity-10 -z-10"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute bottom-32 -left-6 w-16 h-16 rounded-lg rotate-45 opacity-10 -z-10"
                                style={{ backgroundColor: '#00577d' }}
                            />

                            {/* IMAGEN DE DANIEL CON SOMBRA SUAVE */}
                            <div className="relative z-10">
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-20 blur-2xl -z-10"
                                    style={{ backgroundColor: '#00577d' }}
                                />
                                <Image
                                    src="/images/about/daniel2.png"
                                    alt="Daniel Deu - Fundador NMO"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto relative z-10"
                                    style={{
                                        filter: 'drop-shadow(0 25px 50px rgba(0, 87, 125, 0.15))'
                                    }}
                                    priority
                                />

                                {/* LÍNEAS DECORATIVAS */}
                                <div
                                    className="absolute top-0 left-0 w-24 h-1 -translate-x-8 -translate-y-4"
                                    style={{ backgroundColor: '#8ad3f2' }}
                                />
                                <div
                                    className="absolute bottom-0 right-0 w-32 h-1 translate-x-8 translate-y-4"
                                    style={{ backgroundColor: '#00577d' }}
                                />
                            </div>

                            {/* BADGE FLOTANTE */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl z-20 max-w-xs"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                                        style={{ backgroundColor: 'rgba(138, 211, 242, 0.2)' }}
                                    >
                                        📚
                                    </div>
                                    <div>
                                        <div
                                            className="font-semibold text-sm"
                                            style={{ color: '#00577d' }}
                                        >
                                            Autor & Educador
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            30+ años de experiencia
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* PUNTOS DECORATIVOS */}
                            <div
                                className="absolute top-12 left-8 w-2 h-2 rounded-full opacity-40"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute top-16 left-12 w-2 h-2 rounded-full opacity-40"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute bottom-24 right-12 w-3 h-3 rounded-full opacity-30"
                                style={{ backgroundColor: '#00577d' }}
                            />
                        </div>
                    </motion.div>

                    {/* INFORMACIÓN */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                Daniel Rubén Héctor Deu
                            </h3>
                            <p
                                className="text-xl font-semibold"
                                style={{ color: '#00577d' }}
                            >
                                Fundador y Director de NMO
                            </p>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Con más de 30 años de experiencia en docencia universitaria y capacitación
                            empresarial, Daniel Deu ha desarrollado una metodología única que combina
                            neurociencias, contabilidad y aprendizaje vivencial.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Fundador de NMO en 1995, ha transformado la vida profesional de cientos
                            de contadores, empresarios y educadores en Argentina, Paraguay y Chile.
                        </p>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Credenciales y Experiencia:
                            </h4>
                            <ul className="space-y-2">
                                {credentials.map((credential, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span style={{ color: '#00577d' }} className="mt-1">•</span>
                                        <span>{credential}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* TRAYECTORIA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
                        Nuestra Trayectoria
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div
                                    className="inline-block text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4"
                                    style={{ backgroundColor: '#00577d' }}
                                >
                                    {item.year}
                                </div>
                                <p className="text-gray-700 font-medium">{item.event}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}