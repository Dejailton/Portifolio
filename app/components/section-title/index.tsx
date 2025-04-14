'use client'

import { cn } from "@/lib/ultils";
import { motion } from "framer-motion";

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
            <motion.h3  
                className="text-3xl font-medium"
                initial={{ opacity: 0, x: -100}}
                whileInView={{ opacity: 1, x: 0}}
                exit={{ opacity: 0, x: -100}}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h3>
        </div>
    )
}