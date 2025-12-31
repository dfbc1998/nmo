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
    "30+ años profesor universitario (UBA, UNLu, U. Morón, U. Belgrano, UNLaM)",
    "Director del Proyecto de Invetigación en Neurocontabilidad UNLu",
    "Ex-Director de Capacitación y Formación Profesional Senado de la Nación Argentina",
    "Autor: 'Contabilidad del Ser', 'El Contador Futurizo' y 'Neuroludica NMO (En Prensa)'",

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

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* FOTO DE DANIEL - MÁS GRANDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* CONTENEDOR MÁS GRANDE */}
                        <div className="relative max-w-xl mx-auto px-8 py-8">

                            {/* AURA/GRADIENTE RADIAL - SIN LÍMITES, EXTENDIDO */}
                            <div
                                className="absolute -inset-20 opacity-40 -z-10"
                                style={{
                                    background: 'radial-gradient(circle at 40% 40%, rgba(138, 211, 242, 0.5) 0%, rgba(138, 211, 242, 0.2) 30%, transparent 60%), radial-gradient(circle at 60% 60%, rgba(0, 87, 125, 0.4) 0%, rgba(0, 87, 125, 0.2) 30%, transparent 60%)',
                                }}
                            />

                            {/* CÍRCULOS DECORATIVOS GRANDES */}
                            <div
                                className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 -z-20"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 -z-20"
                                style={{ backgroundColor: '#00577d' }}
                            />

                            {/* CONTENEDOR DE LA IMAGEN - MÁS GRANDE */}
                            <div className="relative z-10">
                                {/* Sombra suave y difusa detrás */}
                                <div
                                    className="absolute inset-8 rounded-full opacity-8 blur-3xl -z-10"
                                    style={{ backgroundColor: '#00577d' }}
                                />

                                {/* IMAGEN DE DANIEL - TAMAÑO AUMENTADO */}
                                <Image
                                    src="https://res.cloudinary.com/devx83poh/image/upload/v1766512862/daniel2_mzgw3y.png"
                                    alt="Daniel Deu - Fundador NMO"
                                    width={700}
                                    height={840}
                                    className="w-full h-auto relative z-10"
                                    style={{
                                        filter: 'drop-shadow(0 20px 40px rgba(0, 87, 125, 0.12))',
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
                                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-2xl z-20"
                                style={{
                                    boxShadow: '0 20px 60px rgba(0, 87, 125, 0.15)'
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                                        style={{ backgroundColor: 'rgba(138, 211, 242, 0.2)' }}
                                    >
                                        📚
                                    </div>
                                    <div>
                                        <div
                                            className="font-semibold text-base"
                                            style={{ color: '#00577d' }}
                                        >
                                            Autor & Educador
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            30+ años de experiencia
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ELEMENTOS DECORATIVOS MUY SUTILES */}
                            <div
                                className="absolute top-24 -left-8 w-40 h-40 rounded-full opacity-5 -z-10"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute bottom-32 -right-12 w-48 h-48 rounded-full opacity-5 -z-10"
                                style={{ backgroundColor: '#00577d' }}
                            />

                            {/* Puntos decorativos muy sutiles */}
                            <div
                                className="absolute top-20 left-16 w-2 h-2 rounded-full opacity-20"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute top-24 left-20 w-2 h-2 rounded-full opacity-20"
                                style={{ backgroundColor: '#8ad3f2' }}
                            />
                            <div
                                className="absolute bottom-32 right-20 w-3 h-3 rounded-full opacity-15"
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
            </div>
        </Section>
    );
}