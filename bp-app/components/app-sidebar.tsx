"use client";

import * as React from "react";
import { GalleryVerticalEnd, Swords, Info, FileText, Cog } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

// User data 
const user = {
  user: {
    name: "Walter",
    email: "test@test.com",
    avatar: "avatars/sample.png"
  },
}
// Menu items
const nav = [
  {
    title: "Classic",
    url: "#",
    icon: Swords,
  },
  {
    title: "Vs Ai",
    url: "#",
    icon: Bot,
  },
  {
    title: "Custom",
    url: "#",
    icon: UserCog,
  },
  {
    title: "About",
    url: "#",
    icon: Info,
  },
]


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">bitPawn</span>
                  <span className="">v0.1.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
            {nav.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href={item.url} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
