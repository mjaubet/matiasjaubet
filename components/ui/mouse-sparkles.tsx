"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Sparkle {
    id: number
    x: number
    y: number
}

interface MouseSparklesProps {
    /**
     * Probability of creating a sparkle on mouse move (0-1)
     * Default: 0.3 (30% chance)
     */
    frequency?: number
    /**
     * Size of the sparkle in pixels
     * Default: 2
     */
    size?: number
    /**
     * Initial opacity of the sparkle (0-1)
     * Default: 0.4
     */
    opacity?: number
    /**
     * Color of the sparkle
     * Default: "rgb(168, 85, 247)" (purple-400)
     */
    color?: string
    /**
     * Duration of the animation in seconds
     * Default: 1.5
     */
    duration?: number
    /**
     * Scale multiplier for the animation
     * Default: 3
     */
    scale?: number
    /**
     * Glow intensity (box-shadow blur radius in px)
     * Default: 15
     */
    glowIntensity?: number
}

export function MouseSparkles({
    frequency = 0.3,
    size = 2,
    opacity = 0.4,
    color = "rgb(168, 85, 247)",
    duration = 1.5,
    scale = 3,
    glowIntensity = 15
}: MouseSparklesProps = {}) {
    const [sparkles, setSparkles] = useState<Sparkle[]>([])

    useEffect(() => {
        let sparkleId = 0

        const handleMouseMove = (e: MouseEvent) => {
            // Create sparkle based on frequency
            if (Math.random() > (1 - frequency)) {
                const newSparkle = {
                    id: sparkleId++,
                    x: e.clientX,
                    y: e.clientY
                }
                setSparkles(prev => [...prev, newSparkle])

                // Remove sparkle after animation
                setTimeout(() => {
                    setSparkles(prev => prev.filter(s => s.id !== newSparkle.id))
                }, duration * 1000)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [frequency, duration])

    return (
        <>
            {sparkles.map(sparkle => (
                <motion.div
                    key={sparkle.id}
                    initial={{ opacity: opacity, scale: 0 }}
                    animate={{ opacity: 0, scale: scale }}
                    transition={{ duration: duration, ease: "easeOut" }}
                    className="fixed pointer-events-none z-50 rounded-full"
                    style={{
                        left: sparkle.x,
                        top: sparkle.y,
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: color,
                        boxShadow: `0 0 ${glowIntensity}px ${glowIntensity / 3}px ${color}`
                    }}
                />
            ))}
        </>
    )
}
