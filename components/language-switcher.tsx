
"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const toggleLanguage = () => {
        const nextLocale = locale === "es" ? "en" : "es"
        router.replace(pathname, { locale: nextLocale })
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="font-mono text-xs uppercase"
        >
            {locale}
        </Button>
    )
}
