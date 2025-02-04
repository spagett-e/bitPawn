import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <SidebarProvider>
        <html lang="en">
          <body>
            <AppSidebar />
            <SidebarTrigger />
            <main>
              {children}
            </main>
          </body> 
        </html>
      </SidebarProvider>
        
    )
  }
