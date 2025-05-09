type TagProps = {
    Name:string
}
export default function Tag({Name}:TagProps) {
    return(
        <div className="px-2 py-1 text-primary rounded-4xl min-w-[60px] text-center text-sm border-2 bg-background">{Name}</div>
    )
}