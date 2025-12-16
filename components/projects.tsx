"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"
import { useState } from "react"

type FilterType = "TODOS" | "Webs" | "Hosting" | "Asistentes"

export function Projects() {
    const t = useTranslations("Projects")
    const [activeFilter, setActiveFilter] = useState<FilterType>("TODOS")

    const projects = [
        {
            category: t("projects.1.category"),
            title: t("projects.1.title"),
            color: "from-blue-500 to-cyan-500",
            stats: t("projects.1.stats"),
            desc: t("projects.1.desc"),
            image: "/proyecto-juridico.png",
            type: "Webs" as FilterType
        },
        {
            category: t("projects.2.category"),
            title: t("projects.2.title"),
            color: "from-orange-500 to-red-500",
            stats: t("projects.2.stats"),
            desc: t("projects.2.desc"),
            image: "/proyecto-burger.png",
            type: "Asistentes" as FilterType
        },
        {
            category: t("projects.3.category"),
            title: t("projects.3.title"),
            color: "from-emerald-500 to-green-500",
            stats: t("projects.3.stats"),
            desc: t("projects.3.desc"),
            image: "/proyecto-inmobiliaria.png",
            type: "Asistentes" as FilterType
        }
    ]

    const filters: FilterType[] = ["TODOS", "Webs", "Hosting", "Asistentes"]

    const filteredProjects = activeFilter === "TODOS"
        ? projects
        : projects.filter(p => p.type === activeFilter)

    return (
        <Section id="proyectos">
            <AnimationWrapper variant="fadeIn">
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        {t("title_start")} <span className="text-gradient">{t("title_grad")}</span>
                    </h1>
                    <p className="text-white/60 max-w-xl mx-auto">
                        {t("desc")}
                    </p>
                </div>
            </AnimationWrapper>

            {/* Filter Pills */}
            <AnimationWrapper variant="slideUp" delay={0.2}>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`
                                px-6 py-2.5 rounded-full font-medium text-sm
                                transition-all duration-300
                                ${activeFilter === filter
                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
                                }
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </AnimationWrapper>

            {/* Projects Grid with Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <StaggerContainer className="grid md:grid-cols-3 gap-6">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={`${activeFilter}-${idx}`}
                                variants={staggerItem}
                                layout
                            >
                                <Card className="group overflow-hidden border-0 bg-neutral-900/50 h-full hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300">
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

                                        {/* Color banner on top of image */}
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
                                    </div>

                                    <div className="p-6">
                                        <div className="text-xs font-medium text-white/40 mb-2 uppercase tracking-wide">{project.category}</div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>

                                        <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/90">
                                            🚀 {project.stats}
                                        </div>

                                        <p className="text-white/60 text-sm leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </StaggerContainer>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-white/40 text-lg">No hay proyectos en esta categoría aún.</p>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </Section>
    )
}
