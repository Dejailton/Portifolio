import { RichText } from '@/app/components/rich-text'
import { TechBadge } from '@/app/components/tech-badge'
import { WorkExperience } from '@/app/types/work-experience'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Image from 'next/image'

type ExperienceItemProps = {
    experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    const {
        endDate,
        companyName,
        companyLogo,
        companyUrl,
        description,
        role,
        roleTwo,
        technologies,
      } = experience
    
      const startDate = new Date(experience.startDate)

      const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
      const formattedEndDate = endDate
        ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
        : 'O momento'
    
      const end = endDate ? new Date(endDate) : new Date()
    
      const months = differenceInMonths(end, startDate)
      const years = differenceInYears(end, startDate)
      const monthsRemaining = months % 12
    
      const formattedDuration =
        years > 0
          ? `${years} ano${years > 1 ? 's' : ''}${
              monthsRemaining > 0
                ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
                : ''
            }`
          : `${months} mes${months > 1 ? 'es' : ''}`

    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="/images/icons/project-title-icon.svg"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="logo do Exército Brasileiro"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a 
                        href="https://api.whatsapp.com/send?phone=5581993510645&text=Ol%C3%A1+Dejailton%21+Estou+entrando+em+contato+para+conversar+sobre+um+trabalho+freelancer!" 
                        target="_blank"
                        className="text-gray-500 hover:text-blue-500 trasition-colors"
                    >
                        <p>@ {experience.companyName}</p>
                    </a>
                    <h4 className="text-blue-300">Freelancer </h4>
                    <h5 className="text-gray-300"> Desenvolvimento Web | Desenvolvimento de APIs | Administração de Sistemas </h5>
                    <span className="text-gray-500">
                        abr 2023 - O momento (2 anos)   
                    </span>
                    <div className="text-gray-400">
                    <p>• Atuação como freelancer no desenvolvimento de aplicações web e APIs utilizando Java, Python, JavaScript, TypeScript, Spring e Next.js.</p>
                    <p>• Construção de interfaces responsivas com HTML e CSS.</p>
                    <p>• Experiência em gerenciamento de bancos de dados relacionais, conteinerização de aplicações com Docker e 
                    orquestração com Kubernetes, versionamento com Git/GitHub e administração de sistemas Linux/Windows.</p>
                    <p>• Aplicação da arquitetura MVC e dos princípios SOLID para garantir código limpo e manutenível. Implementação 
                    de testes unitários com JUnit e Mockito.</p>
                    <p>• Aplicando metodologias ágeis como Scrum para garantir entregas eficientes e colaborativas.</p>

                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="Java" />
                    <TechBadge name="Python" />   
                    <TechBadge name="Spring" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="JavaScript" />
                    <TechBadge name="TypeScript" />
                    <TechBadge name="HTML" />
                    <TechBadge name="CSS" />
                    <TechBadge name="Docker" />
                    <TechBadge name="Kubernetes" />
                </div>
                
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src={companyLogo.url}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt={`Logo da empresa ${companyLogo}`}
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a 
                        href={companyUrl} 
                        target="_blank"
                        className="text-gray-500 hover:text-blue-500 trasition-colors"
                    >
                        <p>@ {experience.companyName}</p>
                        Parque Regional de Manutenção 7
                    </a>
                    <h4 className="text-blue-300">{role}</h4>
                    <h5 className="text-gray-300"> {roleTwo}</h5>
                    <span className="text-gray-500">
                    {formattedStartDate} - {formattedEndDate} (6 anos)
                    </span>
                    <div className="text-gray-400">
                        <RichText content={description.raw} />
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {technologies.map(tech => (
                        <TechBadge key={`experience-${companyName}-tech-${tech.name}`} name={tech.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}