import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavigationComponentProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  actions?: {
    button1: {
      title: string;
      url: string;
    };
  };
}

const NavigationComponent = ({
  logo = {
    url: "#",
    src: "/img/wgic26_logo.svg",
    alt: "logo",
    title: "WGIC26",
  },
  menu = [
    { title: "Program 2026", url: "#" },
    {
      title: "About",
      url: "#",
      items: [
        {
          title: "Section A",
          description: "Get all the answers you need right here",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Section B",
          description: "We are here to help you with any questions you have",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Section C",
          description: "Check the current status of our services and APIs",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Location & Stay",
      url: "#",
      items: [
        {
          title: "Section A",
          description: "Get all the answers you need right here",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Section B",
          description: "We are here to help you with any questions you have",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Section C",
          description: "Check the current status of our services and APIs",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Section D",
          description: "Our terms and conditions for using our services",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Speakers",
      url: "#",
    },
    {
      title: "Submissions",
      url: "#",
      items: [
        {
          title: "Section A",
          description: "Get all the answers you need right here",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Section B",
          description: "We are here to help you with any questions you have",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
      ],
    },
  ],
  actions = {
    button1: { title: "Buy Tickets", url: "#" },
  },
}: NavigationComponentProps) => {
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
    <div className="fixed pl-8 pr-8 pt-6 top-0 left-0 w-full z-50 transition-all duration-350 ease-in-out transform">
      <nav className={`w-full px-8 py-0 transition-all duration-350 ease-in-out transform border-0 border-white/0 ${showNavbar ? "translate-y-0" : "-translate-y-[160%]"
        } ${scrolled ? "bg-cactus/50 backdrop-blur-xl pl-8 pr-12 py-2 rounded-2xl border-1 border-white/8" : "bg-transparent"}`}>

        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <a href={logo.url} className="flex items-center gap-2">
            <AnimatedLogo scrolled={scrolled} visible={showNavbar} />
            {/* <img src={logo.src} className={`transition-all duration-350 ${scrolled ? "max-h-15" : "max-h-18"}`} alt={logo.alt} /> */}
          </a>
          <NavigationMenu>
            <NavigationMenuList className="flex 2xl:gap-8 xl:gap-2">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild variant={"default"}>
            <a href={actions.button1.url}>{actions.button1.title}</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden justify-between w-full items-center">
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-16" alt={logo.alt} />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-cement text-mortar border-none w-full sm:max-w-full">
              <SheetHeader>
                <SheetTitle />
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                <div className="flex flex-col gap-3 items-center">
                  <Button asChild>
                    <a href={actions.button1.url}>{actions.button1.title}</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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
        <NavigationMenuContent className="flex flex-col pt-4 pb-5 pl-4 pr-6">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              asChild
              key={subItem.title}
              className="w-max hover:bg-transparent hover:text-white normal-case"
            >
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
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 justify-start rounded-none leading-none transition-none outline-none select-none normal-case hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus"
      href={item.url}
    >
      <div className="flex gap-2 py-2">
        <div className="text-xs p-0">{item.title}</div>
      </div>
    </a>
  );
};

export { NavigationComponent };
