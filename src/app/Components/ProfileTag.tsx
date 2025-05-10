import { ReactNode } from "react"

type ProfileTagProps = {
    svGCode:ReactNode
}

export default function ProfileTag({svGCode}:ProfileTagProps) {
    return(
        <div className="flex p-2 justify-center items-center">
            {svGCode}
        </div>
    )
}