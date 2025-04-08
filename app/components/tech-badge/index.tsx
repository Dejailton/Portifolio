type TechBadgeProps ={
    name: string;
}
export const TechBadge = ({ name }: TechBadgeProps) => {
    return (
        <span className="text-white-400 bg-emerald-500/80 text-sm py-1 px-3 roudend-lg">
            {name}
        </span>
    )
}