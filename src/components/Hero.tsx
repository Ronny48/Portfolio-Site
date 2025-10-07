import { useState, useEffect } from "react";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "$ whoami";
  const [showCursor, setShowCursor] = useState(true);
  const [commandComplete, setCommandComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setCommandComplete(true), 500);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="border border-primary/30 bg-card p-8 md:p-12 glow-border-green">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <Terminal className="w-5 h-5" />
            <span className="text-sm">terminal@portfolio:~</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="font-mono text-lg md:text-xl">
              <span className="text-primary glow-text-green">
                {displayText}
                {showCursor && <span className="animate-pulse">_</span>}
              </span>
            </div>

            {commandComplete && (
              <div className="space-y-4 animate-fade-in">
                <div className="terminal-line text-muted-foreground">
                  <span className="text-card-foreground">name:</span> Full Stack Developer
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary glow-text-green">
                  JOHN.DEV
                </h1>
                <p className="text-xl md:text-2xl text-secondary glow-text-cyan">
                  Building the future, one commit at a time
                </p>
                <div className="terminal-line text-muted-foreground">
                  <span className="text-card-foreground">status:</span> Available for opportunities
                </div>
                <div className="terminal-line text-muted-foreground">
                  <span className="text-card-foreground">location:</span> Remote / Global
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border-green font-mono"
                  >
                    View Projects
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-secondary text-secondary hover:bg-secondary/10 glow-border-cyan font-mono"
                  >
                    Contact Me
                  </Button>
                </div>

                <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                  <a href="https://github.com" className="text-primary hover:text-secondary transition-colors glow-text-green hover:glow-text-cyan">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com" className="text-primary hover:text-secondary transition-colors glow-text-green hover:glow-text-cyan">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:contact@example.com" className="text-primary hover:text-secondary transition-colors glow-text-green hover:glow-text-cyan">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 text-center text-muted-foreground text-sm font-mono">
          <span className="animate-pulse">▼</span> Scroll to explore <span className="animate-pulse">▼</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
