import { Link, useLocation } from 'react-router-dom';
import { CreditCard, KeyRound, LayoutDashboard, PlayCircle, Settings, FolderKanban } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const location = useLocation();

  const links = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: PlayCircle, label: 'Playground', path: '/playground' },
    { icon: FolderKanban, label: 'Projects', path: '/projects' },
    { icon: KeyRound, label: 'API Keys', path: '/api-keys' },
    { icon: CreditCard, label: 'Billing', path: '/billing' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-52 border-r bg-background">
      <div className="space-y-1 py-3">
        {links.map(({ icon: Icon, label, path }) => (
          <Button
            key={path}
            variant="ghost"
            className={cn(
              "w-full justify-start px-4 py-2 h-9",
              location.pathname === path && "bg-accent text-accent-foreground"
            )}
            asChild
          >
            <Link to={path}>
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}