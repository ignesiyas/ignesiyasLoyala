import MyPhoto from "@/ProjectImages/MyPhoto.png"
import Image from "next/image"
export default function About() {
    return (
        <div className="flex w-full mt-10 md:flex-nowrap flex-wrap justify-center items-center">
            <div className="flex md:justify-end lg:justify-end justify-center md:bg-transparent lg:bg-transparent sm:bg-primary200 md:rounded-none lg:rounded-none rounded-b-2xl"> 
                <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px] bg-background200 md:rounded-full lg:rounded-full rounded-t-4xl rounded-bl-lg rounded-br-full overflow-hidden border-2 shadow-md shadow-primary300">
                    <Image 
                    src={MyPhoto}
                    alt="My Photo"
                    width={400}
                    height={300}
                    />
                </div> 
            </div>
            <div className="height-auto flex md:items-start items-start justify-center flex-col">
                <div className="md:pt-0 lg:pt-0 pt-8  md:pb-0 lg:pb-0 pb-4 md:pl-12 lg:pl-12 text-4xl md:text-4xl text-primary" > Hi I&apos;m ,</div>
                <div className="text-6xl md:text-9xl md:pl-10 pl-0 text-accent200 text-left md:text-left">
                    IGNESIYAS LOYALA
                </div>
                <div className="md:pl-12 lg:pl-12 pl-1">
                    I&apos;m an experienced developer with expertise in OutSystems, Next.js, and UI design. A logical thinker and a collaborative team player, I thrive on building efficient and innovative solutions.
                </div>
            </div>
        </div>
    )
}