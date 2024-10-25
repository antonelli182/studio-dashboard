import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProjectCard } from "@/components/dashboard/ProjectCard";

export const Dashboard = () => {
  return (
    <div className="py-6 md:py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your AI sports analytics projects
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total API Calls"
          value="24,685"
          subtitle="+20.1% from last month"
          trend="up"
        />
        <StatsCard
          title="Active Projects"
          value="8"
          subtitle="+2 new this month"
          trend="up"
        />
        <StatsCard title="Usage" value="82%" subtitle="of monthly quota" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          title="Match Analysis Bot"
          description="Real-time match commentary and analysis generation"
          lastUpdated="2 hours ago"
        />
        <ProjectCard
          title="Player Stats Analyzer"
          description="Deep statistical analysis of player performance"
          lastUpdated="5 hours ago"
        />
      </div>
    </div>
  );
};

export default Dashboard;
