// src/types/index.ts

export interface Program {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: "USD";
    duration?: string;
    modality: "Online" | "Presencial" | "Híbrido";
    url: string;
    icon?: string;
    category: "basic" | "advanced";
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    content: string;
    avatar?: string;
    rating?: number;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: "Lúdica y Cultura" | "Lúdica y Neurociencia";
    date: string;
    url: string;
    image?: string;
    author: string;
}

export interface NavLink {
    name: string;
    href: string;
    external?: boolean;
}