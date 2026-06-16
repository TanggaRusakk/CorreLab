import DatasetTable from "@/components/DatasetTable";

export default function Page() {
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
      
      <DatasetTable />
    </div>
  );
}
