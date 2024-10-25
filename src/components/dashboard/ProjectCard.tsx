import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  lastUpdated: string;
}

export function ProjectCard({ title, description, lastUpdated }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between group/title">
          <span className="group-hover/title:text-primary transition-colors">{title}</span>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </div>
      </CardContent>
    </Card>
  );
}