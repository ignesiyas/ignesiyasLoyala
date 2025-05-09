import MyPhoto from "@/ProjectImages/MyPhoto.png"
import Image from "next/image"
import Tag from "./Tag"
export default function About() {
    return (
        <div>
            <div className="flex w-full mt-10 md:flex-nowrap flex-wrap md:justify-center lg:justify-center justify-start items-center">
                <div className="md:h-[500px] lg:h-[500px]">
                    <div className="flex md:justify-end lg:justify-end justify-center height-auto md:bg-transparent lg:bg-transparent sm:bg-primary200 md:rounded-none lg:rounded-none rounded-b-2xl fade-slide-right "> 
                        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px] bg-background200 md:rounded-full lg:rounded-full rounded-t-4xl rounded-bl-lg rounded-br-full overflow-hidden border-2 shadow-md shadow-primary300">
                            <Image 
                            src={MyPhoto}
                            alt="My Photo"
                            width={400}
                            height={300}
                            priority
                            />
                        </div> 
                    </div>
                </div>
                <div className="height-auto flex md:items-start items-start justify-center flex-col">
                    <div className="md:pt-0 lg:pt-0 pt-8  md:pb-0 lg:pb-0 pb-4 md:pl-12 lg:pl-12 text-4xl md:text-4xl text-primary fade-slide-right" > Hi I&apos;m ,</div>
                    <div className="fade-slide-up text-6xl md:text-9xl md:pl-10 pl-0 text-accent200 text-left md:text-left">
                        IGNESIYAS LOYALA
                    </div>
                    <div className="md:pl-12 lg:pl-12 pl-1 mt-2 fade-slide-left">
                        I&apos;m a developer passionate about crafting innovative web solutions, specializing in front-end & Backend technologies, and thriving in collaborative environments.
                    </div>
                    <div className="flex flex-wrap gap-2 md:ml-12 lg:ml-12 ml-1 mt-4">
                    <div className=" p-4 bg-background200  rounded-xl md:w-full lg:w-[40%] w-full">
                        <div className="text-accent300 font-semibold mb-4 text-xl ">Tech Stacks</div>
                        <div className="ml-1">
                            <div className="flex flex-wrap gap-2 ">
                                <Tag Name="HTML"/>
                                <Tag Name="CSS"/>
                                <Tag Name="JavaScript"/>
                                <Tag Name="Next JS"/>
                                <Tag Name="React JS"/>
                                <Tag Name="OutSystems"/>
                                <Tag Name="c#"/>
                            </div>
                        </div>
                    </div>
                    <div className=" p-4 bg-background200  rounded-xl md:w-full lg:w-[40%] w-full">
                        <div className="text-accent300 font-semibold mb-4 text-xl ">Personality</div>
                        <div className="ml-1">
                            <div className="flex flex-wrap gap-2 ">
                                <Tag Name="Team Player"/>
                                <Tag Name="Problem Solver"/>
                                <Tag Name="Fast Learner"/>
                                <Tag Name="Logical Thinker"/>
                                <Tag Name="Creative"/>
                                <Tag Name="Innovative"/>
                            </div>
                        </div>
                    </div> 
                </div> 
                </div>
            </div>         
        </div>
    )
}