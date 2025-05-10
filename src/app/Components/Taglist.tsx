"use client"; // if using Next.js app router

import { motion } from "motion/react"
import { useEffect, useState } from "react";
import Tag from "./Tag";

type TagListProps = {
    tags: string[];
}


export default function TechStack({tags}: TagListProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setMounted(true);
  }, []);

  return (
    <div className="p-4 bg-background200 rounded-xl md:w-full lg:w-[40%] w-full">
      <div className="text-accent300 font-semibold mb-4 text-xl">Tech Stacks</div>
      <div className="ml-1">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag , index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.4 }}
            >
              <Tag Name={tag} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
