"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, LogOut, Mail, Building, ShieldCheck } from "lucide-react";

export default function ProfileView() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the dummy auth cookie
    document.cookie = "correlab_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Redirect to login
    router.push("/login");
  };

  return (
    <div className="mx-auto max-w-4xl space-y-lg">
      <div className="mb-xl">
        <h2 className="font-display-lg text-display-lg text-on-background">Your Profile</h2>
        <p className="mt-xs text-body-md text-on-surface-variant">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-lg">
        {/* Left Card: Basic Info */}
        <div className="flex-1 rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
          <div className="flex items-center gap-md border-b border-outline-variant pb-lg">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-outline-variant">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4twhYW4wD_CzUZcp-FhSEHNbrptf7-kFvdUtKtQ_o0iOlRgQxySMaOzKIQzDvaGEcnrZ5sslW1Qyl3w2M4oYPCKs0tcKIT1wGZU5pxxODJocmk19oKhK5Zh-LubdXFciqvp_GzvO_h9hbYh78ALHtggclFrXFo2MyRQBT0deK3clSEA7X71H2K_KTi0DE-RkrqYdkm_5He3s0AZLiGTeMs4Wb-OpkS-xTTyPOYoD5MygPY4GKCJrc1ivWQ9Fzs8rK1eb4NF0W7R8q"
                alt="User profile"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-background">Dr. Jane Data</h3>
              <p className="text-body-sm text-on-surface-variant flex items-center gap-xs mt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Enterprise Admin
              </p>
            </div>
          </div>

          <div className="mt-lg space-y-md">
            <div className="flex items-center gap-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-label-uppercase text-[11px] text-on-surface-variant tracking-wider">Email Address</p>
                <p className="font-body-md text-on-background">jane.data@company.com</p>
              </div>
            </div>
            <div className="flex items-center gap-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <p className="font-label-uppercase text-[11px] text-on-surface-variant tracking-wider">Organization</p>
                <p className="font-body-md text-on-background">Acme Analytics Corp</p>
              </div>
            </div>
            <div className="flex items-center gap-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-label-uppercase text-[11px] text-on-surface-variant tracking-wider">Role</p>
                <p className="font-body-md text-on-background">Lead Data Scientist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Actions */}
        <div className="w-full md:w-80 space-y-lg">
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-lg shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
            <h3 className="font-title-sm text-title-sm text-on-background mb-md">Account Actions</h3>
            <p className="text-body-sm text-on-surface-variant mb-lg">
              To fully exit your secure analytical session, please log out below.
            </p>
            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-error-container py-md font-title-sm text-title-sm text-on-error-container transition-colors hover:bg-error hover:text-on-error"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
