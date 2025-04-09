import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
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
                        <p>@ Desenvolvedor Java</p>
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
                </div>
                
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="/images/exercitobrasileiro.jpg"
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
                        href="https://www.eb.mil.br/" 
                        target="_blank"
                        className="text-gray-500 hover:text-blue-500 trasition-colors"
                    >
                        <p>@ Exército Brasileiro</p>
                        Parque Regional de Manutenção 7
                    </a>
                    <h4 className="text-blue-300">Cabo </h4>
                    <h5 className="text-gray-300"> Técnico de Redes | Técnico em Manutenção de Hardware e Software | Suporte Técnico</h5>
                    <span className="text-gray-500">
                        mar 2019 - fev 2025 (6 anos)
                    </span>
                    <div className="text-gray-400">
                        <p>• Manutenção e atualização de softwares do Exército.</p>
                        <p>• Suporte técnico em hardware e software para usuários internos.</p>
                        <p>• Montagem, manutenção e configuração de computadores e notebooks.</p>
                        <p>• Atendimento a chamados via sistema GLPI para gerenciamento de serviços de TI.</p>
                        <p>• Manutenção de equipamentos de rede e instalação de impressoras em ambiente compartilhado.</p>
                        <p>• Elaboração de escalas de serviço e documentos administrativos.</p>
                        <p>• Coordenação de equipe e acompanhamento de auxiliares do setor de informática.</p>
                        <p>• Atendimento ao público e suporte a usuários diversos.</p>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="Java" />
                    <TechBadge name="JavaScript" />
                    <TechBadge name="HTML" />
                    <TechBadge name="CSS" />
                    <TechBadge name="Linux" />
                    <TechBadge name="Excel" />   
                    <TechBadge name="Joomla" />
                    <TechBadge name="Windows" />
                    <TechBadge name="LibreOffice" />
                </div>
            </div>
        </div>
    )
}