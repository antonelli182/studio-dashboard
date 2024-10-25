import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ApiKeyManager() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
        <CardDescription>Manage your API keys for authentication</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input value="sk_live_..." readOnly className="font-mono" />
          <Button variant="secondary">Copy</Button>
        </div>
        <Button>Generate New Key</Button>
      </CardContent>
    </Card>
  );
}