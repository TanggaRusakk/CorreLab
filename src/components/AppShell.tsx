
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
            <Link href="/profile" className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-outline-variant bg-primary-container text-on-primary-container font-semibold cursor-pointer transition-transform hover:scale-105">
              U
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
