// components/ClientWrapper.tsx
"use client"

import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const variants = {
  initial: { opacity: 0, scale: 0.98, filter: "blur(2px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.98, filter: "blur(2px)" },
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0, ease: "easeInOut" }}
          className="transition-all"
        >
          {mounted && children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
