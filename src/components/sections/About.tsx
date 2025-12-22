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
        <>
            <style jsx global>{`
        .text-celeste-dark {
          color: #00577d;
        }
        .text-celeste {
          color: #8ad3f2;
        }
        .bg-celeste-badge {
          background-color: #00577d;
        }
      `}</style>

            <Section id="sobre-nosotros" className="bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-celeste-dark">
                            Fundador de <span className="text-celeste">N.M.O</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Pionero de la Capacitación Neurolúdica en Argentina
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative w-full max-w-md mx-auto ">
                                <Image
                                    src="/images/about/daniel2.png"
                                    alt="Daniel Deu - Fundador NMO"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    style={{ objectPosition: 'center top' }}
                                />
                            </div>
                        </motion.div>

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
                                <p className="text-xl font-semibold text-celeste-dark">
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
                                            <span className="text-celeste-dark mt-1">•</span>
                                            <span>{credential}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

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
                                    <div className="inline-block bg-celeste-badge text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                                        {item.year}
                                    </div>
                                    <p className="text-gray-700 font-medium">{item.event}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}