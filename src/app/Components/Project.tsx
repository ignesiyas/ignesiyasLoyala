import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard"
import Image from "next/image"
export default function Projects(){
    return(
    <div className="w-full flex justify-center flex-col">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-2/2"
    >
      <CarouselContent className="">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard 
                title="Lease Reconciliation System"
                description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                imageUrl="/project-management-7440746_1920.jpg"
                tags={["HTML", "CSS", "JavaScript","SQL","OutSystems","Rest API","SnowFlake"]}
                />
          </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard 
                    title="CASA"
                    description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                    imageUrl="/project-management-7440746_1920.jpg"
                    tags={["HTML", "CSS", "JavaScript","SQL","OutSystems","EppPlus"]}
                    />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                    title="Order Reconciliation System"
                    description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                    imageUrl="/project-management-7440746_1920.jpg"
                    tags={["HTML", "CSS", "JavaScript","SQL","OutSystems","EppPlus","DraggableJS"]}
                    />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                    title="FMS"
                    description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                    imageUrl="/project-management-7440746_1920.jpg"
                    tags={["HTML", "CSS", "JavaScript","SQL","OutSystems","EppPlus"]}
                    />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                    title="CMS"
                    description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                    imageUrl="/project-management-7440746_1920.jpg"
                    tags={["HTML", "CSS", "JavaScript","SQL","OutSystems","EppPlus","Rest API","SharePoint"]}
                    />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                    title="RMS"
                    description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                    imageUrl="/project-management-7440746_1920.jpg"
                    tags={["HTML", "CSS", "JavaScript","SQL","OutSystems","EppPlus","DraggableJS"]}
                    />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                    title="PRK"
                    description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                    imageUrl="/project-management-7440746_1920.jpg"
                    tags={["HTML", "CSS", "JavaScript","Leaflet","Mapbox","OutSystems","EppPlus","Deepl","JiraAPI"]}
                    />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                    title="Unifeeder (POC)"
                    description="I'm a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments"
                    imageUrl="/project-management-7440746_1920.jpg"
                    tags={["HTML", "CSS", "JavaScript","Outsystems","Rest API"]}
                    />
            </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="flex gap-6 justify-center mt-6  md:flex-row lg:flex-row flex-wrap">
    <Image
        src="/Architecture.webp"
        width={0}
        height= {0}
        alt={"Arc"} 
        sizes="100vw"
        className="md:w-[100px] md:h-[130px] lg:w-[100px] lg:h-[130px] w-[90px] h-[120px]"   
    />
    <Image
        src="/Group 1597881468.webp"
        width={0}
        height= {0}
        alt={"Reactive"} 
        sizes="100vw"
        className="md:w-[100px] md:h-[130px] lg:w-[100px] lg:h-[130px] w-[90px] h-[120px]"       
    />
    <Image
        src="/mobiledev.webp"
        width={0}
        height= {0}
        alt={"Mobile"} 
        sizes="100vw"
        className="md:w-[100px] md:h-[130px] lg:w-[100px] lg:h-[130px] w-[90px] h-[120px]"     
    />
    <Image
        src="/ODC.webp"
        width={0}
        height= {0}
        alt={"ODC"} 
        sizes="100vw"
        className="md:w-[100px] md:h-[130px] lg:w-[100px] lg:h-[130px] w-[90px] h-[120px]"    
    />
    <Image
        src="/Security.webp"
        width={0}
        height= {0}
        alt={"sec"} 
        sizes="100vw"
        className="md:w-[100px] md:h-[130px] lg:w-[100px] lg:h-[130px] w-[90px] h-[120px]"    
    />   
    </div> 
    </div>
    )
}