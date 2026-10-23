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
    }, 120);

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),transparent_35%)]" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="glass-panel rounded-[28px] p-6 md:p-10 lg:p-12">
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono">user@portfolio:~$</span>
          </div>

          <div className="space-y-6">
            <div className="font-mono text-lg text-primary md:text-xl">
              {displayText}
              {showCursor && <span className="animate-pulse">_</span>}
            </div>

            <span role="status" aria-live="polite" className="sr-only">
              {commandComplete
                ? 'Command output: Full Stack Developer, specialized in building clean product experiences.'
                : ''}
            </span>

            {commandComplete && (
              <div className="animate-fade-in space-y-8">
                <div className="space-y-2 font-mono text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Software Developer</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Full-stack product builder</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl lg:text-7xl">
                    Elisha Wisdom Mifatu
                  </h1>
                  <p className="max-w-2xl text-lg text-muted-foreground md:text-2xl">
                    I design and build web experiences that feel polished, performant, and easy to trust.
                  </p>
                </div>

                <div className="grid gap-4 border-y border-border py-6 md:grid-cols-3">
                  <div>
                    <div className="text-2xl font-bold text-primary md:text-3xl">2+</div>
                    <div className="font-mono text-sm text-muted-foreground">Years experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary md:text-3xl">10+</div>
                    <div className="font-mono text-sm text-muted-foreground">Projects shipped</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary md:text-3xl">100%</div>
                    <div className="font-mono text-sm text-muted-foreground">Problem-solving mindset</div>
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
                    className="border-border hover:border-secondary hover:bg-secondary/10 font-mono"
                  >
                    Get In Touch
                  </Button>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://github.com/Ronny48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elisha-wisdom-mifatu-3644b028b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:wisdommifatu12@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="Email Contact"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mx-auto mt-8 flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to About Section"
        >
          <span>Explore More</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
