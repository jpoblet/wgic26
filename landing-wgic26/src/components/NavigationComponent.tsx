import { ArrowRight, Book, Menu, Sunset, Trees, Zap } from "lucide-react";

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
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
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
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
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
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
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
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <ArrowRight className="size-4 shrink-0" />,
          url: "#",
        }
      ],
    },
  ],
  actions = {
    button1: { title: "Button 1", url: "#" },
  },
}: NavigationComponentProps) => {
  return (
    <section className="py-10 px-12 justify-between w-full fixed bg-background">
      {/* Desktop Menu */}
      <nav className="hidden justify-between lg:flex w-full">
        <div className="flex justify-start items-center gap-6 w-full">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            {/* <img src={logo.src} className="max-h-8" alt={logo.alt} /> */}
            <span className="text-lg">
              {logo.title}
            </span>
          </a>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex 2xl:gap-8 xl:gap-2">
            {menu.map((item) => renderMenuItem(item))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2 w-full justify-end">
          <Button asChild>
            <a href={actions.button1.url}>{actions.button1.title}</a>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-8" alt={logo.alt} />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <img src={logo.src} className="max-h-8" alt={logo.alt} />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                <div className="flex flex-col gap-3">
                  <Button asChild>
                    <a href={actions.button1.url}>{actions.button1.title}</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
        >{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="flex flex-col pt-4 pb-5 px-6">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-max hover:bg-transparent hover:text-white normal-case">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}>
        {item.title}
      </NavigationMenuLink>
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
      className="flex flex-row gap-4 justify-start rounded-none leading-none transition-none outline-none select-none normal-case hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-accent"
      href={item.url}
    >
      <div className="flex gap-2 py-2">
        <div className="text-xs p-0">{item.title}</div>
        {/* {item.description && (
            <p className="text-xs">{item.description}</p>
          )} */}
        {/* <div className="text-accent">{item.icon}</div> */}
      </div>
    </a>
  );
};

export { NavigationComponent };