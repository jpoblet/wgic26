"use client"

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Ticket } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";
import Link from "next/link";
import Image from "next/image";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavigationProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  actions?: {
    button: {
      title: string;
      url: string;
    };
  };
}

const Navigation = ({
  logo = {
    url: "/",
    src: "/img/wgic26_logo.svg",
    alt: "logo",
    title: "WGIC26",
  },
  menu = [
    {
      title: "Program",
      url: "/program",
      items: [
        { title: "Topics", url: "/program/topics", description: "...", icon: <ArrowRight /> },
        { title: "Agenda", url: "/program/agenda", description: "...", icon: <ArrowRight /> },
        { title: "Activities", url: "/program/activities", description: "...", icon: <ArrowRight /> },
        { title: "Awards", url: "/program/awards", description: "...", icon: <ArrowRight /> },
      ],
    },
    {
      title: "About",
      url: "/about",
      items: [
        { title: "The Congress", url: "/about/congress", description: "...", icon: <ArrowRight /> },
        { title: "WGI Network", url: "/about/wgi-network", description: "...", icon: <ArrowRight /> },
        { title: "Location & Stay", url: "/about/location", description: "...", icon: <ArrowRight /> },
      ],
    },
    { title: "Speakers", url: "/speakers" },
    {
      title: "Exhibitors & Partners",
      url: "/exhibitors-partners",
      items: [
        { title: "Exhibitors", url: "/exhibitors-partners/exhibitors", description: "...", icon: <ArrowRight /> },
        { title: "Partners", url: "/exhibitors-partners/partners", description: "...", icon: <ArrowRight /> },
      ],
    },
  ],
  actions = {
    button: { title: "Tickets", url: "#" },
  },
}: NavigationProps) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 80);
      setShowNavbar(!(currentScrollY > 1400 && currentScrollY > lastScrollY));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed px-0 lg:px-8 lg:pt-3 top-0 lg:left-0 w-full z-50 transition-all duration-350 ease-in-out transform">
      <nav className={`w-full px-8 py-6 transition-all duration-350 ease-in-out transform border-0 border-white/0 ${showNavbar ? "translate-y-0" : "-translate-y-[160%]"
        } ${scrolled ? "bg-cactus/50 backdrop-blur-xl pl-8 lg:pr-12 lg:py-2 py-8 lg:rounded-2xl border-b-1 lg:border-1 border-white/8" : "bg-transparent"}`}>

        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <Link href={logo.url} className="flex items-center gap-2">
            <AnimatedLogo scrolled={scrolled} visible={showNavbar} />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex 2xl:gap-12 xl:gap-8 gap-2">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild variant={"default"}>
            <a href={actions.button.url}><Ticket size={20} />{actions.button.title}</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden justify-between w-full items-center">
          <Link href={logo.url} className="flex items-center gap-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              height={64}
              width={108}
              className="max-h-16"
            />
          </Link>
          <div className="flex gap-3 sm:gap-2">
            <Button asChild variant={"default"} size="lg" className="hidden sm:flex">
              <a href={actions.button.url}><Ticket size={24} />{actions.button.title}</a>
            </Button>
            <Button className="sm:hidden" variant="default" size="icon">
              <Ticket />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-cactus/50 backdrop-blur-xl rounded-3xl text-white border-1 border-white/8 m-6 pt-32 pb-16 px-10 sm:px-20 md:px-40 w-[calc(100%-24px*2)] h-[calc(100%-24px*2)] sm:max-w-full">
                <div className="flex flex-col gap-6 justify-between h-full">
                  <Accordion
                    type="multiple"
                    className="flex w-full flex-col gap-12 text-regular"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3 items-center">
                    <Button asChild size={"lg"}>
                      <a href={actions.button.url}><Ticket size={24} />{actions.button.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="flex flex-col pt-4 pb-5 pl-6 pr-6 bg-black absolute whitespace-nowrap min-w-min gap-2">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              asChild
              key={subItem.title}
              className="w-max hover:bg-transparent hover:text-white normal-case">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-light uppercase hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col my-6 gap-6">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a className="text-2xl font-light uppercase" key={item.title} href={item.url}>
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 justify-start rounded-none leading-none transition-none outline-none select-none normal-case lg:hover:underline lg:hover:underline-offset-8 lg:hover:decoration-2 lg:hover:decoration-potus"
      href={item.url}
    >
      <div className="flex gap-2 lg:gap-2 py-2">
        <div className="text-lg lg:text-xs lg:pl-0 pl-8">{item.title}</div>
      </div>
    </a>
  );
};

export { Navigation };
