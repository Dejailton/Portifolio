import { SectionTitle } from "@/app/components/section-title"
import { FaJava, FaPython, FaNode, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import { SiSpring, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb"
import { KnownTech } from "./known-tech"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <div>
            <SectionTitle title="Conhecimentos" className="flex items-center justify-center"/>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {<KnownTech tech={{
                    icon: <FaJava size="30" />,
                    name: 'Java',
                    startDate: '2023-02-02'
                }} />}

                {<KnownTech tech={{
                    icon: <FaPython size="30" />,
                    name: 'Python',
                    startDate: '2023-02-02'
                }} />}

                {<KnownTech tech={{
                    icon: <TbBrandJavascript size="30" />,
                    name: 'JavaScript',
                    startDate: '2024-02-02'
                }} />}
                
                {<KnownTech tech={{
                    icon: <SiSpring size="30" />,
                    name: 'Spring',
                    startDate: '2024-02-02'
                }} />}

                {<KnownTech tech={{
                    icon: <FaNode size="30" />,
                    name: 'Node.js',
                    startDate: '2024-02-02'
                }} />}

                {<KnownTech tech={{
                    icon: <SiTypescript size="30" />,
                    name: 'TypeScript',
                    startDate: '2024-02-02'
                }} />}

                {<KnownTech tech={{
                    icon: <FaHtml5 size="30" />,
                    name: 'HTML5',
                    startDate: '2023-02-02'
                }} />}

                {<KnownTech tech={{
                    icon: <FaCss3Alt size="30" />,
                    name: 'CSS',
                    startDate: '2023-02-02'
                }} />}

                {<KnownTech tech={{
                    icon: <FaDocker size="30" />,
                    name: 'Docker',
                    startDate: '2024-02-02'
                }} />}

            </div>
        </section>
    )
}