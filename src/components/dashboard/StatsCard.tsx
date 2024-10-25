import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: 'up' | 'down';
}

export function StatsCard({ title, value, subtitle, trend }: StatsCardProps) {
  return (
    <Card className="hover:shadow-md transition-all duration-200 hover:border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn(
          "text-sm mt-1",
          trend === 'up' && "text-green-600 dark:text-green-400",
          trend === 'down' && "text-red-600 dark:text-red-400",
          !trend && "text-muted-foreground"
        )}>{subtitle}</p>
      </CardContent>
    </Card>
  );
}