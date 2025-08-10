import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Bot, Settings, Code, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const agents = [
    {
      name: "Docker Agent",
      icon: Terminal,
      description: "Generates production-ready Dockerfiles with security best practices, multi-stage builds, and optimized layers for any application stack.",
      capabilities: ["Multi-stage builds", "Security scanning", "Layer optimization", "Base image recommendations"]
    },
    {
      name: "CI/CD Agent",
      icon: Settings,
      description: "Creates comprehensive CI/CD pipelines for GitHub Actions, GitLab CI, and other platforms with testing, building, and deployment automation.",
      capabilities: ["Cross-platform pipelines", "Test automation", "Deployment strategies", "Environment management"]
    },
    {
      name: "YAML Validator",
      icon: Code,
      description: "Validates YAML syntax, checks for common issues, and suggests improvements for configuration files and pipeline definitions.",
      capabilities: ["Syntax validation", "Best practice checks", "Performance optimization", "Security auditing"]
    },
    {
      name: "ExplainBot",
      icon: Bot,
      description: "Breaks down complex DevOps configurations into simple explanations, helping developers understand and learn from generated code.",
      capabilities: ["Step-by-step explanations", "Best practice insights", "Learning recommendations", "Troubleshooting guides"]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate complex DevOps configurations in seconds, not hours."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "All generated configurations follow industry security best practices."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share and collaborate on configurations with your development team."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
          <Link to="/saved" className="text-gray-300 hover:text-white transition-colors">
            Saved
          </Link>
          <Link to="/about" className="text-blue-400 font-semibold">
            About
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">How AutoDev Assistant Works</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered agents understand natural language descriptions and generate production-ready DevOps configurations tailored to your specific needs.
            </p>
          </div>

          {/* AI Agents Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our AI Agents</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {agents.map((agent, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <agent.icon className="w-6 h-6 mr-3 text-blue-400" />
                      {agent.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{agent.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Capabilities:</h4>
                      <ul className="space-y-1">
                        {agent.capabilities.map((capability, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose AutoDev Assistant?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Describe</h4>
                  <p className="text-gray-300 text-sm">Tell us what you want to build in natural language</p>
                </div>
                <div>
                  <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Process</h4>
                  <p className="text-gray-300 text-sm">Our AI agents analyze and understand your requirements</p>
                </div>
                <div>
                  <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Generate</h4>
                  <p className="text-gray-300 text-sm">Production-ready configs are generated automatically</p>
                </div>
                <div>
                  <div className="bg-orange-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-400 font-bold">4</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Deploy</h4>
                  <p className="text-gray-300 text-sm">Copy, download, or save your configurations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
