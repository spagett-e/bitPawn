import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import "./globals.css"
import { ModeToggle } from "@components/mode-toggle"


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <SidebarProvider>
            <AppSidebar />
            <main>
             <SidebarTrigger />
             <ModeToggle />
             {children}
            </main>
          </SidebarProvider>
          </ThemeProvider>
        </body> 
      </html>
    )
  }
