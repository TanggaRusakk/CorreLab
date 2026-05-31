"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlusCircle, Clock, User } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "New Analysis",
    href: "/new-analysis",
    icon: <PlusCircle className="h-4 w-4" />,
  },
  {
    label: "Dataset History",
    href: "/history",
    icon: <Clock className="h-4 w-4" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 flex-col bg-[#0F172A] text-white">
      {/* Logo */}
      <div className="px-6 py-6">
        <h1 className="text-xl font-bold tracking-tight text-white">
          CorreLab
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-3">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#38BDF8]/20 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-white/10 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700">
            <User className="h-4 w-4 text-slate-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              Dr. E. Anderson
            </span>
            <span className="text-xs text-[#38BDF8]">Enterprise Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
