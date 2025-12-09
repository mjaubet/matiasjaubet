
"use client"

import { useState, useEffect } from "react"
import { Link } from "@/i18n/routing"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
    const t = useTranslations("Navbar")
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navLinks = [
        { name: t("services"), href: "#servicios" },
        { name: t("plans"), href: "#planes" },
        { name: t("process"), href: "#proceso" },
        { name: t("faq"), href: "#faq" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled && "bg-[#0a0a0a]/80 backdrop-blur-md border-white/10"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold flex items-center gap-2">
                        <span className="text-gradient">Matías</span>
                        <span className="text-white/80 font-light">{t("brand_subtitle")}</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a // Changed to 'a' for anchor links to work on same page without route change
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                        <LanguageSwitcher />
                        <Button asChild>
                            <Link href="#contact">
                                {t("cta")}
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <LanguageSwitcher />
                        <button
                            className="text-white/70 hover:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-b border-white/10">
                    <div className="px-6 py-4 space-y-4 flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-white py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="w-full" asChild>
                            <Link href="#contact" onClick={() => setIsOpen(false)}>
                                {t("cta")}
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
