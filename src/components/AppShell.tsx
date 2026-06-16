import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Search } from "lucide-react";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen font-body-md text-body-md text-on-background antialiased">
      {/* SideNavBar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="ml-sidebar-width flex min-h-screen flex-1 flex-col">
        {/* TopNavBar */}
        <header className="fixed right-0 top-0 z-10 flex h-16 w-[calc(100%-260px)] items-center justify-between border-b border-outline-variant bg-surface px-lg">
          <div className="flex items-center gap-md font-headline-md text-headline-md text-primary">
            {/* Logo/Title space if needed */}
          </div>
          <div className="flex items-center gap-lg">
            <Link href="/profile" className="relative h-8 w-8 overflow-hidden rounded-full border border-outline-variant bg-surface-variant block cursor-pointer transition-transform hover:scale-105">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4twhYW4wD_CzUZcp-FhSEHNbrptf7-kFvdUtKtQ_o0iOlRgQxySMaOzKIQzDvaGEcnrZ5sslW1Qyl3w2M4oYPCKs0tcKIT1wGZU5pxxODJocmk19oKhK5Zh-LubdXFciqvp_GzvO_h9hbYh78ALHtggclFrXFo2MyRQBT0deK3clSEA7X71H2K_KTi0DE-RkrqYdkm_5He3s0AZLiGTeMs4Wb-OpkS-xTTyPOYoD5MygPY4GKCJrc1ivWQ9Fzs8rK1eb4NF0W7R8q"
                alt="User profile"
                fill
                className="object-cover"
                unoptimized
              />
            </Link>
          </div>
        </header>

        {/* Main Canvas */}
        <main className="custom-scrollbar mx-auto mt-16 w-full max-w-container-max flex-1 p-lg pb-xl">
          {children}
        </main>
      </div>
    </div>
  );
}
