
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    className?: string
    id?: string
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16  px-6 md:px-8 max-w-7xl mx-auto w-full", className)}
            {...props}
        >
            {children}
        </section>
    )
}
