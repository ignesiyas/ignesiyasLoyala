import MyPhoto from "@/ProjectImages/MyPhoto.png"
import Image from "next/image"
import Tag from "./Tag"
import ProfileTag from "./ProfileTag"

export default function About() {
    const Outsystems = (<svg width="35px" height="35px" viewBox="-11.68 -11.68 39.36 39.36" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" strokeWidth="0.00016"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-11.68" y="-11.68" width="39.36" height="39.36" rx="19.68" fill="#ff2400" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8" fill="#ffffff"></circle> </g></svg>)
    const hackerrank = (<svg fill="#13813a" width="40px" height="40px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 6.9999052,1 c 0.642751,0 4.8750008,2.44275 5.1960008,3 0.3225,0.55725 0.3225,5.44275 0,6 -0.3225,0.55725 -4.5525008,3 -5.1960008,3 -0.6435,0 -4.874999,-2.44275 -5.197499,-3 -0.32025,-0.55725 -0.32025,-5.44275 0,-6 0.3225,-0.55725 4.554749,-3 5.197499,-3 z m 1.14735,3.399 c -0.0705,0 -0.128999,0.05775 -0.128999,0.129 l 0,1.93725 -2.036851,0 0,-2.0115 0.350251,0 c 0.0705,0 0.127499,-0.05775 0.127499,-0.129 0,-0.0465 -0.02475,-0.08775 -0.0615,-0.11025 L 5.6109052,3.46 c -0.024,-0.0315 -0.0705,-0.05475 -0.112499,-0.05475 -0.042,0 -0.08025,0.0225 -0.1035,0.054 l -0.84,0.75525 c -0.036,0.0225 -0.06,0.063 -0.06,0.1095 0,0.07125 0.057,0.129 0.127501,0.129 l 0.3525,0 0.003,5.0175 c 0,0.072 0.05625,0.129 0.1275,0.129 l 0.74625,0 c 0.0705,0 0.129,-0.05775 0.129,-0.1275 l 0,-2.0025 2.037,0 0,2.076 -0.350251,0 c -0.0705,0 -0.127499,0.05775 -0.127499,0.129 0,0.0465 0.024,0.087 0.06,0.1095 l 0.788999,0.75525 c 0.0225,0.03 0.0705,0.05475 0.112501,0.05475 0.042,0 0.0795,-0.0225 0.103499,-0.05475 l 0.84,-0.75525 c 0.036,-0.0225 0.06,-0.063 0.06,-0.1095 0,-0.07125 -0.05775,-0.129 -0.1275,-0.129 l -0.3525,0 -0.003,-5.0175 c 0,-0.072 -0.057,-0.12975 -0.1275,-0.12975 l -0.747,0 0,7.5e-4 z"></path></g></svg>)
    const github = (<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z" fill="#000000"></path> </g></svg>)
    const LinkedIn = (<svg height="35px" width="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle style={{ fill: '#126DB1' }} cx="256" cy="256" r="256"></circle><path style={{ fill: '#125D95' }} d="M256,0c-11.317,0-22.461,0.744-33.391,2.167C348.216,18.53,445.217,125.933,445.217,256 s-97.002,237.47-222.609,253.833C233.539,511.256,244.683,512,256,512c141.385,0,256-114.616,256-256S397.385,0,256,0z"></path><g><path style={{ fill: '#FFFFFF' }} d="M121.878,376.756v-163.6c0-1.234,1.001-2.235,2.235-2.235h52.295c1.234,0,2.235,1.001,2.235,2.235 v163.6c0,1.234-1.001,2.235-2.235,2.235h-52.295C122.879,378.991,121.878,377.991,121.878,376.756z"></path><path style={{ fill: '#FFFFFF' }} d="M144.696,178.643c-18.719,0-33.948-15.23-33.948-33.948s15.229-33.948,33.948-33.948 c18.719,0,33.948,15.23,33.948,33.948S163.415,178.643,144.696,178.643z"></path><path style={{ fill: '#FFFFFF' }} d="M358.271,378.991c-1.466,0-2.654-1.189-2.654-2.653v-57.835c0-18.978-4.266-50.815-32.835-50.815 s-32.835,31.837-32.835,50.815v57.835c0,1.466-1.189,2.653-2.654,2.653h-51.457c-1.466,0-2.654-1.189-2.654-2.653V213.575 c0-1.466,1.189-2.654,2.654-2.654h40.327c1.466,0,2.654,1.189,2.654,2.654v11.057c0,2.128,2.394,3.41,4.142,2.196 c14.998-10.427,32.488-15.907,50.954-15.907c25.026,0,45.747,9.973,59.922,28.841c11.961,15.92,18.548,37.498,18.548,60.759v75.816 c0,1.466-1.189,2.653-2.654,2.653H358.271z"></path></g></g></svg>
)
    return (
        <div>
            <div className="flex w-full mt-10 md:flex-nowrap flex-wrap md:justify-center lg:justify-center justify-start items-center">
                <div className="md:h-[500px] lg:h-[500px]">
                    <div className="flex md:justify-end lg:justify-end justify-center height-auto md:bg-transparent lg:bg-transparent sm:bg-primary200 md:rounded-none lg:rounded-none rounded-b-2xl fade-slide-right flex-col"> 
                        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px] bg-background200 md:rounded-full lg:rounded-full rounded-t-4xl rounded-bl-lg rounded-br-full overflow-hidden border-2 shadow-md shadow-primary300">
                            <Image 
                            src={MyPhoto}
                            alt="My Photo"
                            width={400}
                            height={300}
                            priority
                            />
                        </div> 
                        <div className="flex w-full justify-center">
                            <ProfileTag svGCode={Outsystems}/>
                            <ProfileTag svGCode={hackerrank}/>
                            <ProfileTag svGCode={github}/>
                            <ProfileTag svGCode={LinkedIn}/>
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
                    <div className=" p-4 bg-background200  rounded-xl md:w-full lg:w-[40%] w-full fade-slide-down">
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
                    <div className=" p-4 bg-background200  rounded-xl md:w-full lg:w-[40%] w-full fade-slide-up">
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