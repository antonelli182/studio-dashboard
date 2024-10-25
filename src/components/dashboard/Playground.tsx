import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Playground() {
  const sampleCode = `// Test your AI agent here
const agent = new MachinaSports.Agent({
  model: "player-analysis-v1"
});`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Playground</CardTitle>
        <CardDescription>Test your AI agents in real-time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm">{sampleCode}</pre>
        </div>
      </CardContent>
    </Card>
  );
}