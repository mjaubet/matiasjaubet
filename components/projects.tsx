"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { useTranslations, useLocale } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"
import { useState, useEffect } from "react"
import { getProjects, getStrapiImageUrl, getStrapiImageAlt, type Project } from "@/lib/strapi"

type FilterType = "ALL" | "web" | "chatbot" | "automatition" | "hosting"

export function Projects() {
    const t = useTranslations("Projects")
    const locale = useLocale()
    const [activeFilter, setActiveFilter] = useState<FilterType>("ALL")
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProjects() {
            try {
                setLoading(true)
                const data = await getProjects(locale)
                setProjects(data)
            } catch (error) {
                console.error('Error fetching projects:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [locale])

    // Obtener categorías únicas de los proyectos
    const categories = Array.from(new Set(projects.map(p => p.category)))
    const filters: FilterType[] = ["ALL", ...categories as FilterType[]]

    const filteredProjects = activeFilter === "ALL"
        ? projects
        : projects.filter(p => p.category === activeFilter)

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            'web': 'from-blue-500 to-cyan-500',
            'chatbot': 'from-orange-500 to-red-500',
            'automatition': 'from-emerald-500 to-green-500',
            'hosting': 'from-purple-500 to-pink-500'
        }
        return colors[category.toLowerCase()] || 'from-gray-500 to-gray-600'
    }

    const getCategoryLabel = (category: string) => {
        const labels: Record<string, string> = {
            'web': 'Web',
            'chatbot': 'Chatbot',
            'automatition': 'Automatización',
            'hosting': 'Hosting'
        }
        return labels[category.toLowerCase()] || category
    }

    if (loading) {
        return (
            <Section id="proyectos">
                <div className="text-center py-20">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    <p className="text-white/60 mt-4">Cargando proyectos...</p>
                </div>
            </Section>
        )
    }

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
                            {filter === "ALL" ? "Todos" : getCategoryLabel(filter)}
                        </button>
                    ))}
                </div>
            </AnimationWrapper>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <StaggerContainer className="grid md:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={staggerItem}
                                layout
                            >
                                <Card className="group overflow-hidden border-0 bg-neutral-900/50 h-full hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300">
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={getStrapiImageUrl(project.image, 'medium')}
                                            alt={getStrapiImageAlt(project.image, project.title)}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

                                        {/* Color banner */}
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(project.category)}`} />

                                        {/* Featured badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                ⭐ Destacado
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="text-xs font-medium text-white/40 mb-2 uppercase tracking-wide">
                                            {getCategoryLabel(project.category)}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        {project.stats && (
                                            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/90">
                                                🚀 {project.stats}
                                            </div>
                                        )}

                                        <p className="text-white/60 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        {project.clientName && (
                                            <p className="text-white/40 text-xs mt-3">
                                                Cliente: {project.clientName}
                                            </p>
                                        )}
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
