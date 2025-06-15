import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Tag from "./Tag";
type projectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}
export default function ProjectCard(
    {
        title,
        description,
        tags
    }:projectCardProps){
        return(
            <>
            <Card className="w-full min-h-[250px] p-0 pb-2 mb-4 shadow-sm flex flex-row pt-5">
                <div className="py-2 px-4 flex gap-4 flex-col">
                    <CardTitle className="text-primary">{title}</CardTitle>
                    <CardContent className="p-0 flex gap-4 flex-col text-sm">
                        <div>{description}</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                        {
                            tags.map((tag) => (
                                <Tag key={tag} Name={tag} classname=" bg-tag-neutral text-primary" />
                            ))
                        }
                        </div>
                    </CardContent>
                </div>

            </Card>
            </>
        )
}