type TagProps = {
    Name:string,
    classname:string
}
export default function Tag({Name,classname}:TagProps) {
    return(
        <div className={`px-2 py-1  rounded-4xl min-w-[60px] text-center text-sm border-2  ${classname}`}
        >{Name}</div>
    )
}