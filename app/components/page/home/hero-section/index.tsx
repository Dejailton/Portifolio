import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/Dejailton',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/dejailton-da-silva-queiroz-771867319/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://w.app/dejailton',
        icon: <TbBrandWhatsapp />
    },
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[500px]">
                    <p className="font-mono text-blue-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Dejailton da Silva Queiroz</h2>

                    <p className="text-blue-400 my-6 text-sm sm:text-base">  Sou um Desenvolvedor com experiência em Java, Python, Spring, Next.js, JavaScript e TypeScript. Possuo conhecimento em HTML, CSS, Docker, Kubernetes, arquitetura MVC, princípios SOLID, além de expertise em versionamento com Git/GitHub e gerenciamento de bancos de dados utilizando SQL Server. Tenho experiência na manutenção e administração de sistemas GNU/Linux e Windows, bem como na implementação de testes unitários com JUnit e Mockito. Trabalho de forma colaborativa, utilizando metodologias ágeis como Scrum para garantir entregas eficientes e de alta qualidade.</p>
                    
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                            <TechBadge name="Java"/> <TechBadge name="Python"/> <TechBadge name="Spring"/> <TechBadge name="Next.js"/> <TechBadge name="JavaScript"/> <TechBadge name="TypeScript"/> <TechBadge name="HTML"/> <TechBadge name="CSS"/> <TechBadge name="Docker"/> <TechBadge name="Kubernetes"/>
                    </div>
                    
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    className="w-[350px] h-[350px] lg:w-[470px] lg:h-[470px] mb-6 lg:mb-0 rounded-lg object-cover"
                    width={420}
                    height={404}
                    src="/images/profile-pic.png"
                    alt="Foto de perfil"
                   
                />
                
            </div>
        </section>
    )
}