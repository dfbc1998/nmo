// src/components/sections/Books.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { EXTERNAL_LINKS } from "@/config/links";
import Image from "next/image";
import { useState } from "react";

const featuredBooks = [
    {
        id: "1",
        title: "Contabilidad del Ser",
        subtitle: "El saber de saberse Parte I",
        author: "Daniel Deu",
        price: "USD $3.44",
        cover: "https://res.cloudinary.com/devx83poh/image/upload/v1766512861/contabilidad1_pj2oow.jpg",
        format: "Digital",
    },
    {
        id: "2",
        title: "Contabilidad del Ser",
        subtitle: "Saber Hacer Parte II",
        author: "Daniel Deu",
        price: "USD $3.44",
        cover: "https://res.cloudinary.com/devx83poh/image/upload/v1766512861/contabilidad2_i7rlq0.jpg",
        format: "Digital",
    },
    {
        id: "3",
        title: "Contabilidad del Ser",
        subtitle: "Saber Ser Parte III",
        author: "Daniel Deu",
        price: "USD $3.44",
        cover: "https://res.cloudinary.com/devx83poh/image/upload/v1766512861/contabilidad3_jnkofs.jpg",
        format: "Digital",
    },
    {
        id: "4",
        title: "24×7 – Ho'oponopono",
        subtitle: "Articulos de Colección",
        author: "Daniel Deu",
        price: "USD $1.00",
        cover: "https://res.cloudinary.com/devx83poh/image/upload/v1766512862/hooponopono_ob2qq9.jpg",
        format: "Digital",
    },
];

function BookCard({ book }: { book: typeof featuredBooks[0] }) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 rounded-xl overflow-hidden hover:shadow-xl flex flex-col transition-all duration-300"
            style={{ borderColor: 'rgba(138, 211, 242, 0.3)' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8ad3f2'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(138, 211, 242, 0.3)'}
        >
            <div className="relative aspect-[3/4] bg-gray-100">
                {!imageError ? (
                    <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-4xl">
                        📚
                    </div>
                )}
                <div
                    className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold"
                    style={{ backgroundColor: 'white', color: '#00577d' }}
                >
                    {book.format}
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#00577d' }}>
                    {book.title}
                </h3>
                {book.subtitle && (
                    <p className="text-sm text-gray-600 mb-2">{book.subtitle}</p>
                )}
                <p className="text-xs text-gray-500 mb-3">{book.author}</p>
                <div className="text-2xl font-bold mb-4 mt-auto" style={{ color: '#00577d' }}>
                    {book.price}
                </div>
                <Button href={EXTERNAL_LINKS.tienda} external className="w-full" size="sm">
                    Ver en Tienda
                </Button>
            </div>
        </motion.div>
    );
}

export function Books() {
    return (
        <Section id="libros" className="bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#00577d' }}>
                    Libros de Daniel Deu
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Explora las publicaciones sobre contabilidad consciente y desarrollo personal
                </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-12 max-w-6xl mx-auto">
                {featuredBooks.map((book, index) => (
                    <div key={book.id} style={{ transitionDelay: `${index * 0.1}s` }}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Button href={EXTERNAL_LINKS.tienda} external variant="outline" size="lg">
                    Ver Todos los Libros
                </Button>
            </div>
        </Section>
    );
}