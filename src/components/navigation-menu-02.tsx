import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AppWindow, House, EqualApproximately,Contact } from "lucide-react";
import Link from "next/link";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: House },
  { title: "About", href: "#blog", icon: EqualApproximately },
  { title: "Projects", href: "#docs", icon: AppWindow },
  { title: "Contact", href: "#contact", icon: Contact },
];

export default function NavigationMenuWithIcon() {
  return (
    <div className="w-full flex justify-end ">
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
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
