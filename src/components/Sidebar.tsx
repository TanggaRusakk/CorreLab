"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart2, Clock } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    label: "New Analysis",
    href: "/new-analysis",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    label: "History",
    href: "/history",
    icon: <Clock className="h-5 w-5" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-20 flex h-screen w-sidebar-width flex-col border-r border-outline-variant bg-primary-container py-xl">
      <div className="mb-xl px-lg">
        <h1 className="font-display-lg text-display-lg text-on-primary">
          CorreLab
        </h1>
        <p className="mt-xs text-body-sm text-on-primary-container">
          Enterprise Analytics
        </p>
      </div>

      <nav className="flex-1 space-y-sm">
        {navItems.map((item) => {
          // Determine if item is active
          // Note: special case for "/" so it doesn't always match
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item flex cursor-pointer items-center gap-md px-lg py-md transition-all duration-200 ${
                isActive
                  ? "border-l-4 border-tertiary-fixed bg-on-primary-fixed-variant/10 text-tertiary-fixed"
                  : "text-on-primary-container/70 hover:bg-on-primary-fixed-variant/5 hover:text-on-primary"
              }`}
            >
              {item.icon}
              <span className="font-title-sm text-title-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
