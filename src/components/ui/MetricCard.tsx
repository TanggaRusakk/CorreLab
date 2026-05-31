interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

export default function MetricCard({
  title,
  value,
  change,
  changeType,
  icon,
}: MetricCardProps) {
  const changeColor =
    changeType === "positive"
      ? "text-emerald-500"
      : changeType === "negative"
        ? "text-red-500"
        : "text-slate-400";

  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white px-5 py-4">
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium tracking-wide text-slate-500">
          {title}
        </p>
        <span className="text-slate-400">{icon}</span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <span className={`text-xs font-medium ${changeColor}`}>{change}</span>
      </div>
    </div>
  );
}
