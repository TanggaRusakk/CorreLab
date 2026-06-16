import DatasetTable from "@/components/DatasetTable";
import { verifySession } from "@/lib/session";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await verifySession();
  if (!session) redirect("/login");

  const history = await prisma.analysisHistory.findMany({
    where: { userId: session.userId },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-lg">
      <div className="mb-lg">
        <h2 className="font-headline-md text-headline-md text-on-background">
          Analysis History
        </h2>
        <p className="mt-xs text-body-md text-on-surface-variant">
          Review and export previous model runs.
        </p>
      </div>
      
      <DatasetTable data={history} />
    </div>
  );
}
