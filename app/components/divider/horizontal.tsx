import { cn } from "@/lib/ultils"

type HorizontalDividerProps = {
    className?: string
}

export const HorizontalDivider = ({className}: HorizontalDividerProps) => {
    return (
        <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
    )
}