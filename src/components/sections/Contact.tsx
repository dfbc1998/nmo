// src/components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Aquí integrarás con tu backend o servicio de email
        // Por ahora simulamos el envío
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 1000);
    };

    return (
        <Section id="contacto" className="bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        ¿Listo para <span className="text-blue-600">Transformar</span>?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Contáctanos y comienza tu proceso de capacitación neurolúdica
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Teléfono (opcional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full"
                                size="lg"
                            >
                                {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                            </Button>

                            {status === "success" && (
                                <p className="text-green-600 text-center">
                                    ¡Mensaje enviado! Te contactaremos pronto.
                                </p>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Información de Contacto
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Email</div>
                                        <a href="mailto:info@nmolatam.com" className="text-blue-600 hover:underline">
                                            info@nmolatam.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Ubicación</div>
                                        <div className="text-gray-600">Buenos Aires, Argentina</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💼</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Áreas de Atención</div>
                                        <div className="text-gray-600">
                                            Educativa • Empresarial • Pública • Público en general
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                            <h4 className="font-bold text-gray-900 mb-4">
                                ¿Necesitas un diagnóstico gratuito?
                            </h4>
                            <p className="text-gray-600 mb-6">
                                Solicita una evaluación sin costo para determinar las necesidades
                                de capacitación de tu equipo u organización.
                            </p>
                            <Button variant="secondary" className="w-full">
                                Solicitar Diagnóstico
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}