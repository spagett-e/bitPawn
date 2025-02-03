import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupContent,
  useSidebar
} from "@/components/ui/sidebar"
import { Gamepad2, Info, ShieldCheck, Cog,GalleryVerticalEnd } from "lucide-react"
 

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
  const{ isMobile } = useSidebar()
  return (
    <Sidebar variant="floating" collapsable="icon">
      <SidebarHeader>
       <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
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
