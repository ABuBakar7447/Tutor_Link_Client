import AppSidebar from "@/components/modules/dashboard/sidebar/sidebar";
import Navbar from "@/components/sheared/home/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-24">
    <Navbar/>
      <SidebarProvider>
        <AppSidebar  />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </div>
  );
};

export default layout;
