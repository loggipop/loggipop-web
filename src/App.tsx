import { InstallTabs } from "@/components/InstallTabs";
import { CodeBlock } from "@/components/CodeBlock";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  GitBranch,
  Zap,
  Terminal,
  Lock,
  RefreshCw,
} from "lucide-react";
import "./index.css";

export function App() {
  const scrollToQuickStart = () => {
    const element = document.getElementById("quick-start");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openGitHub = () => {
    window.open("https://github.com/loggipop/lpop", "_blank");
  };

  const openNpm = () => {
    window.open("https://www.npmjs.com/package/@loggipop/lpop", "_blank");
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 sm:gap-3 text-lollipop text-lg sm:text-xl mb-6 sm:mb-8">
            <span className="text-2xl sm:text-3xl">🍭</span>
            <span className="font-bold tracking-wide">Loggipop</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="gradient-hero bg-clip-text text-transparent">
              Never lose
            </span>
            <br />
            <span className="text-foreground">your secrets</span>
            <span className="text-lollipop">.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Secure environment variables in your system keychain. One CLI
            command to store, retrieve, and run with secrets.
          </p>

          <div className="mb-8 sm:mb-12 flex justify-center">
            <InstallTabs />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow w-full sm:w-auto"
              onClick={scrollToQuickStart}
            >
              <Terminal className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted hover:text-foreground hover:border-border w-full sm:w-auto"
              onClick={openGitHub}
            >
              View on GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted hover:text-foreground hover:border-border w-full sm:w-auto"
              onClick={openNpm}
            >
              View on npm
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section
        id="quick-start"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Quick Start
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="text-lollipop">1️⃣</span>
                  Store your secrets
                </h3>
                <CodeBlock
                  code={`# From a .env file
lpop .env.local

# Or add a single variable
lpop API_KEY=secret123`}
                />
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="text-lollipop">2️⃣</span>
                  Retrieve anywhere
                </h3>
                <CodeBlock
                  code={`# Get all variables 
lpop

# Use with different environments
lpop --env production`}
                />
              </CardContent>
            </Card>

            <Card className="bg-card border-border lg:col-span-2">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="text-lollipop">3️⃣</span>
                  Skip .env files entirely
                </h3>
                <CodeBlock
                  code={`# Run commands with keychain variables loaded
lpop env -- npm start
lpop env -- bun dev
lpop env --env production -- npm run build`}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Why lpop?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure by Design"
              description="Uses your system's native keychain for maximum security. No plaintext secrets in your repos."
            />

            <FeatureCard
              icon={<GitBranch className="h-8 w-8" />}
              title="Git-aware"
              description="Automatically organizes variables by repository and environment. Perfect for multiple projects."
            />

            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Lightning Fast"
              description="Instant access to your environment variables. No database, no network calls, just your keychain."
            />

            <FeatureCard
              icon={<Lock className="h-8 w-8" />}
              title="Never Lose Secrets"
              description="Clone repos anywhere and restore your secrets instantly. Perfect for AI coding tools."
            />

            <FeatureCard
              icon={<RefreshCw className="h-8 w-8" />}
              title="Environment Support"
              description="Separate variables for development, staging, and production environments."
            />

            <FeatureCard
              icon={<Terminal className="h-8 w-8" />}
              title="Zero Config"
              description="Works out of the box. Just install and start storing your secrets securely."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            How It Works
          </h2>

          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <p className="text-muted-foreground mb-6 text-center">
                lpop automatically detects your git repository and organizes
                variables by project and environment:
              </p>

              <CodeBlock
                code={`🔐 System Keychain
├── 📁 lpop://user/project
│   ├── 🔑 API_KEY - repo level api key
│   └── 🔑 SECRET_TOKEN - repo level token
├── 📁 lpop://user/project?env=development
│   └── 🔑 DATABASE_URL - development database
└── 📁 lpop://user/project?env=production
    └── 🔑 DATABASE_URL - production database`}
                showCopy={false}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2 mb-4">
              <span className="text-lollipop text-xl">🍭</span>
              <span className="font-bold">Loggipop</span>
            </p>
            <p>Secure environment variable management for developers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
