"use client"

import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { AnimationWrapper } from "@/components/ui/animation-wrapper"
import { useRef } from "react"
import type { Swiper as SwiperType } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function Testimonials() {
    const t = useTranslations("TestimonialsAndFAQ")
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)
    const swiperRef = useRef<SwiperType | null>(null)

    const testimonials = [
        {
            quote: t("testimonials.1.quote"),
            author: t("testimonials.1.author"),
            role: t("testimonials.1.role")
        },
        {
            quote: t("testimonials.2.quote"),
            author: t("testimonials.2.author"),
            role: t("testimonials.2.role")
        },
        {
            quote: t("testimonials.3.quote"),
            author: t("testimonials.3.author"),
            role: t("testimonials.3.role")
        },
        {
            quote: t("testimonials.4.quote"),
            author: t("testimonials.4.author"),
            role: t("testimonials.4.role")
        },
        {
            quote: t("testimonials.5.quote"),
            author: t("testimonials.5.author"),
            role: t("testimonials.5.role")
        },
        {
            quote: t("testimonials.6.quote"),
            author: t("testimonials.6.author"),
            role: t("testimonials.6.role")
        }
    ]

    return (
        <Section className="relative overflow-hidden">
            <div className="flex items-center justify-between mb-12">
                <AnimationWrapper variant="fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {t("testimonials_title_start")} <span className="text-gradient">{t("testimonials_title_grad")}</span>
                    </h2>
                </AnimationWrapper>

                {/* Navigation Arrows */}
                <div className="hidden md:flex items-center gap-3 testimonials-nav-buttons">
                    <button
                        ref={prevRef}
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="testimonials-prev-custom"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button
                        ref={nextRef}
                        onClick={() => swiperRef.current?.slideNext()}
                        className="testimonials-next-custom"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        type: "progressbar",
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="testimonials-swiper pb-20"
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <Card className="bg-white/5 border-none h-full hover:bg-white/10 transition-all duration-300 flex flex-col">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-purple-400 fill-purple-400" />
                                    ))}
                                </div>
                                <p className="text-white/80 italic mb-6 text-lg leading-relaxed flex-grow">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-auto">
                                    <div className="font-bold text-base">{testimonial.author}</div>
                                    <div className="text-white/40 text-sm">{testimonial.role}</div>
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .testimonials-swiper {
                    padding-left: 10px;
                    padding-right: 10px;
                }

                /* Equal height for all slides */
                .testimonials-swiper .swiper-slide {
                    height: auto;
                    display: flex;
                }

                .testimonials-swiper .swiper-slide > div {
                    width: 100%;
                }

                /* Custom Navigation Buttons at Title Level */
                .testimonials-prev-custom,
                .testimonials-next-custom {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(168, 85, 247, 0.2);
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0.7;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(168, 85, 247, 0.9);
                    z-index: 10;
                    position: relative;
                }

                .testimonials-prev-custom:hover,
                .testimonials-next-custom:hover {
                    background: rgba(168, 85, 247, 0.1);
                    border-color: rgba(168, 85, 247, 0.4);
                    opacity: 1;
                    transform: scale(1.05);
                }

                .testimonials-prev-custom.swiper-button-disabled,
                .testimonials-next-custom.swiper-button-disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }

                .testimonials-swiper .swiper-pagination-progressbar {
                    background: rgba(255, 255, 255, 0.1);
                    height: 4px;
                    border-radius: 2px;
                    margin-top: 3rem;
                    position: relative;
                    bottom: 0;
                }

                .testimonials-swiper .swiper-pagination-progressbar-fill {
                    background: linear-gradient(90deg, #a855f7 0%, #ec4899 100%);
                    border-radius: 2px;
                }
            `}</style>
        </Section>
    )
}
