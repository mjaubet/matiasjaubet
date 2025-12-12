
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
            className="font-mono text-xs uppercase flex items-center gap-1.5"
        >
            {locale === "es" ? (
                <>
                    <span className="text-base">🇬🇧</span>
                    <span>EN</span>
                </>
            ) : (
                <>
                    <span className="text-base">🇪🇸</span>
                    <span>ES</span>
                </>
            )}
        </Button>
    )
}
