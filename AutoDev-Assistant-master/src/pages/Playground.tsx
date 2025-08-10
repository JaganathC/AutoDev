import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, Save, Loader2, Bot, Terminal, Settings, Code } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
const Playground = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const agents = [{
    id: "docker",
    name: "Docker Agent",
    icon: Terminal,
    color: "blue"
  }, {
    id: "cicd",
    name: "CI/CD Agent",
    icon: Settings,
    color: "purple"
  }, {
    id: "yaml",
    name: "YAML Validator",
    icon: Code,
    color: "green"
  }, {
    id: "explain",
    name: "ExplainBot",
    icon: Bot,
    color: "orange"
  }];
  const mockResults = {
    docker: {
      title: "Dockerfile",
      code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
      explanation: "This Dockerfile creates a production-ready container for your Node.js application with optimized layers and security best practices."
    },
    cicd: {
      title: "GitHub Actions Workflow",
      code: `name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}`,
      explanation: "This workflow automatically deploys your app to Vercel whenever you push to the main branch, including build optimization and caching."
    }
  };
  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Please enter a task",
        description: "Describe what you want to generate in the input field.",
        variant: "destructive"
      });
      return;
    }
    setLoading(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResults(mockResults);
    setLoading(false);
    toast({
      title: "Generated successfully!",
      description: "Your DevOps configurations are ready."
    });
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "The code has been copied to your clipboard."
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold text-white">AutoDev Assistant</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/playground" className="text-blue-400 font-semibold">
            Try Agent
          </Link>
          <Link to="/saved" className="text-gray-300 hover:text-white transition-colors">
            Saved
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Agent Playground</h1>
          <p className="text-gray-300 mb-8">Describe your DevOps task in natural language and let our AI agents work their magic.</p>

          {/* Input Section */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white">What do you want to build?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="e.g., 'Set up GitHub Action to test a Node.js app and deploy to Vercel' or 'Write a Dockerfile for a Python FastAPI app'" value={input} onChange={e => setInput(e.target.value)} className="min-h-[100px] bg-white/5 border-white/20 text-white placeholder:text-gray-400" />
              <div className="flex items-center space-x-4">
                <Button onClick={handleGenerate} disabled={loading} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  {loading ? <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </> : "Generate"}
                </Button>
                
                {/* Agent Badges */}
                <div className="flex items-center space-x-2">
                  {agents.map(agent => <Badge key={agent.id} variant="outline" className="border-white/20 text-gray-300">
                      <agent.icon className="w-3 h-3 mr-1" />
                      {agent.name}
                    </Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          {results && <div className="space-y-6">
              {Object.entries(results).map(([key, result]: [string, any]) => <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white flex items-center">
                        {agents.find(a => a.id === key)?.icon && React.createElement(agents.find(a => a.id === key)!.icon, {
                    className: "w-5 h-5 mr-2 text-blue-400"
                  })}
                        {result.title}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(result.code)} className="border-white/20 hover:bg-white/10 text-slate-950">
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10 text-slate-950">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10 text-slate-950">
                          <Save className="w-4 h-4 mr-1" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="code" className="w-full">
                      <TabsList className="bg-white/10 border-white/20">
                        <TabsTrigger value="code" className="data-[state=active]:bg-white/20 text-white">
                          Code
                        </TabsTrigger>
                        <TabsTrigger value="explanation" className="data-[state=active]:bg-white/20 text-white">
                          Explanation
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="code" className="mt-4">
                        <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto border border-white/10">
                          <code className="text-green-400 text-sm">{result.code}</code>
                        </pre>
                      </TabsContent>
                      <TabsContent value="explanation" className="mt-4">
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                          <p className="text-gray-300">{result.explanation}</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>)}
            </div>}

          {/* Demo Examples */}
          {!results && <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Try these examples:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {["Set up GitHub Action to test a Node.js app and deploy to Vercel", "Write a Dockerfile for a Python FastAPI app with uvicorn", "CI/CD pipeline for a React app with build step on push"].map((example, index) => <button key={index} onClick={() => setInput(example)} className="text-left p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-gray-300 hover:text-white">
                      "{example}"
                    </button>)}
                </div>
              </CardContent>
            </Card>}
        </div>
      </div>
    </div>;
};
export default Playground;