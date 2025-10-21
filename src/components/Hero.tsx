import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '$ whoami';
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="max-w-5xl w-full relative z-10">
        <div className="border border-border bg-card/50 backdrop-blur-sm p-6 md:p-12 hover-glow">
          <div className="flex items-center gap-2 mb-8 text-muted-foreground text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono">user@portfolio:~$</span>
          </div>

          <div className="space-y-6">
            <div className="font-mono text-lg md:text-xl text-primary">
              {displayText}
              {showCursor && <span className="animate-pulse">_</span>}
            </div>

            {/* Screen reader status: announce final output when command completes */}
            <span role="status" aria-live="polite" className="sr-only">
              {commandComplete
                ? 'Command output: Full Stack Developer, Specialized in Node.js and React.'
                : ''}
            </span>

            {commandComplete && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-3 font-mono text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span className="text-foreground">Full Stack Developer</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span className="text-foreground">
                      Specialized in Node.js (Expressjs), React
                    </span>
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
                    Mifatu, Elisha Wisdom
                  </h1>
                  <p className="text-xl md:text-2xl text-secondary font-light">
                    Crafting scalable solutions for modern web
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-primary">1.5+</div>
                    <div className="text-sm text-muted-foreground font-mono">Years Exp</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-secondary">10+</div>
                    <div className="text-sm text-muted-foreground font-mono">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-accent">0</div>
                    <div className="text-sm text-muted-foreground font-mono">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground font-mono">Satisfaction</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => scrollToSection('projects')}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
                  >
                    View Projects
                  </Button>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    size="lg"
                    className="border-border hover:bg-secondary/10 hover:border-secondary font-mono"
                  >
                    Get In Touch
                  </Button>
                </div>

                <div className="flex gap-4 pt-6">
                  <a
                    href="https://github.com/Ronny48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elisha-wisdom-mifatu-3644b028b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:wisdommifatu12@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email Contact"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-8 mx-auto flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
          aria-label="Scroll to About Section"
        >
          <span>Explore More</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
