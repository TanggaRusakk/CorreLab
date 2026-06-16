import Image from "next/image";
import { Mail, ShieldCheck } from "lucide-react";
import { verifySession } from "@/lib/session";
import prisma from "@/lib/prisma";
import LogoutButton from "@/components/LogoutButton";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await verifySession();
  if (!session) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId }
  });

  if (!user) {
    redirect("/login");
  }

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
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-outline-variant bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-headline-lg text-2xl uppercase">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-background">{user.name}</h3>
              <p className="text-body-sm text-on-surface-variant flex items-center gap-xs mt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Standard User
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
                <p className="font-body-md text-on-background">{user.email}</p>
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
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
