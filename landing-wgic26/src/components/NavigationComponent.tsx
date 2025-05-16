import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export default function NavigationComponent() {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/docs" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Section One
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Section Two</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Page 1</NavigationMenuLink>
                            <NavigationMenuLink>Page 2</NavigationMenuLink>
                            <NavigationMenuLink>Page 3</NavigationMenuLink>
                            <NavigationMenuLink>Page 4</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Section Three
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Section Four</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Page 1</NavigationMenuLink>
                            <NavigationMenuLink>Page 2</NavigationMenuLink>
                            <NavigationMenuLink>Page 3</NavigationMenuLink>
                            <NavigationMenuLink>Page 4</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
