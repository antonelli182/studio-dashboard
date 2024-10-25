'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Playground() {
  const [selectedModel, setSelectedModel] = useState("ayrton-1")
  const [selectedExample, setSelectedExample] = useState('match-analysis')

  const examples = {
    'match-analysis': `// Generate real-time match analysis
const agent = new MachinaSports.Agent({
  model: "${selectedModel}"
});

const response = await agent.analyze({
  type: "match_analysis",
  data: {
    match_id: "2024_EPL_123",
    timestamp: "2024-03-15T15:30:00Z",
    event: "Goal scored by Kane (Bayern Munich) - 75th minute",
    context: "Champions League Quarter-final"
  }
});`,
    'player-stats': `// Analyze player performance statistics
const agent = new MachinaSports.Agent({
  model: "${selectedModel}"
});

const response = await agent.analyze({
  type: "player_stats",
  data: {
    player_id: "P123",
    season: "2023-24",
    stats: {
      goals: 25,
      assists: 12,
      shots_on_target: 78,
      pass_accuracy: 0.89
    }
  }
});`,
    'news-summary': `// Generate sports news summary and insights
const agent = new MachinaSports.Agent({
  model: "${selectedModel}"
});

const response = await agent.generate({
  type: "content",
  data: {
    articles: [
      {
        title: "Manchester City dominates Premier League clash",
        content: "...",
        date: "2024-03-15"
      }
    ],
    format: "summary_with_insights"
  }
});`
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Playground</h1>
        <p className="text-muted-foreground">Test and experiment with your AI agents</p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex gap-4 mb-4">
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ayrton-1">ayrton-1 (Latest)</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedExample} onValueChange={setSelectedExample}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select an example" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match-analysis">Match Analysis</SelectItem>
                <SelectItem value="player-stats">Player Statistics</SelectItem>
                <SelectItem value="news-summary">News Summary</SelectItem>
              </SelectContent>
            </Select>
            <Button>Run</Button>
          </div>

          <Tabs defaultValue="code">
            <TabsList>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              <div className="relative rounded-md bg-muted p-4">
                <pre className="text-sm font-mono">
                  {examples[selectedExample]}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="response">
              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm">Response will appear here...</pre>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}