"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export function ContactForm() {
    const t = useTranslations("Footer")
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const schema = z.object({
        name: z.string()
            .min(1, t("errors.name_required"))
            .max(30, "El nombre no puede exceder 30 caracteres")
            .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),
        email: z.string().email(t("errors.email_invalid")).min(1, t("errors.email_required")),
        whatsapp: z.string()
            .min(1, t("errors.whatsapp_required"))
            .regex(/^[0-9+\s()-]+$/, "Solo se permiten números y caracteres telefónicos"),
        country: z.string().min(1, t("errors.country_required")),
        need: z.string()
            .min(1, t("errors.need_required"))
            .max(1000, "El mensaje no puede exceder 1000 caracteres"),
    })

    type FormData = z.infer<typeof schema>

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    // Listen for plan selection events
    useEffect(() => {
        const handlePlanSelected = (event: CustomEvent) => {
            const planName = event.detail.plan;
            const message = `Estoy interesado en el plan: ${planName}`;
            setValue('need', message);
        };

        // Check URL parameters on mount
        const checkUrlParams = () => {
            const hash = window.location.hash;
            const params = new URLSearchParams(hash.split('?')[1] || '');
            const planParam = params.get('plan');

            if (planParam) {
                const planName = planParam.replace(/-/g, ' ');
                const message = `Estoy interesado en el plan: ${planName}`;
                setValue('need', message);
            }
        };

        window.addEventListener('planSelected', handlePlanSelected as EventListener);
        checkUrlParams();

        return () => {
            window.removeEventListener('planSelected', handlePlanSelected as EventListener);
        };
    }, [setValue]);

    const onSubmit = async (data: FormData) => {
        setStatus("submitting")
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                const errorData = await res.json();
                console.error("API Error:", errorData);
                throw new Error(errorData.error || "Failed to send")
            }

            setStatus("success")
            reset()
        } catch (error) {
            console.error(error)
            setStatus("error")
        }
    }

    return (
        <div id="contact" className={`${status === "success" ? "" : "glass-card"} p-6 md:p-8 rounded-2xl relative overflow-hidden`}>
            {status !== "success" && <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full -z-10" />}

            {status === "success" ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                    <h4 className="text-green-400 font-bold text-2xl mb-4">{t("success_title")}</h4>
                    <p className="text-white/70 text-base mb-6">{t("success_desc")}</p>
                    <Button variant="ghost" className="mt-4 text-green-400 hover:text-green-300" onClick={() => setStatus("idle")}>
                        {t("submit")}
                    </Button>
                </div>
            ) : (
                <>
                    <h3 className="text-2xl font-bold mb-4">{t("form_title")}</h3>
                    <p className="text-white/60 mb-6 text-sm">
                        {t("form_subtitle")}
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-white/50 ml-1">{t("label_name")}</label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder={t("placeholder_name")}
                                    maxLength={30}
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
                                    type="tel"
                                    placeholder={t("placeholder_whatsapp")}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                                />
                                {errors.whatsapp && <p className="text-red-400 text-xs ml-1">{errors.whatsapp.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-white/50 ml-1">{t("label_country")}</label>
                                <select
                                    {...register("country")}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none cursor-pointer"
                                    style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba(255,255,255,0.5)%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1.5em 1.5em" }}>
                                    <option value="" className="bg-gray-900">Seleccionar...</option>
                                    <option value="Argentina" className="bg-gray-900">Argentina</option>
                                    <option value="Uruguay" className="bg-gray-900">Uruguay</option>
                                    <option value="Brasil" className="bg-gray-900">Brasil</option>
                                    <option value="Chile" className="bg-gray-900">Chile</option>
                                    <option value="Paraguay" className="bg-gray-900">Paraguay</option>
                                    <option value="Bolivia" className="bg-gray-900">Bolivia</option>
                                    <option value="Perú" className="bg-gray-900">Perú</option>
                                    <option value="Colombia" className="bg-gray-900">Colombia</option>
                                    <option value="Venezuela" className="bg-gray-900">Venezuela</option>
                                    <option value="Ecuador" className="bg-gray-900">Ecuador</option>
                                    <option value="México" className="bg-gray-900">México</option>
                                    <option value="España" className="bg-gray-900">España</option>
                                    <option value="Estados Unidos" className="bg-gray-900">Estados Unidos</option>
                                    <option value="Otro" className="bg-gray-900">Otro</option>
                                </select>
                                {errors.country && <p className="text-red-400 text-xs ml-1">{errors.country.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-white/50 ml-1">{t("label_need")}</label>
                            <textarea
                                {...register("need")}
                                placeholder={t("placeholder_need")}
                                rows={3}
                                maxLength={1000}
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
                </>
            )}
        </div>
    )
}
