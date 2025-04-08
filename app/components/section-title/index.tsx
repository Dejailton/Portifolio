import { cn } from "@/lib/ultils";

type SectionTitleProps = {
    title: string;
    className?: string
}

export const SectionTitle = ({
    title,
    className
}: SectionTitleProps) => {
    return (
        <div className={cn('flex flex-cool gap-4', className)}>
            <h3  className="text-3xl font-medium">{title}</h3>
        </div>
    )
}