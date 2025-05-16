import { Project } from "next/dist/build/swc/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Tag from "./Tag";
type projectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}
export default function projectCard(
    {
        title,
        description,
        imageUrl,
        tags
    }:projectCardProps){
        return(
            <>
            <Card className="min-w-[300px] min-h-[400px] bg-base-100 p-0 pb-2 shadow-sm">
                <Image
                src={imageUrl}
                alt={title}
                width={300}
                height={180}
                />
                <div className="py-2 px-4 flex gap-4 flex-col">
                    <CardTitle className="text-accent300">{title}</CardTitle>
                    <CardContent className="p-0 flex gap-4 flex-col text-sm">
                        <div>{description}</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                        {
                            tags.map((tag) => (
                                <Tag key={tag} Name={tag} />
                            ))
                        }
                        </div>
                    </CardContent>
                </div>

            </Card>
            </>
        )
}