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
                    {/* FOTO DE DANIEL - INTEGRADA SIN BORDES VISIBLES */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative max-w-md mx-auto">
                            {/* FONDO CON GRADIENTE RADIAL - MUY DIFUMINADO */}
                            <div
                                className="absolute inset-0 opacity-40"
                                style={{
                                    background: 'radial-gradient(circle at 30% 30%, rgba(138, 211, 242, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0, 87, 125, 0.3) 0%, transparent 50%)',
                                }}
                            />

                            {/* CÍRCULOS DECORATIVOS MUY DIFUMINADOS - MÁS GRANDES Y LEJANOS */}
                            <div
                                className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 -z-10"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-15 -z-10"
                                style={{ backgroundColor: '#00577d' }}
                            />

                            {/* IMAGEN DE DANIEL CON DEGRADADO SUTIL EN LOS BORDES */}
                            <div className="relative z-10">
                                {/* Overlay de gradiente para suavizar bordes */}
                                <div
                                    className="absolute inset-0 pointer-events-none z-20"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgba(249, 250, 251, 0) 10%, rgba(249, 250, 251, 0) 90%, rgba(249, 250, 251, 0.3) 100%), linear-gradient(to right, rgba(249, 250, 251, 0.2) 0%, rgba(249, 250, 251, 0) 10%, rgba(249, 250, 251, 0) 90%, rgba(249, 250, 251, 0.2) 100%)',
                                    }}
                                />

                                {/* Sombra suave y difusa detrás */}
                                <div
                                    className="absolute inset-8 rounded-full opacity-10 blur-3xl -z-10"
                                    style={{ backgroundColor: '#00577d' }}
                                />

                                <Image
                                    src="/images/about/daniel2.png"
                                    alt="Daniel Deu - Fundador NMO"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto relative z-10"
                                    style={{
                                        filter: 'drop-shadow(0 20px 40px rgba(0, 87, 125, 0.1))',
                                    }}
                                    priority
                                />
                            </div>

                            {/* BADGE FLOTANTE */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl z-20 max-w-xs"
                                style={{
                                    boxShadow: '0 20px 60px rgba(0, 87, 125, 0.15)'
                                }}
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

                            {/* ELEMENTOS DECORATIVOS SUTILES */}
                            <div
                                className="absolute top-20 -left-4 w-32 h-32 rounded-full opacity-5 -z-10"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute bottom-32 -right-8 w-40 h-40 rounded-full opacity-5 -z-10"
                                style={{ backgroundColor: '#00577d' }}
                            />

                            {/* Puntos decorativos muy sutiles */}
                            <div
                                className="absolute top-16 left-12 w-2 h-2 rounded-full opacity-20"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute top-20 left-16 w-2 h-2 rounded-full opacity-20"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute bottom-28 right-16 w-3 h-3 rounded-full opacity-15"
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