import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, Trash2, Terminal, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
const Saved = () => {
  const savedConfigs = [{
    id: 1,
    title: "React App CI/CD Pipeline",
    type: "GitHub Actions",
    date: "2024-06-14",
    code: `name: React CI/CD
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm run build`
  }, {
    id: 2,
    title: "FastAPI Dockerfile",
    type: "Docker",
    date: "2024-06-13",
    code: `FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`
  }];
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
          <Link to="/playground" className="text-gray-300 hover:text-white transition-colors">
            Try Agent
          </Link>
          <Link to="/saved" className="text-blue-400 font-semibold">
            Saved
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Saved Configurations</h1>
          <p className="text-gray-300 mb-8">Manage and reuse your previously generated DevOps configurations.</p>

          {savedConfigs.length === 0 ? <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="text-center py-12">
                <p className="text-gray-300 mb-4">No saved configurations yet.</p>
                <Link to="/playground">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Generate Your First Config
                  </Button>
                </Link>
              </CardContent>
            </Card> : <div className="space-y-6">
              {savedConfigs.map(config => <Card key={config.id} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white mb-2">{config.title}</CardTitle>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                            {config.type}
                          </Badge>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {config.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(config.code)} className="border-white/20 hover:bg-white/10 text-slate-950">
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10 text-slate-950">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-400/50 text-red-400 hover:bg-red-400/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto border border-white/10">
                      <code className="text-green-400 text-sm">{config.code}</code>
                    </pre>
                  </CardContent>
                </Card>)}
            </div>}
        </div>
      </div>
    </div>;
};
export default Saved;