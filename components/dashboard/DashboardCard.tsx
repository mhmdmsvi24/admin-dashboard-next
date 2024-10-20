import { Card, CardContent } from "@/components/ui/card";

import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-lg lg:text-xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex justify-around md:justify-center md:gap-4 items-center">
          {icon}
          <h3 className="text-2xl font-semibold text-slate-500 dark:text-slate-200">{count}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
