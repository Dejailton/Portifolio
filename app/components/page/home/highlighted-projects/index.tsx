import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"

export const HighLightedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle title="Projetos em destaque" className="flex items-center justify-center"/>
            <HorizontalDivider className="mb-16"/>

            <div>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}