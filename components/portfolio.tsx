
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { ArrowUpRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/routing"
import { motion } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"
import { useState, useEffect } from "react"
import { getFeaturedProjects, getStrapiImageUrl, getStrapiImageAlt, type Project } from "@/lib/strapi"

export function Portfolio() {
    const t = useTranslations("Portfolio")
    const locale = useLocale()
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchFeaturedProjects() {
            try {
                setLoading(true)
                const data = await getFeaturedProjects(locale)
                setProjects(data)
            } catch (error) {
                console.error('Error fetching featured projects:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFeaturedProjects()
    }, [locale])

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
            <Section id="portfolio">
                <div className="text-center py-20">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    <p className="text-white/60 mt-4">Cargando proyectos destacados...</p>
                </div>
            </Section>
        )
    }

    return (
        <Section id="portfolio" className="">
            <AnimationWrapper variant="fadeIn">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {t("title_start")} <span className="text-gradient">{t("title_grad")}</span>
                        </h2>
                        <p className="text-white/60 max-w-xl">
                            {t("desc")}
                        </p>
                    </div>
                    <Link href="/proyectos" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                        {t("link")} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </AnimationWrapper>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <motion.div key={project.id} variants={staggerItem}>
                        <Card className="group overflow-hidden border-0 bg-neutral-900/50 h-full">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={getStrapiImageUrl(project.image, 'medium')}
                                    alt={getStrapiImageAlt(project.image, project.title)}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

                                {/* Color banner on top of image */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(project.category)}`} />
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
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </StaggerContainer>

            {/* Empty state */}
            {projects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-white/40">No hay proyectos destacados aún.</p>
                </div>
            )}
        </Section>
    )
}
