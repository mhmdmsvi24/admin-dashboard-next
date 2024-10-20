import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex container mx-auto">
        <div className="h-svh md:block w-[300px]">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1114px]">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
