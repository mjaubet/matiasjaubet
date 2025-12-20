"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

interface BreadcrumbItem {
    label: string
    href: string
}

export function Breadcrumbs() {
    const pathname = usePathname()
    const locale = useLocale()
    const t = useTranslations("Breadcrumbs")

    // Remove locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/"

    // Don't show breadcrumbs on home page
    if (pathWithoutLocale === "/") {
        return null
    }

    // Build breadcrumb items
    const pathSegments = pathWithoutLocale.split("/").filter(Boolean)

    const breadcrumbs: BreadcrumbItem[] = [
        {
            label: t("home"),
            href: `/${locale}`
        }
    ]

    // Build cumulative path
    let cumulativePath = `/${locale}`
    pathSegments.forEach((segment) => {
        cumulativePath += `/${segment}`
        breadcrumbs.push({
            label: t(segment) || segment.charAt(0).toUpperCase() + segment.slice(1),
            href: cumulativePath
        })
    })

    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol
                className="flex items-center gap-2 text-sm text-white/60"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1

                    return (
                        <li
                            key={item.href}
                            className="flex items-center gap-2"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            {index === 0 ? (
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 hover:text-purple-400 transition-colors"
                                    itemProp="item"
                                >
                                    <Home className="w-4 h-4" />
                                    <span itemProp="name">{item.label}</span>
                                    <meta itemProp="position" content={String(index + 1)} />
                                </Link>
                            ) : (
                                <>
                                    {isLast ? (
                                        <span
                                            className="text-white/90 font-medium"
                                            itemProp="name"
                                            aria-current="page"
                                        >
                                            {item.label}
                                            <meta itemProp="position" content={String(index + 1)} />
                                        </span>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="hover:text-purple-400 transition-colors"
                                            itemProp="item"
                                        >
                                            <span itemProp="name">{item.label}</span>
                                            <meta itemProp="position" content={String(index + 1)} />
                                        </Link>
                                    )}
                                </>
                            )}

                            {!isLast && (
                                <ChevronRight className="w-4 h-4 text-white/40" />
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
