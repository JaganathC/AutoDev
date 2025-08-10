import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Bot, Settings, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Terminal className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold text-white">AutoDev Assistant</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/playground" className="text-gray-300 hover:text-white transition-colors">
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

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Your AI-Powered
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}DevOps Buddy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Generate GitHub Actions, Dockerfiles, CI/CD pipelines, and validate YAML configs 
            using simple natural language. Let AI handle the complexity while you focus on building.
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <Link to="/playground">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Try AutoDev Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg text-slate-950">
              Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <Bot className="h-12 w-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Generation</h3>
              <p className="text-gray-300">
                Advanced AI agents understand your needs and generate production-ready configs
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <Code className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">Multiple Formats</h3>
              <p className="text-gray-300">
                GitHub Actions, Dockerfiles, CI/CD pipelines, and YAML validation in one place
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <Settings className="h-12 w-12 text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">Smart Explanations</h3>
              <p className="text-gray-300">
                Get detailed explanations of generated configs to learn and understand
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-6 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            Built with <span className="text-blue-400 font-semibold">Trae AI IDE</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
