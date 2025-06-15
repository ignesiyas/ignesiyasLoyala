"use client"; // if using Next.js app router

import { motion } from "motion/react"
import { useEffect, useState } from "react";
import Tag from "./Tag";

type TagListProps = {
    tags: string[],
    iscenter:boolean
}

export default function TechStack({tags,iscenter}: TagListProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setMounted(true);
  }, []);

  return (
    <div className="rounded-xl md:w-full lg:w-full w-full">
      <div className="ml-1">
        <div className={iscenter ? "flex flex-wrap gap-2 items-center justify-center":"flex flex-wrap gap-2 "}>
          {tags.map((tag , index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.4 }}
            >
              <Tag Name={tag} classname={iscenter == false?"text-primary bg-tag-neutral":"tagTechstack text-neutral-50"}/>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
