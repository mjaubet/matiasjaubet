
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn("glass-card rounded-xl p-6 transition-all duration-300", className)}
            {...props}
        >
            {children}
        </div>
    )
}
