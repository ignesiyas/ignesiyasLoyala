import { ReactNode } from "react"

type ProfileTagProps = {
    svGCode:ReactNode,
    url:string
}

export default function ProfileTag({svGCode,url}:ProfileTagProps) {
    return(
        <div className="flex p-2 justify-center items-center transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
        onClick={() => window.open(url, "_blank")}
        >
            {svGCode}
        </div>
    )
}