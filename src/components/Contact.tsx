import { Mail, MapPin, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  const handleDownloadResume = () => {
    toast.info("Resume download would start here");
    // In real implementation: window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-sm text-primary mb-3">$ cat contact.json</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="border border-border bg-card/30 p-6 md:p-8 hover-glow">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-primary">▸</span> Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:your.email@example.com" className="text-foreground hover:text-primary transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <span className="text-foreground">Remote / Your City, Country</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card/30 p-6 md:p-8 hover-glow">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-secondary">▸</span> Download Resume
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get a detailed overview of my experience, skills, and education.
              </p>
              <Button 
                onClick={handleDownloadResume}
                variant="outline"
                className="w-full border-border hover:border-primary hover:bg-primary/10 font-mono"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="border border-border bg-card/30 p-6">
              <div className="font-mono text-sm space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> availability --status
                </div>
                <div className="text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  Currently accepting new projects
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 border border-border bg-card/30 p-6 md:p-8 hover-glow">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary">▸</span> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-mono text-muted-foreground mb-2 block">
                    Name *
                  </label>
                  <Input 
                    required
                    className="bg-input border-border text-foreground font-mono focus:border-primary focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-mono text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <Input 
                    required
                    type="email"
                    className="bg-input border-border text-foreground font-mono focus:border-primary focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-mono text-muted-foreground mb-2 block">
                  Subject *
                </label>
                <Input 
                  required
                  className="bg-input border-border text-foreground font-mono focus:border-primary focus:ring-primary"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="text-sm font-mono text-muted-foreground mb-2 block">
                  Message *
                </label>
                <Textarea 
                  required
                  className="bg-input border-border text-foreground font-mono focus:border-primary focus:ring-primary min-h-[150px] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="font-mono text-sm text-muted-foreground space-y-2">
            <div>Built with React, TypeScript & Tailwind CSS</div>
            <div className="text-foreground">© 2024 Your Name. All rights reserved.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
