'use client';
import { scrollToSection } from '@/app/Lenis/Lenis';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { AppWindow, EqualApproximately, Contact, Moon, SunMoon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import setThemeState from "@/app/Zustand/store";
import { useEffect, useState } from "react";

const navigationMenuItems = [
  { title: "About", href: "#About", icon: EqualApproximately, isActive: true },
  { title: "Projects", href: "#Projects", icon: AppWindow, isActive: false },
  { title: "Contact", href: "#Contact", icon: Contact, isActive: false },
];

export default function NavigationMenuWithActiveItem() {
  const { resolvedTheme, setTheme } = useTheme();
  const ToggleTheme = setThemeState((state) => state.ToggleTheme);
  const [mounted, setMounted] = useState(false);
  const [activemenuIndex,setActivemenu] = useState(0);

  useEffect(() => {
    setMounted(true);
    ToggleTheme(resolvedTheme || "light");
  }, [resolvedTheme]);

  return (
    <div className="w-full flex md:justify-end lg:justify-end justify-start items-center py-4">
      <div className="flex md:w-[90%] lg:w-[90%] w-[80%] justify-end md:px-20 lg:px-20 ">
      <NavigationMenu>
        <NavigationMenuList className="space-x-8">
          {navigationMenuItems.map((item,index) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink 
                onClick={()=>{setActivemenu(index)}}
                className={cn(
                  "relative group inline-flex h-9 w-max items-center justify-center px-0.5 py-2 text-sm font-medium",
                  "before:absolute before:bottom-0 before:inset-x-0 before:h-[2px] before:bg-primary before:scale-x-0 before:transition-transform",
                  "hover:before:scale-x-100 hover:text-accent-foreground",
                  "focus:before:scale-x-100 focus:text-accent-foreground focus:outline-none",
                  "disabled:pointer-events-none disabled:opacity-50",
                  "data-[active]:before:scale-x-100 data-[state=open]:before:scale-x-100"
                )}
                asChild
                active={index == activemenuIndex}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <div className="flex md:w-[10%] lg:w-[10%] w-[20%] md:pr-20  lg:pr-20 pr-5 justify-end">
      <div className="ml-4 bg-background200 p-2 rounded-lg">
        {mounted && (
          resolvedTheme === "dark" ? (
            <SunMoon
              className="cursor-pointer text-yellow-600"
              onClick={() => {
                setTheme("light");
                ToggleTheme("light");
              }}
            />
          ) : (
            <Moon
              className="cursor-pointer"
              onClick={() => {
                setTheme("dark");
                ToggleTheme("dark");
              }}
            />
          )
        )}
      </div>
      </div>
    </div>
  );
}
