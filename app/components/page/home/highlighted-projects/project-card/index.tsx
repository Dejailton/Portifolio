import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div>
            <div className="w-full h-full">
                <Image 
                width={420}
                height={304} 
                src="/public/images/logo.png"
                alt="Foto do projeto"
                className="object-cover roudend-lg"
                />
            </div>
        </div>
    )
}