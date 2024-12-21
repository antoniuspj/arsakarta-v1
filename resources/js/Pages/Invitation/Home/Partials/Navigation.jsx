import React from "react";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { usePage } from "@inertiajs/react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
    const { auth } = usePage().props;

    return (
        <div className="bg-white/30 border px-24 flex border-slate-100 backdrop-blur-lg p-3 sticky top-0">
            <Link
                href="/"
                className={buttonVariants({
                    variant: "link",
                    className: "font-extrabold",
                })}
            >
                <Heart /> ARSKRT
            </Link>
            <Link
                href="/"
                className={buttonVariants({
                    variant: "ghost",
                })}
            >
                Home
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Package</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components
                                                built with Radix UI and Tailwind
                                                CSS.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <Link href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI
                                    and Tailwind CSS.
                                </Link>
                                <Link
                                    href="/docs/installation"
                                    title="Installation"
                                >
                                    How to install dependencies and structure
                                    your app.
                                </Link>
                                <Link
                                    href="/docs/primitives/typography"
                                    title="Typography"
                                >
                                    Styles for headings, paragraphs, lists...etc
                                </Link>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link
                href="/"
                className={buttonVariants({
                    variant: "ghost",
                })}
            >
                About
            </Link>
            <Link
                href={auth ? "/invitation" : "/dashboard"}
                className={buttonVariants({
                    variant: "outline",
                })}
            >
                {auth ? "Dashboard" : "Login"}
            </Link>
        </div>
    );
}
