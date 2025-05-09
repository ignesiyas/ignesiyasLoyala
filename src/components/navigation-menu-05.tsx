import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { AppWindow, EqualApproximately,Contact } from "lucide-react";
import Link from "next/link";

const navigationMenuItems = [
  { title: "About", href: "#blog", icon: EqualApproximately ,isActive: true },
  { title: "Projects", href: "#docs", icon: AppWindow ,isActive: false  },
  { title: "Contact", href: "#contact", icon: Contact ,isActive: false },
];

export default function NavigationMenuWithActiveItem() {
  return (
    <div className="w-full flex md:justify-end lg:justify-end justify-start fade-slide-down ">
    <NavigationMenu>
      <NavigationMenuList className="space-x-8">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={cn(
                "relative group inline-flex h-9 w-max items-center justify-center px-0.5 py-2 text-sm font-medium",
                "before:absolute before:bottom-0 before:inset-x-0 before:h-[2px] before:bg-primary before:scale-x-0 before:transition-transform",
                "hover:before:scale-x-100 hover:text-accent-foreground",
                "focus:before:scale-x-100 focus:text-accent-foreground focus:outline-none",
                "disabled:pointer-events-none disabled:opacity-50",
                "data-[active]:before:scale-x-100 data-[state=open]:before:scale-x-100"
              )}
              asChild
              active={item.isActive}
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
  );
}
