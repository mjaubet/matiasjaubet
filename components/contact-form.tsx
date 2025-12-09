"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useTranslations } from "next-intl"
import Script from "next/script"
import { Button } from "@/components/ui/button"

declare global {
    interface Window {
        grecaptcha: any;
    }
}

export function ContactForm() {
    const t = useTranslations("Footer")
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const schema = z.object({
        name: z.string().min(1, t("errors.name_required")),
        email: z.string().email(t("errors.email_invalid")).min(1, t("errors.email_required")),
        whatsapp: z.string().min(1, t("errors.whatsapp_required")),
        country: z.string().min(1, t("errors.country_required")),
        need: z.string().min(1, t("errors.need_required")),
    })

    type FormData = z.infer<typeof schema>

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        setStatus("submitting")
        try {
            if (window.grecaptcha) {
                window.grecaptcha.enterprise.ready(async () => {
                    const token = await window.grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'contact_submit' });

                    const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ...data, token }),
                    })

                    if (!res.ok) throw new Error("Failed to send")
                    setStatus("success")
                    reset()
                });
            } else {
                console.error("Recaptcha not loaded")
                setStatus("error")
            }
        } catch (error) {
            console.error(error)
            setStatus("error")
        }
    }

    return (
        <div id="contact" className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
            <Script
                src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="afterInteractive"
            />
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full -z-10" />

            <h3 className="text-2xl font-bold mb-4">{t("form_title")}</h3>
            <p className="text-white/60 mb-6 text-sm">
                {t("form_subtitle")}
            </p>

            {status === "success" ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                    <h4 className="text-green-400 font-bold mb-2">{t("success_title")}</h4>
                    <p className="text-white/70 text-sm">{t("success_desc")}</p>
                    <Button variant="ghost" className="mt-4 text-green-400 hover:text-green-300" onClick={() => setStatus("idle")}>
                        {t("submit")}
                    </Button>
                </div>
            ) : (
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-white/50 ml-1">{t("label_name")}</label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder={t("placeholder_name")}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                            />
                            {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-white/50 ml-1">{t("label_email")}</label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder={t("placeholder_email")}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                            />
                            {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-white/50 ml-1">{t("label_whatsapp")}</label>
                            <input
                                {...register("whatsapp")}
                                type="text"
                                placeholder={t("placeholder_whatsapp")}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                            />
                            {errors.whatsapp && <p className="text-red-400 text-xs ml-1">{errors.whatsapp.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-white/50 ml-1">{t("label_country")}</label>
                            <input
                                {...register("country")}
                                type="text"
                                placeholder={t("placeholder_country")}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                            />
                            {errors.country && <p className="text-red-400 text-xs ml-1">{errors.country.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-white/50 ml-1">{t("label_need")}</label>
                        <textarea
                            {...register("need")}
                            placeholder={t("placeholder_need")}
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                        />
                        {errors.need && <p className="text-red-400 text-xs ml-1">{errors.need.message}</p>}
                    </div>

                    {status === "error" && (
                        <p className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded border border-red-500/20">{t("error_desc")}</p>
                    )}

                    <Button className="w-full" disabled={status === "submitting"}>
                        {status === "submitting" ? t("submitting") : t("submit")}
                    </Button>
                </form>
            )}
        </div>
    )
}
