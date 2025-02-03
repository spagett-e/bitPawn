import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components it/ui/sidebar"
import { Gamepad2, Info, ShieldCheck, Cog } from "lucide-react"
 

// Menu items.
const items = [
  {
    title: "Play",
    url: "#",
    icon: Gamepad2,
  },
  {
    title: "About",
    url: "#",
    icon: Info,
  },
  {
    title: "Security & Transparency",
    url: "#",
    icon: ShieldCheck,
  },
  {
    title: "Settings",
    url: "#",
    icon: Cog,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
