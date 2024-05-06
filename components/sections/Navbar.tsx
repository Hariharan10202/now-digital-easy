"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import DomainSVG from "../../public/assets/navbar/domain.svg";
import Logo from "../../public/assets/navbar/logo.svg";
import CartIcon from "../../public/assets/navbar/cart.svg";
import DemoSVG from "../../public/assets/navbar/demo.svg";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Cart from "./Cart/Cart";
import { Button } from "../ui/button";

const Build: { title: string; href: string; description: string }[] = [
  {
    title: "Domain",
    href: "/docs/primitives/alert-dialog",
    description: "Purchase & manage your own domain.",
  },
  {
    title: "Hosting",
    href: "/docs/primitives/hover-card",
    description: "Obtain & oversee your hosting solution",
  },
  {
    title: "Google Workspace",
    href: "/docs/primitives/progress",
    description: "Acquire & efficiently manage your workspace.",
  },
  {
    title: "NDE",
    href: "/docs/primitives/scroll-area",
    description: "Connect & optimize your email communication.",
  },
];

const Manage: { title: string; href: string; description: string }[] = [
  {
    title: "Vision Now",
    href: "/docs/primitives/tabs",
    description: "Purchase & manage your own domain.",
  },
  {
    title: "Hosting",
    href: "/docs/primitives/tooltip",
    description: "Obtain & oversee your hosting solution",
  },
  {
    title: "Google Workspace",
    href: "/docs/primitives/progress",
    description: "Acquire & efficiently manage your workspace.",
  },
  {
    title: "NDE",
    href: "/docs/primitives/scroll-area",
    description: "Connect & optimize your email communication.",
  },
];

const Grow: { title: string; href: string; description: string }[] = [
  {
    title: "Mails Now",
    href: "/docs/primitives/tabs",
    description: "Purchase & manage your own domain.",
  },
  {
    title: "Google Ads",
    href: "/docs/primitives/tooltip",
    description: "Acquire & efficiently manage your workspace.",
  },
  {
    title: "Social Medial Ads",
    href: "/docs/primitives/progress",
    description: "Obtain & oversee your hosting solution",
  },
  {
    title: "Marketing planner",
    href: "/docs/primitives/scroll-area",
    description: "Connect & optimize your email communication.",
  },
];

export function Navbar() {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <div className="flex items-center justify-between w-full relative bg-gradient-to-r py-3 px-10 from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)]">
      <div className="flex items-center gap-3">
        <div className="relative lg:w-50 w-[25px] lg:h-50 h-[25px] flex items-center justify-center">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col lg:text-[14px]">
          <span className="font-semibold">Now</span>
          <span className="font-semibold">Digital Easy</span>
        </div>
      </div>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="flex gap-5">
          <NavigationMenuItem>
            <HoverCard>
              <HoverCardTrigger asChild>
                <NavigationMenuTrigger>
                  <span className="lg:text-[18px] font-sans font-semibold">
                    Products
                  </span>
                </NavigationMenuTrigger>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex">
                  <div className="flex gap-5 p-5">
                    <div className="flex flex-col gap-y-5">
                      <div className="w-[780px]">
                        <h1 className="text-xl font-extrabold mb-3">Build</h1>
                        <div className="flex items-center gap-3 flex-wrap">
                          {Build.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 w-[350px] hover:bg-gray-400/10 rounded-lg transition-all cursor-pointer p-2 hover:scale-105"
                            >
                              <div className="w-9 h-9 flex items-center justify-center">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                  <Image
                                    alt="domain"
                                    src={DomainSVG}
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col max-w-[500px]">
                                <span className="font-extrabold">
                                  {item.title}
                                </span>
                                <span className="font-semibold text-xs">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-[780px]">
                        <h1 className="text-xl font-extrabold mb-3">Manage</h1>
                        <div className="flex items-center gap-3 flex-wrap">
                          {Manage.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 w-[350px] hover:bg-gray-400/10 rounded-lg transition-all cursor-pointer p-2 hover:scale-105"
                            >
                              <div className="w-9 h-9 flex items-center justify-center">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                  <Image
                                    alt="domain"
                                    src={DomainSVG}
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col max-w-[500px]">
                                <span className="font-extrabold">
                                  {item.title}
                                </span>
                                <span className="font-semibold text-xs">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-[380px]">
                      <div>
                        <h1 className="text-xl font-extrabold mb-3">Grow</h1>
                        <div className="flex flex-col gap-3 flex-wrap">
                          {Grow.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 w-[350px] hover:bg-gray-400/10 rounded-lg transition-all cursor-pointer p-2 hover:scale-105"
                            >
                              <div className="w-9 h-9 flex items-center justify-center">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                  <Image
                                    alt="domain"
                                    src={DomainSVG}
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="font-extrabold">
                                  {item.title}
                                </span>
                                <span className="font-semibold text-xs">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="w-[300px] h-[550px] bg-gradient-to-l from-[#D2D5FD] via-[#D8DAF8] to-[#FEF3E2] flex items-center justify-center">
                      <div className="w-full h-full relative flex items-center justify-center">
                        <Image src={DemoSVG} alt="demo" className="w-[80%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="lg:text-[18px] font-sans font-semibold">
                Resources
              </span>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="lg:text-[18px] font-sans font-semibold">
                  Pricing
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="lg:text-[18px] font-sans font-semibold">
                  Demo
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                <span className="lg:text-[18px] font-sans font-semibold">
                  More
                </span>
              </NavigationMenuTrigger>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-5">
        <div className="lg:block hidden">
          <div className="flex items-center gap-5 pl-5">
            <div className="flex items-center gap-5">
              <Button
                variant={"secondary"}
                className="outline-none py-2 px-3 text-bg-primary border-2 rounded-lg font-semibold border-bg-primary text-[14px]"
              >
                Log In
              </Button>
              <Button className="outline-none py-2 px-3 text-white bg-bg-primary rounded-lg font-semibold text-[14px]">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Sheet open={isOpen}>
            <div className="w-7 h-7 flex justify-center items-center relative">
              <SheetTrigger>
                <Image
                  alt="cart"
                  src={CartIcon}
                  className="w-full"
                  onClick={() => setOpen(true)}
                />
              </SheetTrigger>
            </div>
            <SheetContent
              closeIcon={false}
              className="p-0 sm:max-w-[600px] w-full"
            >
              <Cart setOpen={setOpen} />
            </SheetContent>
          </Sheet>
        </div>
        <Sheet>
          <SheetTrigger className="block lg:hidden" asChild>
            <GiHamburgerMenu size={30} className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent
            closeIcon={true}
            className="lg:hidden block sm:max-w-[500px]"
            side="right"
          >
            <div className="flex flex-col gap-y-10">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-5 flex-col items-start">
                  <NavigationMenuItem>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <NavigationMenuTrigger>
                          <span className="lg:text-[18px] ml-[3px]">
                            Products
                          </span>
                        </NavigationMenuTrigger>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-col overflow-scroll h-[100vh]">
                          <div className="flex gap-5 p-5 flex-col">
                            <div className="flex flex-col gap-y-5">
                              <div>
                                <div>
                                  <h1 className="text-[16px] font-extrabold mb-3">
                                    Build
                                  </h1>
                                  <div className="flex flex-col gap-x-3 gap-y-2">
                                    {Build.map((item, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-4 w-[400px] hover:bg-gray-400/10 rounded-lg transition-all cursor-pointer p-2 hover:scale-105"
                                      >
                                        <div className="w-8 h-8 flex items-center justify-center">
                                          <div className="bg-blue-600 p-2 rounded-lg">
                                            <Image
                                              alt="domain"
                                              src={DomainSVG}
                                              width={100}
                                              height={100}
                                            />
                                          </div>
                                        </div>
                                        <div className="flex flex-col max-w-[500px]">
                                          <span className="font-extrabold text-[16px]">
                                            {item.title}
                                          </span>
                                          <span className="font-semibold text-sm">
                                            {item.description}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <h1 className="text-[16px] font-extrabold mb-5">
                                    Manage
                                  </h1>
                                  <div className="flex flex-col gap-x-3 gap-y-2">
                                    {Manage.map((item, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-4 w-[400px] hover:bg-gray-400/10 rounded-lg transition-all cursor-pointer p-2 hover:scale-105"
                                      >
                                        <div className="w-8 h-8 flex items-center justify-center">
                                          <div className="bg-blue-600 p-2 rounded-lg">
                                            <Image
                                              alt="domain"
                                              src={DomainSVG}
                                              width={100}
                                              height={100}
                                            />
                                          </div>
                                        </div>
                                        <div className="flex flex-col max-w-[500px]">
                                          <span className="font-extrabold text-[16px]">
                                            {item.title}
                                          </span>
                                          <span className="font-semibold text-sm">
                                            {item.description}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <h1 className="text-[16px] font-extrabold mb-5">
                                  Grow
                                </h1>
                                <div className="flex flex-col gap-y-5 flex-wrap">
                                  {Grow.map((item, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center gap-4 w-[400px] hover:bg-gray-400/10 rounded-lg transition-all cursor-pointer p-2 hover:scale-105"
                                    >
                                      <div className="w-8 h-8 flex items-center justify-center">
                                        <div className="bg-blue-600 p-2 rounded-lg">
                                          <Image
                                            alt="domain"
                                            src={DomainSVG}
                                            width={100}
                                            height={100}
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col max-w-[500px]">
                                        <span className="font-extrabold text-[16px]">
                                          {item.title}
                                        </span>
                                        <span className="font-semibold text-sm">
                                          {item.description}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-full">
                            <div className="w-full h-[520px] bg-gradient-to-l from-[#D2D5FD] via-[#D8DAF8] to-[#FEF3E2] flex items-center justify-center">
                              <div className="w-[300px] h-full relative flex items-center justify-center">
                                <Image src={DemoSVG} alt="demo" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <span className="lg:text-[18px]">Resources</span>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <span className="lg:text-[18px]">Pricing</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <span className="lg:text-[18px]">Demo</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuTrigger
                        className={navigationMenuTriggerStyle()}
                      >
                        <span className="lg:text-[18px]">More</span>
                      </NavigationMenuTrigger>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex items-center gap-5 pl-5">
                <div className="flex items-center gap-5">
                  <Button
                    variant={"secondary"}
                    className="outline-none py-2 px-3 text-bg-primary border-2 rounded-lg font-semibold border-bg-primary text-[14px]"
                  >
                    Log In
                  </Button>
                  <Button className="outline-none py-2 px-3 text-white bg-bg-primary rounded-lg font-semibold text-[14px]">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
