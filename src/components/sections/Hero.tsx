// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { EXTERNAL_LINKS } from "@/config/links";
import { ArrowRightIcon, CheckCircledIcon } from "@radix-ui/react-icons";

const stats = [
    { value: "30+", label: "Años de experiencia" },
    { value: "500+", label: "Profesionales capacitados" },
    { value: "100+", label: "Empresas confiaron" },
];

const benefits = [
    "Metodología basada en neurociencias",
    "Aprendizaje 100% vivencial",
    "Resultados medibles y comprobables",
];

export function Hero() {
    return (
        <Section
            id="hero"
            className="pt-24 pb-16"
            containerClassName="max-w-7xl"
        >
            <style jsx>{`
        .hero-gradient {
          background: linear-gradient(to bottom, #ffffff 0%, rgba(138, 211, 242, 0.1) 100%);
        }
        .text-celeste-dark {
          color: #00577d;
        }
        .text-celeste {
          color: #8ad3f2;
        }
        .border-celeste {
          border-color: rgba(138, 211, 242, 0.3);
        }
        .bg-celeste-gradient {
          background: linear-gradient(135deg, rgba(138, 211, 242, 0.2) 0%, rgba(0, 87, 125, 0.2) 100%);
        }
        .bg-celeste-light {
          background-color: rgba(138, 211, 242, 0.2);
        }
        .bg-celeste-dark-light {
          background-color: rgba(0, 87, 125, 0.3);
        }
      `}</style>

            <div className="hero-gradient absolute inset-0 -z-10"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <div className="text-sm font-semibold text-celeste-dark mb-2">
                            NMO desde 1995
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-celeste-dark"
                        >
                            Transforma tu Potencial{" "}
                            <span className="text-celeste">Neurocognitivo</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-700 leading-relaxed"
                        >
                            Capacitación Neurolúdica NMO. Desarrollamos competencias mediante
                            aprendizaje vivencial basado en neurociencias aplicadas.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-3"
                    >
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircledIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#00577d' }} />
                                <span className="text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Button href="#programas" size="lg" className="group">
                            Explorar Programas
                            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            href={EXTERNAL_LINKS.diagnostico}
                            external
                            variant="secondary"
                            size="lg"
                        >
                            Diagnóstico Gratuito
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="pt-8 border-t border-celeste"
                    >
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    className="text-center sm:text-left"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-celeste-dark">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                >
                    <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-celeste-gradient">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-6xl mb-4">🧠</div>
                                <p className="text-celeste-dark font-semibold text-xl">
                                    Capacitación Neurolúdica NMO
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-celeste-light flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-celeste-dark text-sm">
                                        Capacitación Neurolúdica
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        Desde 1995 transformando profesionales
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-celeste-light rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-celeste-dark-light rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-16 flex justify-center"
            >
                <motion.a
                    href="#programas"
                    className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity group"
                    style={{ color: '#00577d' }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-sm font-medium">Descubre nuestros programas</span>
                    <svg
                        className="w-6 h-6 group-hover:translate-y-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.a>
            </motion.div>
        </Section>
    );
}