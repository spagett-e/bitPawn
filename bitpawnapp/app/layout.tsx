import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import "./globals.css"


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <SidebarProvider>
            <AppSidebar />
            <main>
             <SidebarTrigger />
             {children}
            </main>
          </SidebarProvider>
        </body> 
      </html>
    )
  }
