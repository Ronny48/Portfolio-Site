import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary glow-text-green">$ touch</span> <span className="text-secondary glow-text-cyan">contact.sh</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-primary/30 bg-card p-6 hover:glow-border-green transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-4 terminal-line">Get In Touch</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">dev@terminal.sh</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                  <span className="text-card-foreground">Available 24/7</span>
                </div>
              </div>
            </div>

            <div className="border border-secondary/30 bg-card p-6">
              <div className="font-mono text-sm space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> status --availability
                </div>
                <div className="text-secondary">
                  ✓ Open to freelance projects
                </div>
                <div className="text-secondary">
                  ✓ Open to collaboration
                </div>
                <div className="text-secondary">
                  ✓ Open to full-time roles
                </div>
              </div>
            </div>
          </div>

          <div className="border border-primary/30 bg-card p-6 hover:glow-border-cyan transition-all duration-300">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-mono text-primary mb-2 block terminal-line">
                  Name
                </label>
                <Input 
                  className="bg-input border-primary/30 text-card-foreground font-mono focus:border-primary focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-sm font-mono text-primary mb-2 block terminal-line">
                  Email
                </label>
                <Input 
                  type="email"
                  className="bg-input border-primary/30 text-card-foreground font-mono focus:border-primary focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-mono text-primary mb-2 block terminal-line">
                  Message
                </label>
                <Textarea 
                  className="bg-input border-primary/30 text-card-foreground font-mono focus:border-primary focus:ring-primary min-h-[120px]"
                  placeholder="Your message here..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border-green font-mono"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> Built with React + Vite + Tailwind
          </div>
          <div className="font-mono text-sm text-muted-foreground mt-2">
            © 2024 Terminal.dev <span className="text-primary animate-pulse">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
